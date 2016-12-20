'use strict';

let path = require('path');

let webpack = require('webpack');
let CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
let CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  debug: true,
  entry: {
    polyfills: './src/polyfills.ts',
    vendor: './src/vendor.ts',
    bootstrap: './src/bootstrap.ts'
  },
  output: {
    path: 'dist/assets/js',
    publicPath: 'http://localhost:8080/assets/js/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts' }
    ]
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  plugins: [
    new CommonsChunkPlugin({
      name: ['vendor', 'polyfills'] //vendor和polyfills设置为公共代码块
    }),
    new CopyWebpackPlugin([
      { from: './src/index.html', to: path.join(__dirname, 'dist') }
    ])
  ],
  devServer: {
    contentBase: "./dist",
    port: 9999,
    // hot: true,
    historyApiFallback: true
  }
};