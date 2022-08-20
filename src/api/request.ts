import { axiosInstance } from "./config";


export const getHomeInfoRequest =
    () => axiosInstance.get('http://127.0.0.1:3030/info')

export const getGoodsListRequest =
    () => axiosInstance.get('http://127.0.0.1:3030/goodsList')

export const getCartDetailRequest =
    () => axiosInstance.get('http://127.0.0.1:3030/cart/detail')

export const getCartListRequest =
    () => Promise.resolve({
        data:JSON.parse(window.localStorage.getItem('data') as string)
    })