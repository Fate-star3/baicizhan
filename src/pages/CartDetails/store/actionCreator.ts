import {
    getCartDetailRequest
} from '@/api/request'
import { Dispatch } from 'redux'
import * as actionTypes from './constants'


export const changeCartDetail= (data: any[]) => ({
    type: actionTypes.GET_CART_DETAIL,
    data
})

export const changeLoading = (data: boolean) => ({
    type: actionTypes.GET_LOADING,
    data
})
export const changeGoodsNumAction = (data:any[]) => ({
    type: actionTypes.CHNAGE_GOODS_NUM,
    data: data
})

export const getCartDetail= () => {
    return (dispatch: Dispatch) => {
        getCartDetailRequest().then(data => {
            const action = changeCartDetail(data.data.data)
            dispatch(action)
            dispatch(changeLoading(false))
        })
    }
}