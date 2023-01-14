import { createGtm } from '@gtm-support/vue-gtm';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    createGtm({
      id: process.env.GOOGLE_ANALYTICS_ID, // Your GTM single container ID, array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy'] or array of objects [{id: 'GTM-xxxxxx', queryParams: { gtm_auth: 'abc123', gtm_preview: 'env-4', gtm_cookies_win: 'x'}}, {id: 'GTM-yyyyyy', queryParams: {gtm_auth: 'abc234', gtm_preview: 'env-5', gtm_cookies_win: 'x'}}], // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy']
      defer: true, // Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible). Defaults to false, so the script is loaded `async` by default
      compatibility: true, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
      enabled: process.env.NODE_ENV === 'production' ? true : false, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
      debug: process.env.NODE_ENV === 'production' ? false : true, // Whether or not display console logs debugs (optional)
      vueRouter: router, // Pass the router instance to automatically sync with router (optional)
    }),
  );
})
