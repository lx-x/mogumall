import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 全局引入按需引入UI库 vant
import './plugins/vant'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue();


new Vue({
    render: h => h(App),
    router
}).$mount('#app')