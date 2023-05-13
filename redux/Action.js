export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const FETCH_ONE_PRODUCT_REQUEST = 'FETCH_ONE_PRODUCT_REQUEST';
export const FETCH_ONE_PRODUCT_SUCCESS = 'FETCH_ONE_PRODUCT_SUCCESS';
export const FETCH_ONE_PRODUCT_FAILURE = 'FETCH_ONE_PRODUCT_FAILURE';
export const ADD_TO_CART = 'ADD_TO_CART';

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const TOP_TRANDING_FETCH_PRODUCTS_REQUEST =
  'TOP_TRANDING_FETCH_PRODUCTS_REQUEST';
export const TOP_TRANDING_FETCH_PRODUCTS_SUCCESS =
  'TOP_TRANDING_FETCH_PRODUCTS_SUCCESS';
export const TOP_TRANDING_FETCH_PRODUCTS_FAIL =
  'TOP_TRANDING_FETCH_PRODUCTS_FAIL';

export const fetchTopTrandProductRequest = () => {
  return {
    type: TOP_TRANDING_FETCH_PRODUCTS_REQUEST,
  };
};
export const fetchTopTrandProductSuccess = data => {
  return {
    type: TOP_TRANDING_FETCH_PRODUCTS_SUCCESS,
    payload: data,
  };
};

export const fetchTopTrandProductFail = error => {
  return {
    type: TOP_TRANDING_FETCH_PRODUCTS_FAIL,
    payload: error,
  };
};

export function addToCart(data) {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
}
export function removeFromCart(data) {
  return {
    type: REMOVE_FROM_CART,
    payload: data,
  };
}
export const fetchOneProductReq = () => ({
  type: FETCH_ONE_PRODUCT_REQUEST,
});
export const fetchOneProductSucc = data => ({
  type: FETCH_ONE_PRODUCT_SUCCESS,
  payload: data,
});
export const fetchOneProductFail = error => ({
  type: FETCH_ONE_PRODUCT_FAILURE,
  payload: error,
});
export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = data => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: data,
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});

export const fetchRamdanDeals = () => async dispatch => {
  try {
    const response = await fetch(
      `https://api.plentys.pk/api/v1/public/product/search?title=&categoryId=1955&cityId=1&limit=15`,
    );
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = await response.json();
    dispatch(fetchProductsSuccess(data.data));
  } catch (error) {
    console.log(
      `Kindly Fix this Bug Line Num is 99 File name is Action.js ${error.message} `,
    );
  }
};
export const fetchNewArrivals = () => async dispatch => {
  try {
    const response = await fetch(
      'https://api.plentys.pk/api/v1/public/bestseller/newproduct?cityId=1',
    );
    if (!response.ok) {
      throw new Error('Failed to fetch products One Line Number 56');
    }
    const data = await response.json();
    dispatch(fetchOneProductSucc(data.data));
  } catch (error) {
    console.log(
      `error of Line Number of 101 file name is Action.js fetchNewArrivals`,
    );
  }
};
export const fetchTopTrandProductReq = () => async dispatch => {
  try {
    const response = await fetch(
      'https://api.plentys.pk/api/v1/public/bestseller/product',
    );
    if (!response.ok) {
      throw new Error(
        `Fail to Fetch Top Tranding Product Line number is 112 of File Name => Acion.js`,
      );
    }
    const data = await response.json();
    dispatch(fetchTopTrandProductSuccess(data.data));
  } catch (error) {
    console.log(`erorr in Line Number of 119 of Action.js`);
  }
};
