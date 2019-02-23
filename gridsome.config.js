module.exports = {
  siteName: 'Los Angeles Star',
  siteDescription: 'Los Angeles’ first newspaper since 1852.',
  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'http://www.zircon.com/', // required
        typeName: 'WordPress', // GraphQL schema name (Optional)
        perPage: 100, // How many posts to load from server per request (Optional)
        concurrent: 10, // How many requests to run simultaneously (Optional)
        routes: {
          post: '/:year/:month/:day/:slug', //adds route for "post" post type (Optional)
          post_tag: '/tag/:slug' // adds route for "post_tag" post type (Optional)
        }
      }
    }
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader']
      }
    ]
  },
  css: {
    loaderOptions: {
      scss: {
        // options here will be passed to sass-loader
      },
      postcss: {
        // options here will be passed to postcss-loader
      }
    }
  }
}
