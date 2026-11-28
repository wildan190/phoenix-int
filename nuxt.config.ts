export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  css: ['~/assets/css/main.css'],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'id',
      },
      title: 'Phoenix Technologies | POS, Enterprise & Custom Software',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        {
          name: 'description',
          content:
            'Solusi POS, software enterprise, ticketing digital, maintenance aplikasi & server, serta custom software dari Rangkasbitung, Banten untuk bisnis di seluruh Indonesia.',
        },
        {
          name: 'keywords',
          content:
            'Phoenix Technologies, solusi POS Indonesia, aplikasi kasir, solusi enterprise, custom software Indonesia, aplikasi ticketing, maintenance aplikasi, maintenance server, software house Indonesia, software house Rangkasbitung, solusi IT Banten',
        },
        { name: 'author', content: 'Phoenix Technologies' },
        {
          name: 'robots',
          content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
        },
        // Geolocation Meta Tags
        { name: 'geo.region', content: 'ID-BT' },
        { name: 'geo.placename', content: 'Rangkasbitung, Lebak, Banten' },
        { name: 'geo.position', content: '-6.35;106.25' },
        { name: 'ICBM', content: '-6.35, 106.25' },
        // Open Graph / Facebook Meta Tags
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Phoenix Technologies' },
        { property: 'og:image', content: '/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        // Twitter Card Meta Tags
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: '/og-image.png' },
        // Mobile & Theme
        { name: 'theme-color', content: '#FFF8F1', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#130E0B', media: '(prefers-color-scheme: dark)' },
        { name: 'claude:viewport-fit-sides', content: 'cover' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
        { rel: 'apple-touch-icon', href: '/logo.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap',
        },
      ],
    },
  },

  typescript: {
    strict: true,
    typeCheck: false,
  },
})
