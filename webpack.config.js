var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});
var webpack = require('webpack');
var webpackPlugin = new webpack.DefinePlugin({ "process.env": { NODE_ENV: '"production"' }});

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  devtool: 'eval',
  module: {
    loaders: [
      {test: /\.json$/, loaders: ['json']},
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.scss$/, loaders: ['style', 'css', 'sass?outputStyle=expanded']},
      {test: /\.(jpe?g|png|gif|svg)$/i, loaders: ['url', 'img']}
    ]
  },
  plugins: [ HtmlWebpackPluginConfig, webpackPlugin ]
};
