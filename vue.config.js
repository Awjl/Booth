// // vue.config.js
module.exports = {
  // 修改的配置
  // 将baseUrl: '/api',改为baseUrl: '/',
  transpileDependencies: [],
  baseUrl: '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://47.101.165.134/booth',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
// // .env.development   47.101.165.134
// // VUE_APP_BASE_API = "/api"