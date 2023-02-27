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
let res: string | any[]
const reducer = (state = stateDefault, action: AnyAction) => {
    let data = state.CartDetail
    
    let count = 0
    switch (action.type) {
        case actionTypes.GET_CART_DETAIL:
            console.log(action.data);
            
            let list = action.data
            list.map((item: any, index: any) => {
                item.id = index + 1
                // for (let i = 0; i < data.length; i++) {
                //     if (item.id == data[i].id) {
                //         count = data[i].num
                //     }
                    
                // }
                // item.num = count
            })
            console.log(list);

            return Object.assign({}, state, { CartDetail: list})
        // + -
        case actionTypes.CHNAGE_GOODS_NUM:

            data.map((item: { num: any; id: number }) => {
                if (item.id == action.data.id) {
                    if (action.data.status == 'add') {
                        res = state.SingleCart.filter((item1) => {
                            if (item1.id == item.id) {
                                return item
                            }
                        })
                        if (res.length) {
                            state.SingleCart.forEach((item) => {
                                item.num++
                            })
                            return;
                        } else {
                            state.SingleCart.push(item)
                        }
                    } else {                     
                        if (res.length) {
                            state.SingleCart.forEach((item) => {
                                item.num--
                                if (item.num == 0) {
                                    state.SingleCart.pop()
                                }
                            })
                            return;
                        } 
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