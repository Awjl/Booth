// // vue.config.js
module.exports = {
  // 修改的配置
  // 将baseUrl: '/api',改为baseUrl: '/',
  transpileDependencies: [],
  baseUrl: '/',
  devServer: {
    proxy: {
      '/api': {
        // target: 'http://47.101.165.134/booth',
        target: 'http://10.1.23.209',

        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
// // .env.development   47.101.165.134 10.1.23.209
// // VUE_APP_BASE_API = "/api"