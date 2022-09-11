import { combineReducers } from 'redux'
import cartReducer from './cartReducer/cartReducer';
import productReducer from './productReducer/productReducer';
import toogleReducer from './toogleReducer/toogleReducer';

export default combineReducers({
  toogle: toogleReducer,
  cart: cartReducer,
  product: productReducer,
});