import { defineNuxtConfig } from '@nuxt/bridge'
import { API_Endpoint, Config } from "./assets/config"
import axios from "axios"

let dynamicRoutes = () => {
  const routes = axios
    .get(Config.wpDomain + "/wp/v2/posts?page=1&per_page=20")
    .then(res => {
      return res.data.map(post => `/${post.slug}`)
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
		htmlAttrs: {
			dir: 'ltr'
		},
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: Config.appDescription || ''
			}
		],
		link: [
			{
				hid: 'apple-touch-icon',
				rel: 'apple-touch-icon',
				sizes: '180x180',
				href: '/apple-touch-icon.png'
			}
		],
		titleTemplate: titleChunk => {
			// If undefined or blank then we don't need the hyphen
			return titleChunk ? `${titleChunk} - Los Angeles Star` : "Los Angeles Star";
		}
	},
	// target: 'static',
	generate: {
		fallback: true
	},
	css: ['~/node_modules/sanitize.css'],
	components: true,
	buildModules: [
		'@nuxtjs/pwa',
		'@nuxtjs/google-fonts',
		'@nuxtjs/axios',
		'@nuxtjs/style-resources',
		'@nuxtjs/i18n',
		'@nuxtjs/stylelint-module'
	],
	// ssr: false,
	pwa: {
		meta: {
			theme_color: Config.appThemeColor
		}
	},
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
	plugins: [
		"~/plugins/posts.server.js",
		"~/plugins/dateFormat.js"
	],
	generate: {
		routes: dynamicRoutes
	},
	styleResources: {
		scss: [
			'./assets/vars/*.scss',
			'./assets/abstracts/_mixins.scss' // use underscore "_" & also file extension ".scss"
		],
		hoistUseStatements: true  // Hoists the "@use" imports. Applies only to "sass", "scss" and "less". Default: false.
	},
	i18n: {
		defaultLocale: 'en',
		locales: [
			{ name: 'Español', code: 'es', iso: 'es-US', file: 'es.js', dir: 'ltr' },
			{ name: 'English', code: 'en', iso: 'en-US', file: 'en.js', dir: 'ltr' }
		],
		langDir: 'lang/',
		pages: {
			about: {
				en: '/about',
				es: '/sobre'
			}
		},
		baseUrl: Config.url || '',
		vueI18n: {
			fallbackLocale: 'en',
			dateTimeFormats: {
				en: {
					short: {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					},
					long: {
						year: 'numeric',
						month: 'long',
						day: 'numeric',
						weekday: 'long'
					}
				},
				es: {
					short: {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					},
					long: {
						year: 'numeric',
						month: 'long',
						day: 'numeric',
						weekday: 'long'
					}
				}
			}
		}
	}
})
