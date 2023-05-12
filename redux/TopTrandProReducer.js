import {
  TOP_TRANDING_FETCH_PRODUCTS_FAIL,
  TOP_TRANDING_FETCH_PRODUCTS_SUCCESS,
  TOP_TRANDING_FETCH_PRODUCTS_REQUEST,
} from './Action';

const intialState = {
  product: [],
  loading: false,
  error: null,
};

export const Reducer = (state = intialState, action) => {
  switch (action.type) {
    case TOP_TRANDING_FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TOP_TRANDING_FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        product: action.payload,
        loading: false,
        error: null,
      };
    case TOP_TRANDING_FETCH_PRODUCTS_FAIL:
      return {
        ...state,
        product: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// products: [],
// loading: false,
// error: null,
