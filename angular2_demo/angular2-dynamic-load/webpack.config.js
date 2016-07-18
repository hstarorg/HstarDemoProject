'use strict';

let webpack = require('webpack');
let CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  debug: true,
  entry: {
    main: './src/main.ts',
    vendor: './src/vendor.ts'
    // home: './src/app/home.component.ts'
  },
  output: {
    path: './dist',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts' }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor']
    })
  ]
};