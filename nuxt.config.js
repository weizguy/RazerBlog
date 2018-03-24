const pkg = require('./package');
const bodyParser = require ('body-parser');
const axios = require('axios');

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "Razer Blog",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Latest Razer Tech news" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#00FF00' },

  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: process.env.BASE_URL || 'https://razerblog-a997a.firebaseio.com',
    credentials: false
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {}
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://razerblog-a997a.firebaseio.com',
    fbAPIKey: 'AIzaSyAIldt2CUni9U3xTqNDKWlsQ_n-zeSTHVU'
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  // router: {
  //   middleware: 'log'
  // }
  serverMiddleware: [
    bodyParser.json(),
    '~/api'
  ],
  generate: {
    routes: function() {
      return axios
        .get('https://razerblog-a997a.firebaseio.com/posts.json')
        .then(res => {
          const routes = [];
          for (const key in res.data) {
            routes.push({ 
              route: '/posts/' + key, 
              payload: {postData: res.data[key]}
            });
          }
          return routes;
        })
    }
  }
}
