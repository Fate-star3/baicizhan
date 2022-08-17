import { combineReducers} from "redux"

import {reducer as HomeReducer}   from '@/pages/Home/store/index'
import {reducer as MarketReducer}   from '@/pages/Market/store/index'
import {reducer as CartDetailReducer}   from '@/pages/CartDetails/store/index'
import {reducer as CartReducer}   from '@/components/shopping-cart/store/index'



export default combineReducers({
  home:HomeReducer,
  market:MarketReducer,
  goods:CartDetailReducer,
  cart:CartReducer,
})