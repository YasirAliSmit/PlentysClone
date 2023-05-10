import {combineReducers} from 'redux';
import productsReducer from './Reducer';
import counterReducer from './cartSlice';
import {productsReducerOne} from './Reducer';
import cartReducer from './cartReducer';
const rootReducer = combineReducers({
  products: productsReducer,
  counter: counterReducer,
  productOne: productsReducerOne,
  cart:cartReducer
});

export default rootReducer;
