const path = require('path');
module.exports = {
  entry: {
    app: './index.js'
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [{
      test: /.vue$/,
      loader: 'vue-loader'
    }, {
      test: /.js$/,
      loader: 'babel-loader'
    }]
  }
};
