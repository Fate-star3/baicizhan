import { axiosInstance } from "./config";


export const getHomeInfoRequest =
    () => axiosInstance.get('api/info')

export const getGoodsListRequest =
    () => axiosInstance.get('api/goodsList')

export const getCartDetailRequest =
    () => axiosInstance.get('api/cart/detail')

export const getCartListRequest =
    () => Promise.resolve({
        data: JSON.parse(window.localStorage.getItem('data') as string)
    })