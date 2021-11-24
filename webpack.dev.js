const path = require("path");
// plugin
const ip = require("ip");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
module.exports = {
  // Where files should be sent once they are bundled
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].bundle.js"
  },
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    port: 9001,
    hot: true,
    compress: true,
    historyApiFallback: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    host: ip.address()
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /\.module\.$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader"
          },
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              publicPath: "./images",
              outputPath: "css/images/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ESLintPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[chunkhash:8].css"
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"),
      filename: "index.html",
      inject: true,
      minify: {
        // 移除空格
        collapseWhitespace: true,
        // 移除註釋
        removeComments: false
      }
    }),
    new CleanWebpackPlugin()
  ],
  // https://webpack.js.org/configuration/performance/#performancemaxassetsize
  performance: {
    maxEntrypointSize: 400000, // max size 400kb
    maxAssetSize: 100000 // max size 100kb
  },
  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 1000,
      maxSize: 10000,
      minRemainingSize: 0, // (Webpack 5 才有此選項)
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: "~",
      cacheGroups: {
        // 把所有 node_modules 內的程式碼打包成一支 vendors.bundle.js
        vendor: {
          test: /[\\/]node_modules[\\/](!lodash)(!moment)(!moment-timezone)[\\/]/,
          name: "vendor",
          chunks: "all",
          enforce: true,
          reuseExistingChunk: true,
          maxSize: 5000
        },
        // 將 app 出現 1 次以上的 code split 出來
        common: {
          chunks: "initial",
          minSize: 0,
          name: "common",
          minChunks: 2,
          priority: 10
        },
        default: {
          minChunks: 1,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: "single",
  },
  resolve: {
    extensions: [".js", "jsx"],
    modules: ["node_modules"],
    alias: {
      "@@components": path.resolve(__dirname, "./src/components"),
      "@@containers": path.resolve(__dirname, "./src/containers"),
      "@@images": path.resolve(__dirname, "./src/images"),
      "@@utils": path.resolve(__dirname, "./src/utils"),
      "@@hook": path.resolve(__dirname, "./src/hook"),
    }
  }
};
