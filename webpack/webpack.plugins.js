const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { isReport } = require("./webpack.helper");

// const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
// const WorkboxPlugin = require("workbox-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const configs = (env) =>
  [
    new ForkTsCheckerWebpackPlugin(), // speed up ts type check
    // inDev() && new ReactRefreshWebpackPlugin(),
    isReport(env) && new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      // favicon: "assets/images/logo.png",
      inject: true,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
      chunkFilename: "[name].[chunkhash].chunk.css",
    }),
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
