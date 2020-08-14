// 按需全局引入 vant组件
import Vue from 'vue'
import {
    List,
    Cell,
    Tabbar,
    TabbarItem,
    Swipe,
    Overlay,
    SwipeItem,
    Lazyload
} from 'vant'
import 'vant/lib/index.css';

Vue.use(Cell)
Vue.use(List)
Vue.use(Swipe)
Vue.use(Overlay)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(Tabbar).use(TabbarItem)