const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

//add clean webpack
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname,'public')
  },
  devServer: {
    contentBase: './public'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Ignitition Application',
      filename: 'index.html',
      template: './src/template.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module:{
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}
