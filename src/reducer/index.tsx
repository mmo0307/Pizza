import { combineReducers } from 'redux'
import cartReducer from './cartReducer/cartReducer';
import productreducer from './productReducer/productreducer';
import toogleReducer from './toogleReducer/toogleReducer';

export default combineReducers({
  toogle: toogleReducer,
  cart: cartReducer,
  product: productreducer,
});