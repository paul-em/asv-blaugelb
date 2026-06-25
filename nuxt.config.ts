import tailwindcss from '@tailwindcss/vite'

// Auf GitHub Pages liegt die Seite unter https://<user>.github.io/<repo>/,
// also unter einem Unterpfad. Der Workflow setzt dafür NUXT_APP_BASE_URL
// (z. B. "/asv-blaugelb/"). Lokal bleibt es bei "/".
const baseURL = process.env.NUXT_APP_BASE_URL || '/'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },

  // Vollständig statische Seite: `npm run generate` erzeugt reines HTML/CSS/JS
  // in .output/public/ – ohne Server, ohne Datenbank, ohne Login.
  ssr: true,
  nitro: {
    // github_pages-Preset: legt automatisch .nojekyll an und eine 404.html.
    preset: 'github_pages',
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    baseURL,
    head: {
      htmlAttrs: { lang: 'de' },
      title: 'ASV blaugelb Offenhausen',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'ASV blaugelb Offenhausen – Ausdauersportverein im Herzen des Hausruckviertels. Laufen, Radfahren und gemeinsam aktiv sein.',
        },
        { name: 'theme-color', content: '#0b4f9e' },
      ],
      // Favicon-Link wird in app.vue gesetzt, damit der baseURL-Unterpfad
      // (GitHub Pages) korrekt berücksichtigt wird.
    },
  },
})
