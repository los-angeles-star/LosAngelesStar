import { API_Endpoint, Config } from "./assets/config"

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
			script: [
      	{
	        hid: 'gtm',
	        children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	      })(window,document,'script','dataLayer','${process.env.GOOGLE_ANALYTICS_ID}');`,
	        type: 'text/javascript'
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
	
	},

	// Plug-ins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		"~/plugins/posts.server.js",
		"~/plugins/vue-gtm.client.js",
		// "~/plugins/dateFormat.js"
	],
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

  publicRuntimeConfig: {
		baseURL: process.env.BASE_URL || 'https://localhost:3000',
    gtm: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  }
})
