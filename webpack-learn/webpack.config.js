// 通过 webpack-dev-server 这个工具 实现自动打包编译的功能。
// 1、npm i webpack-dev-server -D
// 2、此工具用法和webpack命令用法完全一样
// 3、直接运行webpack-dev-server时会报命令不存在，因为安装在项目本地，不是全局安装。
// 通过npm的script解决此问题。在package.json中的scripts 绑定npm命令 
//eg：“dev”： “webpack-dev-server”。则运行npm run dev 即是运行webpack-dev-server
// wepack-dev-server 后面可以接参数 【--open 自动打开浏览器】【--port 3000 指定端口】【--contentBase src 指定浏览器打开的默认路径】【--hot 热更新，可以实现浏览器的无刷新重载 对样式有作用】
// 4、注意运行要求一定要本地项目安装webpack，webpack-dev-server不会生成文件，
// 只会存在内存中(在/下，文件存在，但是看不见，main.html引用“/bundle.js”即可)（访问http://localhost:8080/bundle.js）可以通过看npm run dev的输出日志：webpack output is served from / 
//生成文件还是需要通过webpack。 
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: { // 这是配置 webpack-dev-server命令参数  第二种配置参数  第一种直接在package.json 配置
        open: true, // 自动打开浏览器
        port: 3000, // 设置运行端口
        contentBase: './src', // 服务器加载的页面所在目录
        hot: true // 启用热更新 还需引入webpack。 并且在plugins配置热更新对象 才生效 
    },
    plugins: [ // 配置插件
        new webpack.HotModuleReplacementPlugin() // new一个热更新模块对象
    ]
}