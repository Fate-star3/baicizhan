import * as actionTypes from './constants'
import { AnyAction } from 'redux'

const stateDefault = {
    Loading: true,
    HomeInfo: []
}

const reducer = (state = stateDefault, action: AnyAction) => {
    switch (action.type) {
        case actionTypes.GET_HOMEINFO:

            return Object.assign({}, state, { HomeInfo: action.data })
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