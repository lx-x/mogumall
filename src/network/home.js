import { request } from "./request";

export function getHomeMultidata() {
    return request({
        url: "/home/multidata",
        method: 'get'
    })
}
export function getHomeGoods(type, page) {
    return request({
        url: "/home/data",
        params: {
            type: type,
            page: page
        },
        method: 'get'
    })
}