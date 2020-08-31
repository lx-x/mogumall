import Vue from "vue"
import Vuex from "vuex"
// 安装插件
Vue.use(Vuex)

// 创建store对象

const store = new Vuex.Store({
        state: {
            cartList: [

            ]
        },
        mutations: {
            addCounter(state, payload) {
                payload.count += 1

            },
            addToCart(state, payload) {
                payload.checked = true
                state.cartList.push(payload)
            }
        },
        actions: {
            addCart(context, payload) {

                // let oldProduct = null;
                // for (let item of state.cartList) {
                //     if (item.iid === payload.iid) {
                //         oldProduct = item
                //     }
                // }

                // if (oldProduct) {
                //     oldProduct.count += 1
                // } else {
                //     payload.count = 1
                //     state.cartList.push(payload)
                // }

                return new Promise((resolve, reject) => {
                    let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
                    if (oldProduct) {
                        context.commit('addCounter', oldProduct)
                        resolve('当前的商品数量+1')
                    } else {
                        payload.count = 1
                        context.commit('addToCart', payload)
                        resolve('添加新的商品')
                    }

                })
            }
        },
        getters: {
            cartLength(state) {
                return state.cartList.length
            },
            cartList(state) {
                return state.cartList
            }
        }
    })
    //挂载
export default store