
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    template: "./src/index.js",
    template2: "./src/index.js",
  },
  output: {
    filename: "mungai.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins:[
    new HtmlWebpackPlugin({
        template: "./src/template.html",
        filename: "template.html",
        chunks: ["template"]
    }),

    new HtmlWebpackPlugin({
      template:"./src/template-2.html",
      filename:"template-2.html",
      chunks:["template-2"]
    }),

    new MiniCssExtractPlugin({
      filename:"[name].css"
    })
  ],
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
    ],
  },
};
