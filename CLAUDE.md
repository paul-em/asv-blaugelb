# CLAUDE.md

Static club website of the **Ausdauersportverein blaugelb Offenhausen** — Nuxt 4
(SSG) + Tailwind v4. No backend, no database, no login.

## Git workflow

- **Always work and push directly on `main`. No feature branches, no pull
  requests** — this is a small site and the extra ceremony is not worth it.
- Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
  static site and deploys it to GitHub Pages. So a push is a deploy.
- Commit messages and site content are in German.

## Commands

```bash
npm run dev       # dev server on http://localhost:3000
npm run generate  # static build into .output/public/
```

## Where things live

- `app/data/site.ts` — single source of truth for texts, dates, training times,
  board members and contact data. Change content here first, not in the pages.
- `app/pages/` — one file per route; `app/components/` — shared UI.
- `app/assets/css/main.css` — Tailwind setup and the blue/yellow club colors.
- `docs/` — where the club data comes from and what is still open
  (`docs/offene-punkte.md`).
