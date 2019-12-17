const Vuex = require('vuex');

import Vue from 'vue';

Vue.use(Vuex);

// 在组件取值方式this.$store.state.count 或 $store.state.count
// 禁止组件直接对state中的数据修改。eg：this.$store.state.count++
// 推荐通过mutations中方法操作数据。this.$store.commit('方法');
// getters 可以在获取之前处理数据,作用类似过滤器。this.$store.getters.optCount() 
// Action 提交的是 mutation，而不是直接变更状态。Action 可以包含任意异步操作。
// 通过this.$store.dispatch('action名字') 来出发actions


const store = new Vuex.Store({
    state: {  // 相当data
        count: 0
    },
    mutations: { // 突变 相当于methods  操作数据的。 方法最多两个参数 如果有多个参数值则将它作为对象传入第二参数
        increment(state, num) { // 第一个参数一定为state, 第二参数值。必须为同步函数
            state.count += num;
        }
    },
    getters: { // 只提供数据  不修改数据， 修改数据使用mutations
        optCount: function(state) {
            return '处理之后的count值为：' + state.count;
        }
    },
    actions: {
        increment (context) { // context即当前store对象
            //context.state;
            //context.getters
        }
    }
});

export default store;