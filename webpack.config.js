const { CommonsChunkPlugin } = require("webpack").optimize;
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractText = new ExtractTextPlugin("style.css");
const commonChunks = new CommonsChunkPlugin({ name: "vendor" });

module.exports = {
  entry: {
    app: "./src/index.js",
    vendor: ["react", "react-dom"],
    style: "./src/index.less"
  },

  output: {
    filename: "[name].js",
    path: "./build/"
  },

  module: {
    rules: [
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          loader: ["css-loader", "less-loader"]
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: { presets: ["react"] }
      }
    ]
  },

  plugins: [commonChunks, extractText]
};
