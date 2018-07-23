var path = require('path');
var merge = require('webpack-merge');
var dev = require('./webpack-dev.config.js');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(dev, {
  plugins: [
    new UglifyJsPlugin({
      test: /\.js($|\?)/i
    })
  ]
});