const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  target: "web",
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    static: "./dist",
    hot: true,
  },
});
