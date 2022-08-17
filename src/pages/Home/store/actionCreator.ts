import {getHomeInfoRequest} from '@/api/request'
import { Dispatch } from 'redux'
import * as actionTypes from './constants'


export const changeHomeInfo = (data: any[]) => ({
    type:actionTypes.GET_HOMEINFO,
    data
})

export const changeLoading = (data:boolean) => ({
    type:actionTypes.GET_LOADING,
    data
})

export const getHomeInfo = () => {
    return (dispatch:Dispatch) => {
        getHomeInfoRequest().then(data =>{
            const action = changeHomeInfo(data.data.data)
            dispatch(action)
            dispatch(changeLoading(false))
        })
    }
}