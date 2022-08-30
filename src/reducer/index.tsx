import { combineReducers } from 'redux'
import productReducer from './productReducer/productReducer';
import toogleReducer from './toogleReducer/toogleReducer';

export default combineReducers({
  toogle: toogleReducer,
  product: productReducer,
});