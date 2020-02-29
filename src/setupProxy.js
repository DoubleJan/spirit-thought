// 配置代理

const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    proxy({
      target: 'http://localhost:9000',
      changeOrigin: true,
    })
  );
  app.use(
    '/files',
    proxy({
      target: 'http://spirithought.net',
      changeOrigin: true,
    })
  );
};