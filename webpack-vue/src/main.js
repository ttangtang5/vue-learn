// 注意这里引入的vue对象为缩减版，script引入的为完整的。
// 此种方式想引入完整的需要在webpack.config.js配置resolve中的alias。匹配的则加载后面指定
import vue from 'vue';
// webpack 无法处理vue文件 需要安装vue-loader、vue-template-compiler
// 配置webpack，module中rules{test:/\.vue$/, use: 'vue-loader'}
import App from './app.vue';

new vue({
    el: '#app',
    render: h => h(App)
});

// webpack 中如何使用vue
// 1、安装vue npm i vue -S，webpack 需要配置resolve中的alias：'vue$': 'vue/dist/vue-esm.js' 设置vue导入的js文件 
// 2、由于 webpack中 推荐使用.vue文件定义模版组件。需要安装loader解析文件
// 安装vue-loader、vue-template-compiler -D, 配置webpack的module中rules，
// 可能还需要配置plugins。const VueLoaderPlugin = require('vue-loader/lib/plugin'); 
// 3、在main.js 引入vue import vue from 'vue'
// 4、定一个vue文件app.vue，组件由template、script、style组成
// 5、main.js引入app.vue，import app from './app.vue';
// 6、创建vue实例。 通过render函数渲染app.vue。
// 7、在main.html 创建容器