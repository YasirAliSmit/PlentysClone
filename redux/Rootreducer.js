import {combineReducers} from 'redux';
import productsReducer from './Reducer';
import counterReducer from './cartSlice';
import {productsReducerOne} from './Reducer';
import cartReducer from './cartReducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
const rootReducer = combineReducers({
  products: productsReducer,
  counter: counterReducer,
  productOne: productsReducerOne,
  cart:cartReducer
});

export default rootReducer;
