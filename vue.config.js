const path = require('path')

function resolve (dir) {
  return path.join(__dirname, './', dir)
}
const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/'
  : '/'
module.exports = {
  publicPath: BASE_URL,
  // 这里是对环境的配置，不同环境对应不同的BASE_API，以便axios的请求地址不同
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
    config.plugin('define').tap(args => {
      args[0]['process.env'].BASE_URL = JSON.stringify(process.env.BASE_URL)
      console.log(args)
      return args
    })
  },
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        // target: 'http://192.168.10.80:8080', // 练练
        target: 'http://tseller.doveic.com/', // 测试
        // target: 'http://192.168.10.206:8090', // 威哥
        // target: 'http://192.168.10.33:8088', // 德华
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
