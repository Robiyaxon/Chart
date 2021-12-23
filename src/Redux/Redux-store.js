import { KassaReduser } from './KassaReduser';
import { BuyurtmalarReducer } from './BuyurtmalarReduser';
import { LoginReducer } from './LoginReducer';
const { createStore, combineReducers } = require("redux");
let redusers = combineReducers({
   buyurtma:BuyurtmalarReducer,
   kassa: KassaReduser, 
   login: LoginReducer
})
let store = createStore(redusers)
export default store