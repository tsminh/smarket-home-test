const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://api.smarkets.com/v3/",
      changeOrigin: true,
    })
  );
};
