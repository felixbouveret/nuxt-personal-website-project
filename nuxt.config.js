export default {
  mode: 'universal',

  srcDir: 'src/',

  // Create external ip server
  server: {
    host: '0',
  },

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'fr',
    },
    title: 'Félix Bouveret',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:url', name: 'og:url', content: 'https://felixbouveret.com/' },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'assets/images/og_image.png',
      },
      {
        name: 'robots',
        content: process.env.IS_DEV === 'true' ? 'noindex' : 'index',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/images/favicon.png' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~assets/scss/fonts.scss',
    '~assets/scss/layout.scss',
    '~assets/scss/transitions.scss',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-132457478-2',
      },
    ],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      'nuxt-i18n',
      {
        locales: [
          // { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' },
          { code: 'fr', name: 'Français', iso: 'fr-FR', file: 'fr.json' },
        ],
        defaultLocale: 'fr',
        lazy: true,
        langDir: 'locales/',
        strategy: 'prefix_and_default', // 'prefix_and_default', // add locale prefix for every locale
      },
    ],
    '@nuxtjs/prismic',
  ],

  prismic: {
    endpoint: 'https://felixbouveret.cdn.prismic.io/api/v2',
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.vue$/,
        loader: 'vue-svg-inline-loader',
      })
    },
  },
}
