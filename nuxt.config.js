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
	// Global page headers: https://go.nuxtjs.dev/config-head
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
		titleTemplate: titleChunk => {
			// If undefined or blank then we don't need the hyphen
			return titleChunk ? `${titleChunk} - Los Angeles Star` : "Los Angeles Star";
		}
	},
	// target: 'static',
	generate: {
		fallback: true
	},
	render: {
    bundleRenderer: {
			shouldPreload: (file, type) => {
			  if (type === 'image') return /.svg/.test(file)
			  return ['script', 'style', 'image'].includes(type)
			}
		}
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['~/node_modules/sanitize.css'],

	// Auto-import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules: https://go.nuxtjs.dev/config-modules
	buildModules: [
		'@nuxtjs/pwa',
		'@nuxtjs/google-fonts',
		'@nuxtjs/axios',
		'@nuxtjs/proxy',
		'@nuxtjs/style-resources',
		'@nuxtjs/i18n',
		'@nuxtjs/stylelint-module',
		'@nuxtjs/gtm',
		// PurgeCSS: https://purgecss.com/guides/nuxt.html
		'nuxt-purgecss',
	],

	// Server-Side Rendering: https://go.nuxtjs.dev/config-ssr
	ssr: true,

	// PWA module configuration: https://pwa.nuxtjs.org/
	pwa: {
		manifest: {
			name: Config.appTitle,
			short_name: Config.appTitleShort,
			background_color: Config.appBgColor
		},
		meta: {
			theme_color: Config.appThemeColor
		}
	},
	// 	}
	// },

	// Google Fonts module configuration: https://google-fonts.nuxtjs.org/
	googleFonts: {
		display: 'swap',
		useStylesheet: true,
		inject: true,
		download: true,
		subsets: ['latin', 'latin-ext'],
		families: {
			'Old+Standard+TT': true,
		}
	},

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		baseURL: Config.url || '',
		proxy: true
	},

	// Proxy module
	proxy: {
	  '/api/': {
			target: 'https://query1.finance.yahoo.com/',
			pathRewrite: {'^/api/': ''},
			changeOrigin: true
		}
	},

	// Plug-ins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		"~/plugins/posts.server.js",
		// "~/plugins/dateFormat.js"
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
	},

	// Google Analytics: https://go.nuxtjs.dev/google-analytics
	gtm: {
    id: process.env.GOOGLE_ANALYTICS_ID, // Use as fallback if no runtime config is provided
		enabled: process.env.NODE_ENV === 'production' ? true : false,
		pageTracking: true,
		autoTracking: {
      screenview: true
    }
  },
  publicRuntimeConfig: {
		baseURL: process.env.BASE_URL || 'https://localhost:3000',
    gtm: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  }
})
