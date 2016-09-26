let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  debug: true,
  devtools: 'source-map',
  entry: {
    app: './src/main.ts'
  },
  output: {
    path: './dist',
    publicPath: '/',
    filename: '[name].js'
  },
  externals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/compiler': 'ng.compiler',
    '@angular/platform-browser': 'ng.platformBrowser',
    '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
    '@angular/http': 'ng.http',
    '@angular/forms': 'ng.forms',
    '@angular/router': 'ng.router'
  },
  resolve: {
    root: [path.resolve(__dirname)],
    extensions: ['', '.ts']
  },
  module: {
    loaders: [
      { test: /\.ts?$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ],
  devServer: {
    host: '0.0.0.0',
    contentBase: './dist',
    port: 1001,
    historyApiFallback: true,
    open: true
  }
};