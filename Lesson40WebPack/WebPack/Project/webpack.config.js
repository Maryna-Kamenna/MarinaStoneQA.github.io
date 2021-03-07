const path = require('path')
const HtmlWebpackPlugin = require ('html-webpack-plugin')


module.exports = {
    mode: 'development',
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
        compress: true,
        hot: true,
        port: 8080,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './template.html',
            filename: 'index.html'
        })
    ]

}

