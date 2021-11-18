[![Netlify Status](https://api.netlify.com/api/v1/badges/c6a2bba0-630f-4971-b642-2dc12167ef41/deploy-status)](https://app.netlify.com/sites/losangelesstar/deploys)
# Los Angeles Star
JavaScript Client for connecting to and parsing JSON coming from a WordPress REST API plugin

## Install
`gridsome create my-gridsome-project wordpress`

## Guide

Add your WordPress URL to the plugin options.

```js
// gridsome.config.js

module.exports = {
  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'YOUR_WEBSITE_URL', // required
        typeName: 'WordPress', // GraphQL schema name (Optional)
        perPage: 100, // How many posts to load from server per request (Optional)
        concurrent: 10, // How many requests to run simultaneously (Optional)
        routes: {
          post: '/:year/:month/:day/:slug', //adds route for "post" post type (Optional)
          post_tag: '/tag/:slug' // adds route for "post_tag" post type (Optional)
        }
      }
    }
  ]
}

```

## Included templates

This starter includes basic templates for categories, tags and posts.
