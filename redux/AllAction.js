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
export const HOME_LAYOUT = 'HOME_LAYOUT';
export const FLASH_DEALS_PRODUCTS = 'FLASH_DEALS_PRODUCTS';
export const AIRPORDS_PRODUCTS = 'AIRPORDS_PRODUCTS';
//export const carouselImages = 'carouselImages'
export const CAROUSELIMAGES = 'CAROUSELIMAGES';
import _ from 'lodash';
import Makeup from '../Components/BottomTab/Screens/Makeup';
import axios from 'axios';
export const FESTIVE_EID = `FESTIVE_EID`;
export const MAKE_UP = 'MAKE_UP';
export const SHAN_PRODUCTS = 'SHAN_PRODUCTS';
export const BEAVERAGES = `BEAVERAGES`;
export const KITCHENCAROUSEL = 'KITCHENCAROUSEL';
export const BEAUTY_BRAND = 'BEAUTY_BRAND';
export const DAIRY_PRODUCTS = 'DAIRY_PRODUCTS';
export const LIP_DONT_LIE = 'LIP_DONT_LIE';
export const CLEAN = 'CLEAN';
export const BAD_BREATH = 'BAD_BREATH';
export const GET_ALL_ID = 'GET_ALL_ID';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const GET_SHAMPO_PRODUCTS = 'GET_SHAMPO_PRODUCTS';
export const RamdanDealsNewAction = RamdanDeals => {
  return dispatch => {
    dispatch({
      type: FETCH_NEW_RAMDAN_DEALS,
      payload: RamdanDeals,
    });
  };
};
export const getAllIds = data => {
  return {
    type: GET_ALL_ID,
    payload: data,
  };
};
export const carouselImages = banner => {
  return {
    type: CAROUSELIMAGES,
    payload: banner,
  };
};
export const homeLayout = homeLayout => {
  return {
    type: HOME_LAYOUT,
    payload: homeLayout,
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
export const increaseQuantity = productId => {
  return {
    type: INCREASE_QUANTITY,
    payload: productId,
  };
};
export const decreaseQuantity = productId => {
  return {
    type: DECREASE_QUANTITY,
    payload: productId,
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
    // dispatch(bannersAcion(data.data));
    dispatch(carouselImages(data.data));
  } catch (error) {
    console.error('Error fetching banners:', error);
  }
};
export const fetchJsonData = () => async dispatch => {
  try {
    const response = await fetch(
      'https://mobileappconfig.s3.ap-south-1.amazonaws.com/home-layout.json',
    );
    const data = await response.json();
    //console.log('this console for data =>', data);
    dispatch(homeLayout(data.homeLayout));

    // find
    //loop , andr sab ki categoryid search api
  } catch (error) {
    console.log('error of fetchJsonData fileName AllAction ', error.messege);
  }
};
export const flashDealsProduct = products => {
  return {
    type: FLASH_DEALS_PRODUCTS,
    payload: products,
  };
};
export const fetchFlashDealsProducts = () => async dispatch => {
  try {
    //console.log(``)
    const response = await fetch(
      `https://api.plentys.pk/api/v1/public/product/search?title=/&categoryId=1948&minPrice=1&maxPrice=&productIds=&storeId=&brandId=&rating=&conditionId=&discountValue=&promotionId=&lookupShippingTypeId=&lookupAttributeValueIds=&freshBaazar=&exactDiscount=&cityId=1&orderBy=stockDesc&limit=60&page=1`,
    );
    const data = await response.json();
    dispatch(flashDealsProduct(data.data));
    //console.log(data);
  } catch (error) {
    console.log(`errror of fetchFlashDealsProducts`, error.messege);
  }
};
export const festiveEid = data => {
  return {
    type: FESTIVE_EID,
    payload: data,
  };
};

export const festivalEidProducts = childId => async dispatch => {
  try {
    const response = await fetch(
      `https://api.plentys.pk/api/v1/public/product/search?title=/&categoryId=1888&minPrice=1&maxPrice=&productIds=&storeId=&brandId=&rating=&conditionId=&discountValue=&promotionId=&lookupShippingTypeId=&lookupAttributeValueIds=&freshBaazar=&exactDiscount=&cityId=1&orderBy=stockDesc&limit=60&page=1`,
    );
    const data = await response.json();
    dispatch(festiveEid(data.data));
  } catch (error) {
    console.log(error`error for festival Eid Product`);
  }
};
export const makeUp = data => {
  return {
    type: MAKE_UP,
    payload: data,
  };
};

export const fetchMakeUp = childId => async dispatch => {
  try {
    const response = await fetch(
      `https://api.plentys.pk/api/v1/public/product/search?title=/&categoryId=309&minPrice=1&maxPrice=&productIds=&storeId=&brandId=&rating=&conditionId=&discountValue=&promotionId=&lookupShippingTypeId=&lookupAttributeValueIds=&freshBaazar=&exactDiscount=&cityId=1&orderBy=stockDesc&limit=60&page=1`,
    );
    const data = await response.json();
    dispatch(makeUp(data.data));
  } catch (error) {
    console.log(error`error for Makeup Product`);
  }
};

export const shanProducts = data => {
  return {
    type: SHAN_PRODUCTS,
    payload: data,
  };
};

export const fetchShanProducts = childId => async dispatch => {
  try {
    const response = await fetch(
      `https://api.plentys.pk/api/v1/public/product/search?title=/&categoryId=1&minPrice=1&maxPrice=&productIds=&storeId=&brandId=&rating=&conditionId=&discountValue=&promotionId=&lookupShippingTypeId=&lookupAttributeValueIds=&freshBaazar=&exactDiscount=&cityId=1&orderBy=stockDesc&limit=60&page=1`,
    );
    const data = await response.json();
    dispatch(shanProducts(data.data));
  } catch (error) {
    console.log(error`error for Shan Product`);
  }
};

export const beaverages = data => {
  return {
    type: BEAVERAGES,
    payload: data,
  };
};

export const fetchBeaverages = childId => async dispatch => {
  try {
    const response = await fetch(
      `https://api.plentys.pk/api/v1/public/product/search?title=/&categoryId=1890&minPrice=1&maxPrice=&productIds=&storeId=&brandId=&rating=&conditionId=&discountValue=&promotionId=&lookupShippingTypeId=&lookupAttributeValueIds=&freshBaazar=&exactDiscount=&cityId=1&orderBy=stockDesc&limit=60&page=1`,
    );
    const data = await response.json();
    dispatch(beaverages(data.data));
  } catch (error) {
    console.log(error`error for Beaverges`);
  }
};

export const kitchenCarousel = data => {
  return {
    type: KITCHENCAROUSEL,
    payload: data,
  };
};

export const fetchkitchenCarousel = childId => async dispatch => {
  try {
    const response = await fetch(
      `https://api.plentys.pk/api/v1/public/product/search?title=/&categoryId=40&minPrice=1&maxPrice=&productIds=&storeId=&brandId=&rating=&conditionId=&discountValue=&promotionId=&lookupShippingTypeId=&lookupAttributeValueIds=&freshBaazar=&exactDiscount=&cityId=1&orderBy=stockDesc&limit=60&page=1`,
    );
    const data = await response.json();
    dispatch(kitchenCarousel(data.data));
  } catch (error) {
    console.log(error`error for kitchenCarousel`);
  }
};

export const airpordsProducts = data => {
  return {
    type: AIRPORDS_PRODUCTS,
    payload: data,
  };
};

export const fetchairpordsProducts = childId => async dispatch => {
  try {
    const response = await fetch(
      `https://api.plentys.pk/api/v1/public/product/search?title=/&categoryId=828&minPrice=1&maxPrice=&productIds=&storeId=&brandId=&rating=&conditionId=&discountValue=&promotionId=&lookupShippingTypeId=&lookupAttributeValueIds=&freshBaazar=&exactDiscount=&cityId=1&orderBy=stockDesc&limit=60&page=1`,
    );
    const data = await response.json();
    dispatch(airpordsProducts(data.data));
  } catch (error) {
    console.log(error`error for airpordsProducts`);
  }
};

export const beautyBrandProducts = data => {
  return {
    type: BEAUTY_BRAND,
    payload: data,
  };
};

export const fetchbeautyBrandProducts = childId => async dispatch => {
  try {
    const response = await fetch(
      `https://api.plentys.pk/api/v1/public/product/search?title=/&categoryId=1&minPrice=1&maxPrice=&productIds=&storeId=&brandId=&rating=&conditionId=&discountValue=&promotionId=&lookupShippingTypeId=&lookupAttributeValueIds=&freshBaazar=&exactDiscount=&cityId=1&orderBy=stockDesc&limit=60&page=1`,
    );
    const data = await response.json();
    dispatch(beautyBrandProducts(data.data));
  } catch (error) {
    console.log(error`error for Beauty Brand Products`);
  }
};

export const dairyProducts = data => {
  return {
    type: DAIRY_PRODUCTS,
    payload: data,
  };
};

export const fetchDairyProducts = childId => async dispatch => {
  try {
    const response = await fetch(
      `https://api.plentys.pk/api/v1/public/product/search?title=/&categoryId=1892&minPrice=1&maxPrice=&productIds=&storeId=&brandId=&rating=&conditionId=&discountValue=&promotionId=&lookupShippingTypeId=&lookupAttributeValueIds=&freshBaazar=&exactDiscount=&cityId=1&orderBy=stockDesc&limit=60&page=1`,
    );
    const data = await response.json();
    dispatch(dairyProducts(data.data));
  } catch (error) {
    console.log(error`error for Dairy Products`);
  }
};
export const lipDontProducts = data => {
  return {
    type: LIP_DONT_LIE,
    payload: data,
  };
};

export const fetchlipDontProducts = childId => async dispatch => {
  try {
    const response = await fetch(
      `https://api.plentys.pk/api/v1/public/product/search?title=/&categoryId=307&minPrice=1&maxPrice=&productIds=&storeId=&brandId=&rating=&conditionId=&discountValue=&promotionId=&lookupShippingTypeId=&lookupAttributeValueIds=&freshBaazar=&exactDiscount=&cityId=1&orderBy=stockDesc&limit=60&page=1`,
    );
    const data = await response.json();
    dispatch(lipDontProducts(data.data));
  } catch (error) {
    console.log(error`error for Lips Products`);
  }
};

export const cleanProducts = data => {
  return {
    type: CLEAN,
    payload: data,
  };
};

export const fetchCleanProducts = childId => async dispatch => {
  try {
    const response = await fetch(
      `https://api.plentys.pk/api/v1/public/product/search?title=/&categoryId=778&minPrice=1&maxPrice=&productIds=&storeId=&brandId=&rating=&conditionId=&discountValue=&promotionId=&lookupShippingTypeId=&lookupAttributeValueIds=&freshBaazar=&exactDiscount=&cityId=1&orderBy=stockDesc&limit=60&page=1`,
    );
    const data = await response.json();
    dispatch(cleanProducts(data.data));
  } catch (error) {
    console.log(error`error for CLEAN Products`);
  }
};
export const badBreathProducts = data => {
  return {
    type: BAD_BREATH,
    payload: data,
  };
};

export const fetchBadBreathProducts = childId => async dispatch => {
  try {
    const response = await fetch(
      `https://api.plentys.pk/api/v1/public/product/search?title=/&categoryId=1&minPrice=1&maxPrice=&productIds=&storeId=&brandId=&rating=&conditionId=&discountValue=&promotionId=&lookupShippingTypeId=&lookupAttributeValueIds=&freshBaazar=&exactDiscount=&cityId=1&orderBy=stockDesc&limit=60&page=1`,
    );
    const data = await response.json();
    dispatch(badBreathProducts(data.data));
  } catch (error) {
    console.log(error`error for Bad Breath Products`);
  }
};
export const getShampoProducts = products => {
  return {
    type: GET_SHAMPO_PRODUCTS,
    data: products,
  };
};
export const fetchShampoProducts = childId => async dispatch => {
  try {
    const response = await fetch(
      'https://api.plentys.pk/api/v1/public/product/search?title=/&categoryId=297&minPrice=1&maxPrice=&productIds=&storeId=&brandId=&rating=&conditionId=&discountValue=&promotionId=&lookupShippingTypeId=&lookupAttributeValueIds=&freshBaazar=&exactDiscount=&cityId=1&orderBy=stockDesc&limit=60&page=1',
    );
    const data = await response.json();
    dispatch(getShampoProducts(data.data));
    //.then(dispatch(getShampoProducts(response.data)));
  } catch (error) {
    console.log('this is error for shampo products', error);
  }
};
