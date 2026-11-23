import { SITE_META } from './constants/seo'

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
      title: SITE_META.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        {
          name: 'description',
          content: SITE_META.description,
        },
        {
          name: 'keywords',
          content: SITE_META.keywords,
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
        { property: 'og:url', content: SITE_META.siteUrl },
        {
          property: 'og:title',
          content: SITE_META.title,
        },
        {
          property: 'og:description',
          content: SITE_META.description,
        },
        { property: 'og:image', content: SITE_META.ogImage },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: `${SITE_META.siteName} | Solusi POS dan Software` },
        { property: 'og:locale', content: SITE_META.locale },
        // Twitter Card Meta Tags
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: SITE_META.siteUrl },
        {
          name: 'twitter:title',
          content: SITE_META.title,
        },
        {
          name: 'twitter:description',
          content: SITE_META.description,
        },
        { name: 'twitter:image', content: SITE_META.ogImage },
        // Mobile & Theme
        { name: 'theme-color', content: '#FFF8F1', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#130E0B', media: '(prefers-color-scheme: dark)' },
        { name: 'claude:viewport-fit-sides', content: 'cover' },
      ],
      link: [
        { rel: 'canonical', href: `${SITE_META.siteUrl}/` },
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
