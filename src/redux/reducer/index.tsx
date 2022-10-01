import { combineReducers } from 'redux'
import cartReducer from './cartReducer/cartReducer';
import productReducer from './productReducer/productReducer';
import toggleReducer from './toggleReducer/toggleReducer';

export default combineReducers({
  toggle: toggleReducer,
  cart: cartReducer,
  product: productReducer,
});