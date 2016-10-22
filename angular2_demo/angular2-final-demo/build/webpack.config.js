let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');

let webpackConfig = {
  debug: true,
  devtool: '#sourcemap',
  target: 'node',
  externals: [],
  entry: {
    app: './src/app.module.ts',
    // vendor: './src/vendor.ts'
    'lazy-load': './src/modules/lazy-load.module.ts'
  },
  output: {
    filename: '[name].[hash].js',
    path: './dist',
    libraryTarget: 'umd',
    library: 'newkit2'
  },
  externals: {
    '@angular/common' : '@angular/common/common.umd.js',
    '@angular/compiler' : '@angular/compiler/compiler.umd.js',
    '@angular/core' : '@angular/core/core.umd.js',
    '@angular/http' : '@angular/http/http.umd.js',
    '@angular/platform-browser' : '@angular/platform-browser/platform-browser.umd.js',
    '@angular/platform-browser-dynamic' : '@angular/platform-browser-dynamic/platform-browser-dynamic.umd.js',
    '@angular/router' : '@angular/router/router.umd.js',
    'rxjs' : 'rxjs/bundles/Rx.umd.min.js'
  },
  resolve: {
    extensions: ['', '.ts', '.css'],
    root: './src',
    modulesDirectories: ['node_modules', 'typings']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts' },
      { test: /\.styl$/, loader: 'raw!stylus' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
};

module.exports = webpackConfig;