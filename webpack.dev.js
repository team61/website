const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/views/index.pug",
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./src/views/about.pug",
    }),
    new HtmlWebpackPlugin({
      filename: "updates.html",
      template: "./src/views/updates.pug",
    }),
    new HtmlWebpackPlugin({
      filename: "pictures.html",
      template: "./src/views/pictures.pug",
    }),
    new HtmlWebpackPlugin({
      filename: "fundraising.html",
      template: "./src/views/fundraising.pug",
    }),
    new HtmlWebpackPlugin({
      filename: "resources.html",
      template: "./src/views/resources.pug",
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
            options: { injectType: "singletonStyleTag" },
          },
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
});
