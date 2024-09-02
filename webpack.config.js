var webpack = require("webpack");
var path = require('path');
var version = require('./package.json').version;
var isProduction = (process.env.NODE_ENV === 'production');

var banner = 'My App v' + version + '\n' +
  '(c) ' + new Date().getFullYear() + ' Nathan Anderson';

var config = {
  mode: (isProduction) ? "production" : "development",
  entry: {
    "XApp" : "./src/index.ts"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "my-class.min.js",
    library : ["XApp"],
    libraryTarget: 'umd'
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
  plugins: [
    new webpack.BannerPlugin({
      banner,
      stage: webpack.Compilation.PROCESS_ASSETS_STAGE_REPORT
    })
  ],
  devtool: false
};


if (process.env.NODE_ENV === 'production') {
  var plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ];
  config.plugins = config.plugins.concat(plugins);
} else {
  config.devtool = 'source-map';
}

module.exports = config;