const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
// const WorkboxPlugin = require("workbox-webpack-plugin");

const configs = () =>
  [
    new ForkTsCheckerWebpackPlugin(), // speed up ts type check
    // inDev() && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      // favicon: "assets/images/logo.png",
      inject: true,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
      chunkFilename: "[name].[chunkhash].chunk.css",
    }),
    //   !inDevMode() &&
    //     new WorkboxPlugin.GenerateSW({
    //       // these options encourage the ServiceWorkers to get in there fast
    //       // and not allow any straggling "old" SWs to hang around
    //       clientsClaim: true,
    //       skipWaiting: true,
    //       swDest: 'sw.js',
    //       // maximumFileSizeToCacheInBytes: 1000000,
    //       maximumFileSizeToCacheInBytes: 17 * 1024 * 1024,
    //     }),
  ].filter(Boolean);

module.exports = configs;
