let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'app': './src/main.ts',
    'lazy-load': './src/modules/lazy-load/app.module.ts'
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  externals: {
    '@angular/common' : 'ng.common',
    '@angular/compiler' : 'ng.compiler',
    '@angular/core' : 'ng.core',
    '@angular/http' : 'ng.http',
    '@angular/platform-browser' : 'ng.platformBrowser',
    '@angular/platform-browser-dynamic' : 'ng.platformBrowserDynamic',
    '@angular/router' : 'ng.router',
    '@angular/forms' : 'ng.forms',
    'rxjs' : 'Rx'
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'raw'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      // {
      //   test: /\.css$/,
      //   exclude: helpers.root('src', 'app'),
      //   loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      // },
      // {
      //   test: /\.css$/,
      //   include: helpers.root('src', 'app'),
      //   loader: 'raw'
      // }
    ]
  }
};
