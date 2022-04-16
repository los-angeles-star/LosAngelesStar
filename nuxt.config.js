import { defineNuxtConfig } from '@nuxt/bridge'
import Config from "./assets/config"
import axios from "axios"

let dynamicRoutes = () => {
  const routes = axios
    .get(Config.wpDomain + "/wp/v2/posts?page=1&per_page=20")
    .then(res => {
      return res.data.map(post => `/blog/${post.slug}`)
    })
  console.log(routes)
  return routes
}

export default defineNuxtConfig({
  /*
   ** Headers
   ** Common headers are already provided by @nuxtjs/pwa preset
   */
  head: {
    titleTemplate: titleChunk => {
      // If undefined or blank then we don't need the hyphen
      return titleChunk ? `${titleChunk} - Los Angeles Star` : "Los Angeles Star";
    },
  },
  css: ['~/node_modules/sanitize.css'],
  buildModules: [
    '@nuxtjs/pwa',
    '@nuxtjs/google-fonts',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],
  pwa: {},
  googleFonts: {
    display: 'swap',
    useStylesheet: true,
    inject: true,
    download: true,
    families: {
      'Old+Standard+TT': true,
    }
  },
  axios: {
    baseURL: 'http://localhost:3000',
  },
  styleResources: {
    scss: [
      './assets/vars/*.scss',
      './assets/abstracts/_mixins.scss' // use underscore "_" & also file extension ".scss"
    ],
    hoistUseStatements: true  // Hoists the "@use" imports. Applies only to "sass", "scss" and "less". Default: false.
  }
})
