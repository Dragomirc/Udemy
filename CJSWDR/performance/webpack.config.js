const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,

        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      { test: /\.(png|svg|jpg|gif)$/, use: ["file-loader"] }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HTMLWebpackPlugin({
      template: "src/index.html"
    })
  ]
};
