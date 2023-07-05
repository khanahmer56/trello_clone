const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app: any) {
  app.use(
    "/v1",
    createProxyMiddleware({
      target: "https://cloud.appwrite.io",
      changeOrigin: true,
    })
  );
};
