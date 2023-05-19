import {FETCH_NEW_RAMDAN_DEALS} from './AllAction';
import {FETCH_NEW_ARRIVALS_DEALS} from './AllAction';
import {TOP_NEW_TRANDING_PRODUCTS_ACTION} from './AllAction';
import {FETCH_NEW_BANNERS} from './AllAction';
import {GET_ALL_CATEGORY} from './AllAction';
import {ADD_TO_CART} from './AllAction';
import {CLEAR_CART_DATA} from './AllAction';
import {addToCart} from './AllAction';
const initialState = {
  banner: [],
  ramdanDeals: [],
  newArrivals: [],
  topBrand: [],
  topTranding: [],
  allCategorys: [],
  cartItems: [],
};

export const homeReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case FETCH_NEW_BANNERS:
      return {
        ...state,
        banner: action.payload,
      };
    case FETCH_NEW_RAMDAN_DEALS:
      return {
        ...state,
        ramdanDeals: action.payload,
      };
    case FETCH_NEW_ARRIVALS_DEALS:
      return {
        ...state,
        newArrivals: action.payload,
      };
    case TOP_NEW_TRANDING_PRODUCTS_ACTION:
      return {
        ...state,
        topTranding: action.payload,
      };
    case GET_ALL_CATEGORY:
      return {
        ...state,
        allCategorys: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case CLEAR_CART_DATA:
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};
