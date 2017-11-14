const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: [
      // 'webpack-hot-middleware/client',
      './client.js'
    ]
  },
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'assets/js/[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    modules: ['node_modules']
  },
  stats: 'minimal',
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    // new ManifestPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, include: path.join(__dirname, '..') }
    ]
  },
  devServer: {
    port: 7771,
    host: 'localhost',
    publicPath: '/',
    contentBase: './src',
    historyApiFallback: true,
    open: true
  }
};
