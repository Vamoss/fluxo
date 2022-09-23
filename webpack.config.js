var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = {
  context: __dirname + '/src',
  entry: {
    main: './index.js'
  },
  devServer: {
    hot: true,
  },
  output: {
    path: __dirname + '/docs',
    filename: '[name]-[hash:6].js',
    assetModuleFilename: '[name]-[hash:6][ext]'
  },
  module: {
    rules: [{
      test: /\.(glsl|vs|fs)$/,
      type: 'asset/source'
    },{
      test: /\.(jpg|png)$/,
      type: 'asset/resource'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      minify: false
    })
  ]
};
module.exports = config;