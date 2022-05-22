const path = require("path");
const plugins = [];

const PrerenderSPAPlugin = require("prerender-spa-plugin");

module.exports = {
  productionSourceMap: false,
  publicPath: ".",
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, "dist"),
        routes: ["/"],
      }),
    ],
  },
  pwa: {
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "public/service-worker.js",
    },
    name: "Dan & Han Wedding",
    themeColor: "#0640b6",
  }npm r
};
