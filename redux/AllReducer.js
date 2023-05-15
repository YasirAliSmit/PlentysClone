import {FETCH_NEW_RAMDAN_DEALS} from './AllAction';
import {FETCH_NEW_ARRIVALS_DEALS} from './AllAction';
import {TOP_NEW_TRANDING_PRODUCTS_ACTION} from './AllAction';
import {FETCH_NEW_BANNERS} from './AllAction';
import {GET_ALL_CATEGORY} from './AllAction';
const initialState = {
  banner: [],
  ramdanDeals: [],
  newArrivals: [],
  topBrand: [],
  topTranding: [],
  allCategorys: [],
};
export const homeReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};
