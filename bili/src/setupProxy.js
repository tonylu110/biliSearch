const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(createProxyMiddleware('/x', 
    {
        target: "http://bili.tnyl.xyz",
        changeOrigin: true,
        pathRewrite: {'^/api': ''}
    }))
}
