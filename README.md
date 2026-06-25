# ASV blaugelb Offenhausen – Vereinsseite

Statische Website des **ASV blaugelb Offenhausen** (Ausdauersportverein,
4625 Offenhausen, Oberösterreich). Vollständig statisch – ohne Login, ohne
Datenbank, ohne Server-Logik.

## Tech-Stack

- [Nuxt 4](https://nuxt.com) (Vue 3) im **Static-Site-Generation**-Modus
- [Tailwind CSS v4](https://tailwindcss.com)
- Deployment z. B. auf [Vercel](https://vercel.com), Netlify oder GitHub Pages

## Entwicklung

```bash
npm install      # Abhängigkeiten installieren
npm run dev      # lokaler Dev-Server: http://localhost:3000
```

## Statische Seite bauen

```bash
npm run generate
```

Das Ergebnis liegt in `.output/public/` und kann auf jedem statischen
Webhost (oder GitHub Pages) abgelegt werden. Auf Vercel wird der Befehl
automatisch erkannt.

## Inhalte pflegen

Fast alle Texte, Termine, Trainingszeiten, Vorstand und Kontaktdaten stehen
zentral in **`app/data/site.ts`**. Dort markierte `TODO`-Felder müssen noch
befüllt werden (siehe Frageliste, die mit diesem Projekt übergeben wurde).

## Struktur

```
app/
  assets/css/main.css   # Tailwind + Vereinsfarben (blau-gelb)
  components/           # Header, Footer, Logo, Icons, Karten
  data/site.ts          # ← zentrale Inhaltsdatei
  layouts/default.vue
  pages/                # index, verein, training, termine, mitglied, kontakt, impressum
public/                 # favicon, robots.txt (statische Assets)
```

## Hinweis

Die alte Seite (blaugelb.offenhausen.at) war beim Erstellen nicht abrufbar,
daher beruhen einige Inhalte auf öffentlich auffindbaren Informationen und
Platzhaltern. Bitte vor dem Live-Gang alle `TODO`-Stellen prüfen.
