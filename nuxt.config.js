import { defineNuxtConfig } from '@nuxt/bridge'
import { API_Endpoint, Config } from "./assets/config"
import axios from "axios"

let dynamicRoutes = () => {
	let posts = axios
		.get(Config.wpDomain + "/wp/v2/posts?page=1&per_page=20")
		.then(res => {
			return res.data.map(post => `/${post.slug}`)
		})
	let users = axios
		.get(Config.wpDomain + '/wp/v2/users/', {params: {size: 10}})
		.then((res) => {
			return res.data.content.map((user) => {
				return '/author/' + user.id
			})
		})
	console.log(routes)
	return Promise.all([posts, users]).then(values => {
		return values.join().split(',');
	})
}

export default defineNuxtConfig({
	// Global page headers: https://go.nuxtjs.dev/config-head
	app: {
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
			titleTemplate: (titleChunk) => {
				// If undefined or blank then we don't need the hyphen
				return titleChunk ? `${titleChunk}` : "Los Angeles Star";
			}
		}
	},
	// target: 'static',
	generate: {
		fallback: true
	},
	loading: {
		color: 'cyan',
		height: '5px'
	},
	loadingIndicator: {
		name: 'circle',
		color: Config.appThemeColor,
		background: Config.appBgColor
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['~/node_modules/sanitize.css'],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@pinia/nuxt',
		'@nuxtjs/google-fonts',
		'nuxt-proxy',
		'@nuxtjs/i18n',
		'vite-plugin-stylelint',
		'@nuxtjs/gtm',
		// PurgeCSS: https://purgecss.com/guides/nuxt.html
		'nuxt-purgecss',
	],

	// Server-Side Rendering: https://go.nuxtjs.dev/config-ssr
	ssr: true,

	// PWA module configuration: https://pwa.nuxtjs.org/
	// pwa: {
	// 	manifest: {
	// 		name: Config.appTitle,
	// 		short_name: Config.appTitleShort,
	// 		background_color: Config.appBgColor
	// 	},
	// 	meta: {
	// 		theme_color: Config.appThemeColor
	// 	}
	// },

	router: {
	  base: './',
	  mode: 'hash'
	},

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

	// Proxy module
	proxy: {
		options: {
			target: 'https://query1.finance.yahoo.com/',
			pathRewrite: {'^/api/': ''},
			changeOrigin: true
		},
		pathFilter: [
	  	'/api/'
		]
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

	vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/css/config.sass"',
        },
      },
    },
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
