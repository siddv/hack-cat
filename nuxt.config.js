module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'hack-cat',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    ['nuxt-i18n', {
      locales: [
        {
          code: 'en',
          iso: 'en',
          name: 'English'
        },
        {
          code: 'ca',
          iso: 'ca',
          name: 'Català'
        }
      ],
      defaultLocale: 'en',
      vueI18n: {
        messages: {
          en: {
            name: 'Hack.cat',
            intro: 'Welcome to Hack.cat. Content to come later.'
          },
          ca: {
            name: 'Hack.cat',
            intro: 'Benvingut a Hack.cat. Contingut per venir després.'
          }
        }
      }
    }]
  ]
}
