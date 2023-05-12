export const TOP_BRAND_FETCH_PRODUCTS_REQUEST =
  'TOP_BRAND_FETCH_PRODUCTS_REQUEST';
export const TOP_BRAND_FETCH_PRODUCTS_SUCCESS =
  'TOP_BRAND_FETCH_PRODUCTS_SUCCESS';
export const TOP_BRAND_FETCH_PRODUCTS_FAILED =
  'TOP_BRAND_FETCH_PRODUCTS_FAILED';

export const fetchTopBrandProductRequest = () => {
  return {
    type: TOP_BRAND_FETCH_PRODUCTS_REQUEST,
  };
};
export const fetchTopBrandProductSuccess = data => {
  return {
    type: TOP_BRAND_FETCH_PRODUCTS_SUCCESS,
    payload: data,
  };
};

export const fetchTopBrandProductFail = error => {
  return {
    type: TOP_BRAND_FETCH_PRODUCTS_FAILED,
    payload: error,
  };
};
const intialState = {
  Loading: false,
  data: [],
  error: null,
};
export const TopBrandReducer = (state = intialState, action) => {
  switch (action.type) {
    case TOP_BRAND_FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        Loading: true,
      };
    case TOP_BRAND_FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        Loading: false,
        data: action.payload,
        error: null,
      };
    case TOP_BRAND_FETCH_PRODUCTS_FAILED:
      return {
        ...state,
        Loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export const TopBrands = () => async dispatch => {
  dispatch(fetchTopBrandProductRequest());
  try {
    const response = await fetch(
      'https://api.plentys.pk/api/v1/public/lookup/getTopBrands?cityId=1',
    );
    if (!response.ok) {
      throw new Error(
        'Request Failed on the line number is 40 of file name isTopBrandProduct',
      );
    }
    const data = await response.json();
    dispatch(fetchTopBrandProductRequest(data.data));
  } catch (error) {
    dispatch(fetchTopBrandProductFail(error.messege));
  }
};
//   export const fetchTopTrandProductReq = () => async dispatch => {
//     dispatch(fetchTopTrandProductReq());
//     try {
//       const response = await fetch(
//         'https://api.plentys.pk/api/v1/public/bestseller/product',
//       );
//       if (!response.ok) {
//         throw new Error(
//           `Fail to Fetch Top Tranding Product Line number is 112 of File Name => Acion.js`,
//         );
//       }
//       const data = await response.json();
//       dispatch(fetchTopTrandProductSuccess(data.data));
//     } catch (error) {
//       console.log(fetchTopTrandProductFail(error.message));
//     }
//   };
