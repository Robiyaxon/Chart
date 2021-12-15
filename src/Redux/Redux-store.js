import { KassaReduser } from './KassaReduser';
import { BuyurtmalarReducer } from './BuyurtmalarReduser';
const { createStore, combineReducers } = require("redux");
let redusers = combineReducers({
   buyurtma:BuyurtmalarReducer,
   kassa: KassaReduser
})
let store = createStore(redusers)
export default store