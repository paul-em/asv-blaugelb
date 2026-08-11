/*
  Content-Validation für die statische Vereinsseite.

  Läuft nach `nuxt generate` über den fertigen Output in `.output/public/` und
  bricht mit Exit-Code 1 ab, wenn produktiv sichtbare Platzhalter, kaputte
  Verweise auf eigene Dateien oder fehlende Pflichtangaben gefunden werden.
  Damit schlägt `npm run generate` fehl – und der Deploy-Workflow ebenso.

  Bewusst geprüft wird der gebaute HTML-Output, nicht der Quelltext: In
  `app/data/site.ts` stehen TODO-Hinweise in Kommentaren, die nie auf der Seite
  landen. Verboten ist, was Besucher zu sehen bekommen.

  Aufruf: node scripts/check-content.mjs [Verzeichnis]
*/

import { readdir, readFile, stat } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join, resolve } from 'node:path'

const root = resolve(process.argv[2] ?? '.output/public')

/*
  Platzhalter-Marker. Absichtlich eng gefasst, damit gültige deutsche Prosa
  nicht fälschlich anschlägt: "Beispiel" und "Muster" kommen als normale Wörter
  vor ("zum Beispiel"), deshalb greifen hier nur die Platzhalter-Formen
  (Beispieltext, Mustermann …). Die weiter gefasste Suche gehört in die
  Redaktion, nicht in den Build-Abbruch.
*/
const forbidden = [
  { label: 'TODO', re: /\bTODO\b/i },
  { label: 'FIXME', re: /\bFIXME\b/i },
  { label: 'XXX-Marker', re: /\bXXX\b/ },
  { label: 'Platzhalter', re: /Platzhalter/i },
  { label: 'Lorem ipsum', re: /lorem\s+ipsum/i },
  { label: 'TBD', re: /\bTBD\b/i },
  { label: 'Dummy', re: /\bdummy\b/i },
  { label: 'Beispiel-/Mustertext', re: /\b(Beispieltext|Mustertext|Mustermann|Musterfrau|Max Mustermann)\b/i },
  { label: 'noch zu ergänzen', re: /noch\s+(zu\s+)?ergänzen/i },
  { label: 'noch offen / ungeklärt', re: /\b(noch offen|ungeklärt|fraglich)\b/i },
  { label: 'unbekannt', re: /\bunbekannt\b/i },
  { label: 'nicht gerenderter Ausdruck', re: /\{\{|\}\}/ },
  { label: 'undefined/NaN im Text', re: />\s*(undefined|NaN)\s*</ },
]

/** Pflichtangaben je Seite – fehlen sie, ist die Seite unvollständig. */
const required = [
  { page: 'impressum/index.html', label: 'ZVR-Zahl', re: /ZVR-Zahl/ },
  { page: 'impressum/index.html', label: 'Aufsichtsbehörde', re: /Aufsichtsbehörde/ },
  { page: 'mitgliedschaft/index.html', label: 'IBAN', re: /AT\d{2}(\s?\d{4}){4}/ },
  { page: 'datenschutz/index.html', label: 'Stand-Datum', re: /Stand:\s*\d{2}\.\d{2}\.\d{4}/ },
  { page: 'dokumente/index.html', label: 'PDF-Download', re: /\.pdf"/ },
  { page: 'kontakt/index.html', label: 'E-Mail-Adresse', re: /mailto:/ },
]

const errors = []

async function collect(dir, ext) {
  const out = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...(await collect(full, ext)))
    else if (entry.name.endsWith(ext)) out.push(full)
  }
  return out
}

/** Sichtbarer Text ohne Skripte, Styles und den Nuxt-Payload. */
function visibleText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
}

if (!existsSync(root)) {
  console.error(`✗ Kein Build gefunden: ${root}\n  Zuerst "nuxt generate" ausführen.`)
  process.exit(1)
}

const pages = await collect(root, '.html')
if (pages.length === 0) {
  console.error(`✗ Keine HTML-Seiten in ${root} gefunden.`)
  process.exit(1)
}

// 1. Platzhalter im sichtbaren Text
for (const file of pages) {
  const text = visibleText(await readFile(file, 'utf8'))
  const page = file.slice(root.length + 1)
  for (const { label, re } of forbidden) {
    const hit = text.match(re)
    if (hit) {
      const at = text.indexOf(hit[0])
      const context = text.slice(Math.max(0, at - 60), at + 60).replace(/\s+/g, ' ')
      errors.push(`${page}: Platzhalter „${label}" gefunden – …${context}…`)
    }
  }
}

// 2. Verweise auf eigene Dateien müssen im Build existieren
const assetRe = /(?:href|src)="([^"]+\.(?:pdf|jpg|jpeg|png|svg|webp|txt))"/gi
for (const file of pages) {
  const html = await readFile(file, 'utf8')
  const page = file.slice(root.length + 1)
  for (const [, url] of html.matchAll(assetRe)) {
    if (/^(https?:)?\/\//.test(url) || url.startsWith('data:')) continue
    // baseURL abziehen: der Pfad ist immer absolut ab Site-Wurzel.
    const rel = url.replace(/^\/+/, '').split('?')[0]
    const candidates = [join(root, rel), join(root, rel.split('/').slice(1).join('/'))]
    if (!candidates.some((c) => existsSync(c))) {
      errors.push(`${page}: verlinkte Datei fehlt im Build – ${url}`)
    }
  }
}

// 3. Pflichtangaben
for (const { page, label, re } of required) {
  const file = join(root, page)
  if (!existsSync(file)) {
    errors.push(`${page}: Seite fehlt im Build`)
    continue
  }
  const text = visibleText(await readFile(file, 'utf8'))
  if (!re.test(text)) errors.push(`${page}: Pflichtangabe fehlt – ${label}`)
}

// 4. Leere Dokumente (Größe 0) im Assets-Ordner
const assetsDir = join(root, 'assets')
if (existsSync(assetsDir)) {
  for (const file of await collect(assetsDir, '')) {
    if ((await stat(file)).size === 0) {
      errors.push(`${file.slice(root.length + 1)}: Datei ist leer (0 Byte)`)
    }
  }
}

if (errors.length) {
  console.error(`\n✗ Content-Validation fehlgeschlagen (${errors.length}):\n`)
  for (const e of errors) console.error(`  • ${e}`)
  console.error('')
  process.exit(1)
}

console.log(
  `✓ Content-Validation: ${pages.length} Seiten geprüft – keine Platzhalter, ` +
    'keine toten Datei-Verweise, alle Pflichtangaben vorhanden.',
)
