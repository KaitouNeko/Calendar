const path = require("path");
const { merge } = require("webpack-merge");
const CommonConfig = require("./webpack.dev.js");

const config = merge(CommonConfig, {
  mode: "production",
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    filename: '[name].prod.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  performance: {
    maxAssetSize: 120000, // 限制 asset file 大小
  },
  optimization: {
    minimize: true,
    minimizer: [
      (compiler) => {
        const TerserPlugin = require('terser-webpack-plugin');
        new TerserPlugin({
          terserOptions: {
            ecma: undefined,
            parse: {},
            compress: {},
            mangle: true, // Note `mangle.properties` is `false` by default.
            module: false,
            // Deprecated
            output: null,
            format: null,
            toplevel: false,
            nameCache: null,
            ie8: false,
            keep_classnames: undefined,
            keep_fnames: false,
            safari10: false,
          }
        }).apply(compiler);
      },
    ],
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      maxSize: 70000,
      cacheGroups: {
        reactVendor: {
          test: /[\\/]node_modules[\\/](react)[\\/]/,
          name: "reactVendor",
          chunks: 'all',
          enforce: true,
          reuseExistingChunk: true,
        },
        reactDomVendor: {
          test: /[\\/]node_modules[\\/](react-dom)[\\/]/,
          name: "reactDomVendor",
          chunks: 'all',
          enforce: true,
          reuseExistingChunk: true,
        },
        // 把所有 node_modules 內的程式碼打包成一支 vendors.bundle.js
        vendor: {
          test: /[\\/]node_modules[\\/](!react-dom|!react)[\\/]/,
          name: "vendor",
          chunks: 'all',
          enforce: true,
          reuseExistingChunk: true,
        },
        // 將 app 出現 1 次以上的 code split 出來
        common: {
          name: 'common',
          chunks: 'initial',
          minChunks: 2,
        },
      }
    },
  }
});

module.exports = config;


