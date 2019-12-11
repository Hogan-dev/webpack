const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.[hash].js"
  },
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
        test: /\.css|scss$/,
        use: ["style-loader", "css-loader","sass-loader"]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html", 
      filename: "./index.html" 
    }),
    new CleanWebpackPlugin()
	]
};