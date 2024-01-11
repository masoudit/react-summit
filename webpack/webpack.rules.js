const { inDev } = require("./webpack.helper");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = [
  {
    // Typescript loader
    test: /\.tsx?$/,
    exclude: /(node_modules|\.webpack)/,
    use: {
      loader: "ts-loader",
      options: {
        transpileOnly: true,
      },
    },
  },
  {
    // CSS Loader
    test: /\.css$/,
    use: [
      { loader: inDev() ? "style-loader" : MiniCssExtractPlugin.loader },
      { loader: "css-loader" },
      { loader: "postcss-loader" },
    ],
  },
  {
    // Less loader
    test: /\.less$/,
    use: [
      { loader: inDev() ? "style-loader" : MiniCssExtractPlugin.loader },
      { loader: "css-loader" },
      { loader: "less-loader" },
      { loader: "postcss-loader" },
    ],
  },
  {
    // Assets loader
    // More information here https://webpack.js.org/guides/asset-modules/
    test: /\.(gif|jpe?g|tiff|png|webp|bmp|svg|eot|ttf|woff|woff2)$/i,
    type: "asset",
    generator: {
      filename: "assets/[hash][ext][query]",
    },
  },
];
