const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

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
        hot: true
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'  // 表示import以vue结尾，则加载该js 脚手架是引用vue-esm.js
        },
    },
    module: {
        rules: [ // 第三方模块的 匹配规则
            { // 处理css
                test: /\.css$/, // 正则匹配
                use: ['style-loader', 'css-loader'] // 用于处理匹配文件 第三方loader模块 处理顺序后面的先处理，再传递给前面的模块
            },
            { // 处理less
                test: /\.less$/, // 正则匹配
                use: ['style-loader', 'css-loader', 'less-loader'] // 用于处理匹配文件 第三方loader模块 处理顺序后面的先处理，再传递给前面的模块
            },
            { // 处理sass
                test: /\.sass$/, // 正则匹配
                use: ['style-loader', 'css-loader', 'sass-loader'] // 用于处理匹配文件 第三方loader模块 处理顺序后面的先处理，再传递给前面的模块
            },
            { // 处理sass
                test: /\.(jpg|gif|png|jpeg)$/, // 正则匹配
                use: 'url-loader?limit=7777&name=[hash:8]-[name].[ext]' // 用于处理匹配文件 第三方loader模块 处理顺序后面的先处理，再传递给前面的模块
            },
            { // 处理字体
                test: /\.(tff|eot|svg|woff|woff2)$/,
                use: 'url-loader'
            },
            { // 配置babel  用于处理高级语法 eg：部分webpack不支持的es6
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            { // 处理vue文件
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/main.html')
        }),
        new VueLoaderPlugin()
    ]
}