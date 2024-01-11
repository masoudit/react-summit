module.exports = {
  mode: "development",
  entry: ["./src/main.tsx"],
  module: {
    rules: require("./webpack.rules"),
  },
  output: {
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
  },
  plugins: require("./webpack.plugins"),
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
    alias: require("./webpack.aliases"),
  },
  stats: "errors-warnings",
  // watch: true,
  devtool: "cheap-module-source-map",
  infrastructureLogging: {
    level: "none",
  },
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
    proxy: {
      "/api": {
        changeOrigin: true,
        target: {
          host: "localhost",
          protocol: "http:",
          port: 1337,
        },
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  performance: {
    hints: false,
  },
};
