const nodeExternals = require("webpack-node-externals");
const path = require("path");
const NodemonPlugin = require("nodemon-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "server.js"),

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js",
    libraryTarget: "commonjs2"
  },

  target: "node",

  externals: [nodeExternals()],

  plugins: [
    new NodemonPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: "html-loader"
        }
      }
    ]
  }
};
