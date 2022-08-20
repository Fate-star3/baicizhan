import * as actionTypes from './constants'
import { AnyAction } from 'redux'


const stateDefault: {
    Loading: boolean;
    CartDetail: any[];
    SingleCart: any[];
} = {
    Loading: true,
    CartDetail: [],
    SingleCart: []
}

const reducer = (state = stateDefault, action: AnyAction) => {
    let data = state.CartDetail
    let count = 0
    switch (action.type) {
        case actionTypes.GET_CART_DETAIL:
            let list = action.data
            list.map((item: any, index: any) => {
                item.id = index
                item.num = state.SingleCart.length
            })
            console.log(list);
            
            return Object.assign({}, state, { CartDetail: list })
        // + -
        case actionTypes.CHNAGE_GOODS_NUM:

            data.map((item: { num: any; id: number }) => {
                if (item.id == action.data.id) {
                    if (action.data.status == 'add') {
                        item.num++
                        state.SingleCart.push(item)
  
                    } else {
                        item.num--
                        state.SingleCart.pop()

                    }
                }
            })
            return Object.assign({}, state, { CartDetail: [...data] })
        case actionTypes.GET_LOADING:

            return Object.assign({}, state, { Loading: action.data })
        default:
            return state
    }
}

export default reducer