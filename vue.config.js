module.exports = {
  devServer: {
    //historyApiFallback: true,
    //noInfo: true,
    proxy: {
      '^/api': { 
        target: 'https://api-v3.wattwatchers.com.au',
        ws: true,
        changeOrigin: true,
        secure: true,
        cookieDomainRewrite: '',
        pathRewrite: {
          '^/api': ''
        },
        onProxyReq: function (request, req, res) {
          request.setHeader('origin', 'https://api-v3.wattwatchers.com.au')
        }
      }
    }
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },

  publicPath: process.env.BASE_URL,
  outputDir: 'cordovaApp/www',
  assetsDir: 'assets',
  productionSourceMap: true
}
