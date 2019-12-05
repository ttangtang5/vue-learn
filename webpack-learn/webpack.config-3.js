const path = require('path');
const webpack = require('webpack');
// html-webpack-plugin 作用
// 1、生成main.html 内存模版
// 2、内存模版自动引入打包的bundle.js
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        open: true,
        port: 8081,
        contentBase: './src',
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/main.html'), // 指定编译模版 存放内存
            filename: 'index.html'
        })
    ]
}