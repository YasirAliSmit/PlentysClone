export const FETCH_NEW_RAMDAN_DEALS = 'FETCH_NEW_RAMDAN_DEALS';
export const FETCH_NEW_ARRIVALS_DEALS = 'FETCH_NEW_ARRIVALS_DEALS';
export const TOP_NEW_TRANDING_PRODUCTS_ACTION =
  'TOP_NEW_TRANDING_PRODUCTS_ACTION';
export const FETCH_NEW_BANNERS = 'FETCH_NEW_BANNERS';
export const GET_ALL_CATEGORY = 'GET_ALL_CATEGORY';
export const ADD_TO_CART = 'ADD_TO_CART';
export const CLEAR_CART_DATA = 'CLEAR_CART_DATA';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const GET_PERTICULAR_PRODUCTS = 'GET_PERTICULAR_PRODUCTS';
import _ from 'lodash';
export const RamdanDealsNewAction = RamdanDeals => {
  return dispatch => {
    dispatch({
      type: FETCH_NEW_RAMDAN_DEALS,
      payload: RamdanDeals,
    });
  };
};
export const clearCartData = () => {
  return dispatch => {
    dispatch({
      type: CLEAR_CART_DATA,
    });
  };
};

export const getAllCategory = data => {
  return dispatch => {
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: data,
    });
  };
};
export const addToCart = products => {
  return {
    type: ADD_TO_CART,
    payload: products,
  };
};
export const getPerticularProduct = data => {
  return {
    type: GET_PERTICULAR_PRODUCTS,
    payload: data,
  };
};
export const removeFromCart = productId => {
  return {
    type: DELETE_FROM_CART,
    payload: productId,
  };
};

export const fetchAllCategories = () => async dispatch => {
  try {
    const response = await fetch(
      'https://api.plentys.pk/api/v1/public/allCategories?cityId=1',
    );
    if (!response.ok) {
      throw new Error('Falid to fetch all Category');
    }
    const data = await response.json();
    const finalData = _.groupBy(data.data, 'parentId');
    dispatch(getAllCategory(finalData));
    // _.groupBy(products, 'parentId');
  } catch (error) {
    console.log(
      `Kindly Fix this Bug Line Num is 99 File name is Action.js ${error.message} `,
    );
  }
};
export const fetchRamdanDealsNEW = () => async dispatch => {
  try {
    const response = await fetch(
      `https://api.plentys.pk/api/v1/public/product/search?title=&categoryId=1955&cityId=1&limit=15`,
    );
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = await response.json();

    console.log('data.datadata.datadata.data ', typeof data.data);

    dispatch(RamdanDealsNewAction(JSON.parse(JSON.stringify(data.data))));
  } catch (error) {
    console.log(
      `Kindly Fix this Bug Line Num is 99 File name is Action.js ${error.message} `,
    );
  }
};
export const NewArrivalsAction = newArrivals => {
  return {
    type: FETCH_NEW_ARRIVALS_DEALS,
    payload: newArrivals,
  };
};
export const fetchNewArrivalsNEW = () => async dispatch => {
  try {
    const response = await fetch(
      'https://api.plentys.pk/api/v1/public/bestseller/newproduct?cityId=1',
    );
    if (!response.ok) {
      throw new Error('Failed to fetch fetchNewArrivalsNEW ');
    }
    const data = await response.json();

    dispatch({
      type: FETCH_NEW_ARRIVALS_DEALS,
      payload: data.data,
    });
  } catch (error) {
    console.log(
      `error of Line Number of 101 file name is Action.js fetchNewArrivals  ${error.message}`,
    );
  }
};
export const fetchPerticularProduct = childId => async dispatch => {
  try {
    const response = await fetch(
      `https://api.plentys.pk/api/v1/public/product/search?title=/&categoryId=${childId}&minPrice=1&maxPrice=&productIds=&storeId=&brandId=&rating=&conditionId=&discountValue=&promotionId=&lookupShippingTypeId=&lookupAttributeValueIds=&freshBaazar=&exactDiscount=&cityId=1&orderBy=stockDesc&limit=60&page=1`,
    );
    if (!response.ok) {
      throw new Error('fetch particular product failed ');
    }
    const data = await response.json();
    // console.log(data.data);
    dispatch(getPerticularProduct(data.data));
    // console.log('this console from fetchPerticularProduct', data.data);
  } catch (error) {
    console.log(
      `error while getting data fetchPerticularProduct `,
      error.messege,
    );
  }
};

export const TopTrandProduct = TopTrandProduct => {
  return {
    type: TOP_NEW_TRANDING_PRODUCTS_ACTION,
    payload: TopTrandProduct,
  };
};

export const fetchTopTrandProductReqNEW = () => async dispatch => {
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
    dispatch(TopTrandProduct(data.data));
  } catch (error) {
    console.log(`erorr in Line Number of 119 of Action.js`);
  }
};
const bannersAcion = banner => {
  return {
    type: FETCH_NEW_BANNERS,
    payload: banner,
  };
};

export const fetchBanner = () => async dispatch => {
  try {
    const response = await fetch(
      'https://api.plentys.pk/api/v1/public/banner?mobile=1&cityId=1',
    );
    const data = await response.json();
    dispatch(bannersAcion(data.data));
  } catch (error) {
    console.error('Error fetching banners:', error);
  }
};
