const path = require('path');
const webpack = require ('webpack');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: 'development',
    target: 'web',
    context: path.resolve(__dirname,'./src'),
    entry: {
        main :'./main.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        open: true,
        hot: true,
        port: 8080,
    },
    plugins: [
     //  new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: './template.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
        filename: '[name].css'
        }),
        new CssMinimizerPlugin()
    ],
    module: {
      rules: [
          {
              test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
              use: [{
                  loader: 'file-loader',
                  options: {
                      name: '[path][name].[ext]',
                  }
              }]
          },
          {
              test: /\.(scss)$/,
              use: [{
                loader: MiniCssExtractPlugin.loader, 
              }, {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                } 
              }, {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                }
              }]
            },
      ],
  },
}
        
}
