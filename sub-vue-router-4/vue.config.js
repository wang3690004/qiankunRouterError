const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  configureWebpack: {
    plugins: [],
    output: {
      // 微应用的包名，这里与主应用中注册的微应用名称一致
      library: "AUTHApp",
      // 将你的 library 暴露为所有的模块定义下都可运行的方式
      libraryTarget: "umd",
      // 按需加载相关，设置为 webpackJsonp_VueMicroApp 即可
      jsonpFunction: `webpackJsonp_AUTHApp`,
    },
  },
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("src"));
  },
  devServer: {
    port: 8095,
    open: true,
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
