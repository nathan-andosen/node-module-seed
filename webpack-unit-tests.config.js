var path = require('path');

module.exports = {
  mode: 'development',
  entry: "./spec/in-browser/index.js",
  output: {
    path: path.join(__dirname, "spec", "in-browser", "dist"),
    filename: "spec.js",
    publicPath: "/dist/"
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.ts(x?)$/, loader: 'ts-loader', exclude: /node_modules/ }
    ]
  },
  devtool : 'source-map'
};
