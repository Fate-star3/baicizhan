import {
    getCartListRequest
} from '@/api/request'
import { Dispatch } from 'redux'
import * as actionTypes from './constants'


export const changeCartList= (data: any[]) => ({
    type: actionTypes.GET_CART_LIST,
    data
})

export const changeLoading = (data: boolean) => ({
    type: actionTypes.GET_LOADING,
    data
})
// 商品数量加减
export const changeGoodsNumAction = (data:any[]) => ({
    type: actionTypes.CHNAGE_GOODS_NUM,
    data: data
})
// 商品单选
export const checkGoodsAction = (goodsId:number) => ({
    type: actionTypes.CHECK_GOODS,
    data: goodsId
})
// 商品全选
export const checkAllGoodsAction = (data:any[]) => ({
    type: actionTypes.CHECK_ALL_GOODS,
    data
})
// 商品删除
export const clearGoodsAction = (data:any) => ({
    type: actionTypes.CLEAR_GOODS,
    data
})

export const getCartList= () => {
    return (dispatch: Dispatch) => {
        getCartListRequest().then((data: { data: any[] }) => {
            const action = changeCartList(data.data)
            dispatch(action)
            dispatch(changeLoading(false))
        })
    }
}

export function changeAllGoodsDispatch(checkAll: any) {
    throw new Error('Function not implemented.')
}
