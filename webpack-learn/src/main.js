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

// 使用import 导入css样式表
import './css/index.css'
// 注意： webpack。默认只能打包处理js文件，无法处理非js类型之外的文件
// 如果需要处理其他类型的文件，需要安装第三方loader。
// 打包处理css文件 处理过程
// 1、安装style-loader和css-loader
// 2、在webpack.conf.js中配置一个新节点 module，它是一个对象。module中有个rules属性，rules为数组，该数组存放所有第三方文件的匹配和处理规则
// 3、rules中 设置test属性和use属性 test为正则匹配  use为声明用什么第三方处理

// webpack 处理第三方文件类型
// 1、判断文件是否为js文件。不是 则去module中匹配第三方模块处理
// 2、查找匹配规则，匹配到则 使用use中的模块处理。
// 3、use中的模块，后面的先处理，依次往前处理调用
// 4、最后一个loader 调用完毕  会把处理结果给webpack进行打包合并 最终输出到bundle.js中去
$(function() {
    console.log('hello webpack');
    console.log('hello webpack-dev-server 第二种配置');
});
