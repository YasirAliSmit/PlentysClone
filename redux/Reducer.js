import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from './Action';
import {
  FETCH_ONE_PRODUCT_FAILURE,
  FETCH_ONE_PRODUCT_REQUEST,
  FETCH_ONE_PRODUCT_SUCCESS,
} from './Action';
const initialState = {
  products: [],
  loading: false,
  error: null,
};
const initialStateOne = {
  products: [],
  loading: false,
  error: null,
};

export const productsReducerOne = (state = initialStateOne, action) => {
  switch (action.type) {
    case FETCH_ONE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ONE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_ONE_PRODUCT_FAILURE:
      return {
        ...state,
        products: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        products: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
