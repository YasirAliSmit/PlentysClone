export const FETCH_NEW_RAMDAN_DEALS = 'FETCH_NEW_RAMDAN_DEALS';
export const FETCH_NEW_ARRIVALS_DEALS = 'FETCH_NEW_ARRIVALS_DEALS';
export const TOP_NEW_TRANDING_PRODUCTS_ACTION =
  'TOP_NEW_TRANDING_PRODUCTS_ACTION';
export const FETCH_NEW_BANNERS = 'FETCH_NEW_BANNERS';
export const RamdanDealsNewAction = RamdanDeals => {
  return {
    type: FETCH_NEW_RAMDAN_DEALS,
    payload: RamdanDeals,
  };
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
    dispatch(RamdanDealsNewAction(data.data));
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
      throw new Error('Failed to fetch products One Line Number 56');
    }
    const data = await response.json();
    console.log(data.data);
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
