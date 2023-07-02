export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - ' + 'Association of Clinical Endocrinologist of Nigeria (ACEN)',
    title: 'Association of Clinical Endocrinologist of Nigeria (ACEN)' || '',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {

        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'marquis-abah',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@marquis-abah',
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@marquis-abah',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Association of Clinical Endocrinologist of Nigeria (ACEN)',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Association of Clinical Endocrinologist of Nigeria (ACEN)',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          '/test.png',
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Association of Clinical Endocrinologist of Nigeria (ACEN)',
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://acen.netlify.app',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Association of Clinical Endocrinologist of Nigeria (ACEN)',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Association of Clinical Endocrinologist of Nigeria (ACEN)',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-analytics'
  ],
  axios: {
    // proxy: true
  },
  googleAnalytics: {
    id: "{YOUR GOOGLE ANALYTICS ID}",
    dev: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  pwa: {
    meta: {
      title: 'Association of Clinical Endocrinologist of Nigeria (ACEN)',
      author: 'Marquis',
    },
    manifest: {
      name: 'Association of Clinical Endocrinologist of Nigeria (ACEN)',
      short_name: 'Association of Clinical Endocrinologist of Nigeria (ACEN)',
      lang: 'en',
    },
  }
}
