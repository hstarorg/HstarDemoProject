let webpack = require('webpack');
let webpackMerge = require('webpack-merge');
let HtmlWebpackPlugin = require('html-webpack-plugin');

let commonConfig = require('./webpack.common');

module.exports = webpackMerge(commonConfig, {
  output: {
    path: './dist',
    publicPath: 'http://10.16.85.170:9999/',
    filename: 'newkit.[name].js',
    library: ['newkit', '[name]'],
    liabraryTarget: 'umd'
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
    stats: 'minimal',
    open: true
  }
});