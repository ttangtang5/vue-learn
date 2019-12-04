// 每次修改main.js 都需要运行转译命令。通过此配置文件配置转译的输入输出。
// webpack 基于nodejs实现的 可以使用node所有语法
// 通过此配置文件 在当前目录下运行webpack命令即可 不需要指定输入输出 实现转译打包 
// 这样配置还是每次修改js 需要手动打包构建
// 运行过程：
// 1、webpack 会在当前目录下找webpack.config.js。
// 2、解析配置文件得到输入 输出参数
// 3、再运行完成的webpack 输入 输出命令

// 通过commonjs规范 require 使用path模块
const path = require('path');

// 通过commonjs规范  module.exports暴露一个对象出去
// __dirname
//__dirname 总是指向被执行 js 文件的绝对路径,也就是说你在E:\web\test\abc.js中写__dirname那么路径就是E:\web\test

//__filename
//__filename返回当前模块文件被解析过后的绝对路径，使用__filename变量获取当前模块文件的带有完整绝对路径的文件名，返回E:\web\test\abc.js（__dirname等同于path.dirname(__filename)）

//示例E:\web\test\abc.js里面写：
//path.join(__dirname,'/static/js') 输出 E:\web\test\static\js
//path.join(__dirname,'./static/js') 输出 E:\web\test\static\js
//path.join('/file','static') 输出 file\static
//path.resolve()中的/会被解析为根目录
//path.resolve('/test','/static/js') 输出 E:\static\js
//path.resolve('/test','./static/js') 输出 E:\test\static\js

module.exports = {
    entry: path.join(__dirname, './src/main.js'),  // 输入 表示需要转译打包的目录
    output: { // 输出 表示打包之后输出到的目录
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'  // 指定输出之后的文件名
    }
}