const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const PATHS = {
  build: path.resolve(__dirname, "./dist"),
  images: path.resolve(__dirname, "./src/assets/img")
};

module.exports = () => {
  return {
    devtool: "eval-source-map",
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
      path: PATHS.build
    },
    resolve: {
      extensions: [".web.js", ".mjs", ".js", ".json", ".web", ".jsx"],
      alias: {
        actions: path.resolve(__dirname, "src/actions"),
        config: path.resolve(__dirname, "src/config"),
        atoms: path.resolve(__dirname, "src/components/atoms"),
        molecules: path.resolve(__dirname, "src/components/molecules"),
        organisms: path.resolve(__dirname, "src/components/organisms"),
        pages: path.resolve(__dirname, "src/components/pages"),
        templates: path.resolve(__dirname, "src/components/templates"),
        reducers: path.resolve(__dirname, "src/reducers")
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              cacheDirectory: true
            }
          }
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
          test: /\.(scss|css)$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "img/"
              }
            }
          ]
        },
        {
          test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "fonts/"
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        title: "Start Project",
        author: "Felipe Coelho",
        template: "./public/index.html"
      }),
      new CopyPlugin([
        { from: "./public/manifest.json", to: PATHS.build },
        { from: "./public/favicon.ico", to: PATHS.build }
      ])
    ]
  };
};
