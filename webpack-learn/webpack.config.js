const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
// 通过module属性设置 处理图片路径 安装file-loader url-loader
//limit 表示图片大小小于该值则转换为base64，大于等于这已图片格式。 name参数是设置打包后的图片名称
//默认图片名称为32位的hash。[name]表示源名称 [ext]表示源扩展名

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
    ],
    module: { // 用于配置第三方模块 加载器
        rules: [ // 第三方模块的 匹配规则
            { // 处理css
                test: /\.css$/,  // 正则匹配
                use: ['style-loader', 'css-loader'] // 用于处理匹配文件 第三方loader模块 处理顺序后面的先处理，再传递给前面的模块
            },
            { // 处理less
                test: /\.less$/,  // 正则匹配
                use: ['style-loader', 'css-loader', 'less-loader'] // 用于处理匹配文件 第三方loader模块 处理顺序后面的先处理，再传递给前面的模块
            },
            { // 处理sass
                test: /\.sass$/,  // 正则匹配
                use: ['style-loader', 'css-loader', 'sass-loader'] // 用于处理匹配文件 第三方loader模块 处理顺序后面的先处理，再传递给前面的模块
            },
            { // 处理sass
                test: /\.(jpg|gif|png|jpeg)$/,  // 正则匹配
                use: 'url-loader?limit=7777&name=[hash:8]-[name].[ext]' // 用于处理匹配文件 第三方loader模块 处理顺序后面的先处理，再传递给前面的模块
            }
        ]
    }
}