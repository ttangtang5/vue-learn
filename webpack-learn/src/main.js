// webpack 可以处理js文件的相互依赖关系

// 导入jquery
// import 导入模块是es6的语法 浏览器是无法直接解析该es6语法
// 解决：通过webpack将此js转译。 webpack ./src/main.js  ./dist/bundle.js命令格式webpack 源文件 生成路径（低版本webpack命令格式）
// html引用bundle.js即可 
// webpack命令问题 如果全局没有配置环境变量也是无法使用webpack命令 通过项目中均安装webpack -D webpack-cli -D已解决。
// 关于webpack版本问题 造成上面命令错误问题。4*版本：webpack ./src/main.js -o ./dist/bundle.js
// 通过 -o指定输入路径。 还会因为版本问题出现黄色警告 在版本4出现了开发模式,生产模式,无这三个状态。
// 需要声明模式，可以消除警告webpack ./src/main.js -o ./dist/bundle.js --mode development
import $ from 'jquery';

$(function() {
    console.log('hello webpack');
    console.log('hello webpack-dev-server 第二种配置');
});
