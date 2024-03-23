const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     index: './src/index.js',
   },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Restaurant Page',
    }),
  ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
 };