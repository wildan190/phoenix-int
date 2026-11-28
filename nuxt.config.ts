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
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
    },
  },

  routeRules: Object.fromEntries(
    [
      '/favicon.png',
      '/apple-touch-icon.png',
      '/logo.png',
      '/logo.webp',
      '/logo-64.webp',
      '/logo-256.webp',
      '/logo-384.webp',
      '/og-image.png',
      '/portfolio/bacco-kanvas-icon.webp',
      '/portfolio/udayana-logo.webp',
      '/fonts/dm-sans-latin.woff2',
      '/fonts/unbounded-latin.woff2',
      '/fonts/jetbrains-mono-latin.woff2',
    ].map((path) => [
      path,
      { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    ]),
  ),

  typescript: {
    strict: true,
    typeCheck: false,
  },
})
