import * as actionTypes from './constants'
import { AnyAction } from 'redux'

const stateDefault = {
    Loading: true,
    CartList: [],
    // SingleCart: []
}

const reducer = (state = stateDefault, action: AnyAction) => {
    let data = state.CartList
    switch (action.type) {

        case actionTypes.GET_CART_LIST:
            let list = action.data
            list.map((item: any, index: any) => {
                item.check = false;
                item.id = index
            })
            return Object.assign({}, state, { CartList: list })

        // + -
        case actionTypes.CHNAGE_GOODS_NUM:

            data.map((item: { check: boolean, num: any; id: number }) => {
                if (item.id == action.data.id) {
                    if (action.data.status == 'add') {
                        item.num++
                        // state.SingleCart.push(item)
                    } else {
                        item.num--
                        // state.SingleCart.pop()

                    }
                    item.num == 0 ? item.check = false : ""
                }
            })
            return Object.assign({}, state, { CartList: [...data] })

        // 将单个商品选中或者取消选中
        case actionTypes.CHECK_GOODS:

            data.map((item: { id: number, check: boolean }) => {
                if (item.id == action.data) {
                    item.check = !item.check
                }
            })

            return Object.assign({}, state, {
                CartList: [...data]
            })

        // 全选和取消全选 
        case actionTypes.CHECK_ALL_GOODS:
            data.map((item: { check: boolean }) => {
                item.check = !action.data
                // 如果已经全部选中 action.data也就是传的checkAll参数为true   然而在这进行了取反，将每一个元素的check变为false

            })
            return Object.assign({}, state, { CartList: [...data] })

        // 删除
        case actionTypes.CLEAR_GOODS:
            let res = data.filter((item: { id: number }) => action.data !== item.id)
            return Object.assign({}, state, { CartList: [...res] })

        case actionTypes.GET_LOADING:

            return Object.assign({}, state, { Loading: action.data })
        default:
            return state
    }
}

export default reducer