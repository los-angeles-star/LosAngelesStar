// https://nuxt.com/docs/api/configuration/nuxt-config
import { API_Endpoint, Config } from "./assets/config"

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: {
        dir: 'ltr'
      }
    }
  },

  routeRules: {
    '/api/weather/current': { proxy: 'https://api.weather.gov/stations/ksmo/observations/latest' },
    '/api/weather/forecast': { proxy: 'https://api.weather.gov/gridpoints/LOX/149,48' }
  },

  modules: ['@nuxtjs/i18n', '@nuxt/fonts', 'dayjs-nuxt', 'nuxt-purgecss', '@pinia/nuxt'],
  i18n: {
    defaultLocale: 'en',
    lazy: true,
    locales: [
        { name: 'Español', code: 'es', language: 'es-US', file: 'es.json', dir: 'ltr' },
        { name: 'English', code: 'en', language: 'en-US', file: 'en.json', dir: 'ltr' }
    ],
    pages: {
        about: {
            en: '/about',
            es: '/sobre'
        }
    },
    baseUrl: Config.url || '',
    vueI18n: './i18n/i18n.config.ts'
  },

  css: [
    '~/assets/css/_variables.scss' // use underscore "_" & also file extension ".scss"
	],

  dayjs: {
    plugins: ['localizedFormat', 'timezone'],
    defaultTimezone: 'America/Los_Angeles'
  },

  runtimeConfig: {
    public: {
      wpUri: process.env.WP_URI,
    }
  }
})