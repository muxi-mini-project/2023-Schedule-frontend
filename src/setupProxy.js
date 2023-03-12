const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = function(app){
  app.use(
    createProxyMiddleware('/api/v1/', {
      target: '116.204.121.9:1729/',
      changeOrigin: true
    })
  );
};