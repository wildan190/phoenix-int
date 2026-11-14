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
      title: 'Phoenix Technologies | Solusi Custom Software, IoT & Sistem Digital Terpadu',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        {
          name: 'description',
          content:
            'Phoenix Technologies menghadirkan solusi teknologi terpercaya: Custom Software, IoT, POS, Reservasi, Ticketing, Sistem Keuangan, dan Otomasi Bisnis di Rangkasbitung, Banten & seluruh Indonesia.',
        },
        {
          name: 'keywords',
          content:
            'Phoenix Technologies, Custom Software Indonesia, Solusi IoT, POS Kasir Multi-outlet, Sistem Reservasi Online, Aplikasi Ticketing QR, Sistem Informasi Keuangan, Otomasi Bisnis, Software House Banten, Software House Rangkasbitung, Konsultan IT Lebak',
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
        { property: 'og:url', content: 'https://phoenixtech.web.id/' },
        {
          property: 'og:title',
          content: 'Phoenix Technologies | Solusi Custom Software, IoT & Sistem Digital Terpadu',
        },
        {
          property: 'og:description',
          content:
            'Sistem digital yang bangkit dan tumbuh bersama bisnis Anda. Layanan Custom Software, IoT, POS, Reservasi, Ticketing, Keuangan, dan Otomasi.',
        },
        { property: 'og:image', content: 'https://phoenixtech.web.id/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Phoenix Technologies Logo & Banner' },
        { property: 'og:locale', content: 'id_ID' },
        // Twitter Card Meta Tags
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://phoenixtech.web.id/' },
        {
          name: 'twitter:title',
          content: 'Phoenix Technologies | Solusi Custom Software, IoT & Sistem Digital Terpadu',
        },
        {
          name: 'twitter:description',
          content:
            'Sistem digital yang bangkit dan tumbuh bersama bisnis Anda. Solusi Custom Software, IoT, POS, Reservasi, Tiket, Keuangan, dan Otomasi.',
        },
        { name: 'twitter:image', content: 'https://phoenixtech.web.id/og-image.png' },
        // Mobile & Theme
        { name: 'theme-color', content: '#FFF8F1', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#130E0B', media: '(prefers-color-scheme: dark)' },
        { name: 'claude:viewport-fit-sides', content: 'cover' },
      ],
      link: [
        { rel: 'canonical', href: 'https://phoenixtech.web.id/' },
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
