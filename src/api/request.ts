import { axiosInstance } from "./config";


export const getHomeInfoRequest =
    () => axiosInstance.get('/server/info')

export const getGoodsListRequest =
    () => axiosInstance.get('/server/goodsList')

export const getCartDetailRequest =
    () => axiosInstance.get('/server/cart/detail')

export const getCartListRequest =
    () => Promise.resolve({
        data: JSON.parse(window.localStorage.getItem('data') as string)
    })