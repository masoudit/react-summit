module.exports = (env) => {
  return {
    mode: "production",
    entry: ["./src/main.tsx"],
    module: {
      rules: require("./webpack.rules")(env),
    },
    output: {
      filename: "[name].[chunkhash].js",
      chunkFilename: "[name].[chunkhash].chunk.js",
      clean: true,
      publicPath: "/",
    },
    plugins: [...require("./webpack.plugins")(env)],
    resolve: {
      extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
      alias: {
        // Custom Aliases
        ...require("./webpack.aliases"),
      },
    },
    stats: "errors-warnings",
    optimization: {
      minimize: true,
      sideEffects: true,
      concatenateModules: true,
      runtimeChunk: "single",
      splitChunks: {
        chunks: "all",
        maxInitialRequests: 10,
        minSize: 0,
        cacheGroups: {
          vendor: {
            name: "vendors",
            test: /[\\/]node_modules[\\/]/,
            chunks: "all",
          },
        },
      },
    },
  };
};
