import { getGoodsListRequest } from '@/api/request'
import { Dispatch } from 'redux'
import * as actionTypes from './constants'


export const changeGoodsList = (data: any[]) => ({
    type: actionTypes.GET_GOODS_LIST,
    data
})

export const changeLoading = (data: boolean) => ({
    type: actionTypes.GET_LOADING,
    data
})

export const getGoodsList = () => {
    return (dispatch: Dispatch) => {
        getGoodsListRequest().then(data => {
            const action = changeGoodsList(data.data.data)
            dispatch(action)
            dispatch(changeLoading(false))
        })
    }
}