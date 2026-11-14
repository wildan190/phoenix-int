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
      title: 'Phoenix Technologies',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        {
          name: 'description',
          content:
            'Sistem digital yang bangkit dan tumbuh bersama bisnis Anda. Custom software, IoT, POS, reservasi, tiket, keuangan, sampai otomasi.',
        },
        { name: 'theme-color', content: '#FFF8F1', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#130E0B', media: '(prefers-color-scheme: dark)' },
        { name: 'claude:viewport-fit-sides', content: 'cover' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
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
