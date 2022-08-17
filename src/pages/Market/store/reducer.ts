import * as actionTypes from './constants'
import { AnyAction } from 'redux'

const stateDefault = {
    Loading: true,
    GoodsList: []
}

const reducer = (state = stateDefault, action: AnyAction) => {
    switch (action.type) {
        case actionTypes.GET_GOODS_LIST:

            return Object.assign({}, state, { GoodsList: action.data })
        case actionTypes.GET_LOADING:
            return {
                ...state,
                Loading: action.data,

            }
        default:
            return state
    }
}

export default reducer