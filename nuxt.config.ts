import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },

  // Vollständig statische Seite: `npm run generate` erzeugt reines HTML/CSS/JS
  // in .output/public/ – ohne Server, ohne Datenbank, ohne Login.
  ssr: true,
  nitro: {
    preset: 'static',
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
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },
})
