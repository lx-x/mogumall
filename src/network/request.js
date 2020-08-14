import axios from 'axios'
export function request(config) {
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:8000',
        timeout: 5000
    })
    instance.interceptors.request.use(config => {
        // config中存在不符合服务器的要求
        // 请求动画
        // 某些网络请求登录必须携带一些特殊的信息(比如登录(token)                                                                                                                                                                                )
        return config

    }, err => {
        console.log(err)

    })


    // 响应拦截
    instance.interceptors.response.use(res => {
        // config中存在不符合服务器的要求
        // 请求动画
        // 某些网络请求登录必须携带一些特殊的信息(比如登录(token)                                                                                                                                                                                )
        return res.data

    }, err => {
        console.log(err)

    })
    return instance(config)

}