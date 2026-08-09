# blaugelb Offenhausen – Vereinsseite

Statische Website des **Ausdauersportvereins blaugelb Offenhausen**
(4625 Offenhausen, Oberösterreich). Vollständig statisch – ohne Login, ohne
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
zentral in **`app/data/site.ts`**. Die Herkunft der Daten ist in `docs/`
dokumentiert – dort steht auch, was noch offen ist.

## Struktur

```
app/
  assets/css/main.css   # Tailwind + Vereinsfarben (blau-gelb)
  components/           # Header, Footer, Logo, Icons, Karten
  data/site.ts          # ← zentrale Inhaltsdatei
  layouts/default.vue
  pages/                # index, verein, training, termine, mitglied, kontakt, impressum
docs/                   # Vereinsdaten, Freibad, Historie, offene Punkte
public/                 # favicon, robots.txt (statische Assets)
```

## Dokumentation

| Datei | Inhalt |
| --- | --- |
| [`docs/vereinsdaten.md`](docs/vereinsdaten.md) | Stammdaten, ZVR, Vorstand, Statuten (Fassung 2017) |
| [`docs/freibad.md`](docs/freibad.md) | Freibad-Kooperation mit der Marktgemeinde |
| [`docs/historie.md`](docs/historie.md) | Veranstaltungen 2013–2017, Inhalte der alten Website |
| [`docs/offene-punkte.md`](docs/offene-punkte.md) | Was vor dem Go-live noch fehlt |

## Hinweise

**Vor dem Live-Gang** die Punkte in [`docs/offene-punkte.md`](docs/offene-punkte.md)
abarbeiten – am dringendsten die Mitgliedsbeiträge, da bereits Anfragen für
Mitgliedschaften eingehen.

**Freibad-Angebot:** Die Vereinbarung mit der Marktgemeinde ist in Kraft,
`freibad.aktiv` in `app/data/site.ts` steht auf `true`. Über dieses Flag lässt
sich das Angebot bei Bedarf (z. B. außerhalb der Badesaison) wieder ausblenden.

**Logo:** `app/components/LogoMark.vue` kennt die Varianten `tile` (Standard),
`invers` (dunkle Flächen) und `plain` (freistehend) sowie `compact` für
Darstellungsgrößen von 28–60 px. Unter 28 px `public/favicon.svg` verwenden.

**Alte Website:** Von `blaugelb.offenhausen.at` antwortet nur noch die
Startseite, alle Unterseiten liefern 404. Die dort noch erreichbaren Inhalte
(Logo, Renn-Fotos, Ausschreibungs-PDFs) sind in `docs/historie.md` erfasst und
sollten gesichert werden, bevor der alte Server abgedreht wird.
