const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [htmlWebpackPlugin, miniCssExtractPlugin],
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      actions: path.resolve(__dirname, "src/actions"),
      config: path.resolve(__dirname, "src/config"),
      atoms: path.resolve(__dirname, "src/components/atoms"),
      molecules: path.resolve(__dirname, "src/components/molecules"),
      organisms: path.resolve(__dirname, "src/components/organisms"),
      pages: path.resolve(__dirname, "src/components/pages"),
      reducers: path.resolve(__dirname, "src/reducers")
    }
  }
};
