import Toast from './Toast.vue'
const obj = {

}
obj.install = function(Vue) {
    console.log('执行ong函数');


    // 创建组件构造器
    const toastContrustor = Vue.extend(Toast)
        // new方式创间一个组件对象
    const toast = new toastContrustor()

    // 将组件对象,手动挂载到某一个元素上
    toast.$mount(document.createElement('div'))
        // toast.$el对应的就是div
    document.body.appendChild(toast.$el)

    Vue.prototype.$toast = toast



}

export default obj