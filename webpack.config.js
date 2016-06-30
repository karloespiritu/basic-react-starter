/*
* @Author: Karlo Espiritu
* @Date:   2016-06-30 19:17:00
* @Last Modified by:   Karlo Espiritu
* @Last Modified time: 2016-06-30 19:17:08
*/

'use strict';

var path = require('path');

var config = {
  context: path.join(__dirname, 'js'),
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
    ],
  },
  resolveLoader: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  resolve: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};
module.exports = config;