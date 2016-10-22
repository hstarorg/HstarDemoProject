let webpack = require('webpack');
let webpackMerge = require('webpack-merge');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let del = require('del');

let commonConfig = require('./webpack.common');

del.sync('./dist');

module.exports = webpackMerge(commonConfig, {
  output: {
    path: './dist',
    filename: '[name].[hash].js',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    // new ExtractTextPlugin('[name].css')
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: ['vendor']
    // }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ],

  devServer: {
    port: 9999,
    host: '0.0.0.0',
    historyApiFallback: true,
    stats: 'minimal'
  }
});