import Vue from 'vue'
import App from './App.vue'
import router from './router'

import store from "./store"
import toast from "./components/common/toast/index"

// 全局引入按需引入UI库 vant
import './plugins/vant'

import FastClick from 'fastclick'
import Lazyload from 'vue-lazyload'
Vue.config.productionTip = false

// 添加事件总线对象
Vue.prototype.$bus = new Vue();

// 安装toast对象
Vue.use(toast)
    // 解决移动端300ms延迟
FastClick.attach(document.body)

// 使用懒加载插件
Vue.use(Lazyload, {
    loading: require('./assets/img/common/placeholder.png')
})

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')