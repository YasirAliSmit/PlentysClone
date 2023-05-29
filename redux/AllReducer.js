import {
  BAD_BREATH,
  CLEAN,
  FETCH_NEW_RAMDAN_DEALS,
  HOME_LAYOUT,
  KITCHENCAROUSEL,
  LIP_DONT_LIE,
  SHAN_PRODUCTS,
  carouselImages,
} from './AllAction';
import {GET_ALL_ID} from './AllAction';
import {FETCH_NEW_ARRIVALS_DEALS} from './AllAction';
import {TOP_NEW_TRANDING_PRODUCTS_ACTION} from './AllAction';
import {FETCH_NEW_BANNERS} from './AllAction';
import {GET_ALL_CATEGORY} from './AllAction';
import {ADD_TO_CART} from './AllAction';
import {CLEAR_CART_DATA} from './AllAction';
import {DELETE_FROM_CART} from './AllAction';
import {GET_PERTICULAR_PRODUCTS} from './AllAction';
import {CAROUSELIMAGES} from './AllAction';
import {FLASH_DEALS_PRODUCTS} from './AllAction';
import {FESTIVE_EID} from './AllAction';
import {MAKE_UP} from './AllAction';
import {BEAVERAGES} from './AllAction';
import {AIRPORDS_PRODUCTS} from './AllAction';
import {BEAUTY_BRAND} from './AllAction';
import {DAIRY_PRODUCTS} from './AllAction';
const initialState = {
  banner: [],
  ramdanDeals: [],
  newArrivals: [],
  carouselImages: [],
  topBrand: [],
  topTranding: [],
  allCategorys: [],
  cartItems: [],
  categories: [],
  homeLayout: [],
  flashDeals: [],
  flashDealsCarousel: [],
  festiveEidCarousel: [],
  makeupCarousel: [],
  shanCarousel: [],
  beveragesCarousel: [], //done
  kitchenCarousel: [], //done
  beautyBrandsCarousel: [], //done
  airpodsCarousel: [], //done
  dairyCarousel: [], //done
  lipsMakeupCarousel: [], //done
  cleaningCarousel: [],
  productsCarousel: [],
  allIds: [],
};
export const homeReducer = (state = initialState, action) => {
  console.log(action.type);
  // console.log('this console for a homeLayout', initialState.homeLayout);

  switch (action.type) {
    case FETCH_NEW_BANNERS:
      return {
        ...state,
        banner: action.payload,
      };
    case HOME_LAYOUT:
      return {
        ...state,
        homeLayout: action.payload,
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
    case DELETE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          item => item.productId !== action.payload,
        ),
      };
    case GET_PERTICULAR_PRODUCTS:
      return {
        ...state,
        categories: action.payload,
      };
    case CLEAR_CART_DATA:
      return {
        ...state,
        cartItems: [],
      };
    case CAROUSELIMAGES:
      return {
        ...state,
        carouselImages: action.payload,
      };
    case FLASH_DEALS_PRODUCTS:
      return {
        ...state,
        flashDealsCarousel: action.payload,
      };
    case FESTIVE_EID:
      return {
        ...state,
        festiveEidCarousel: action.payload,
      };
    case MAKE_UP:
      return {
        ...state,
        makeupCarousel: action.payload,
      };
    case SHAN_PRODUCTS:
      return {
        ...state,
        shanCarousel: action.payload,
      };
    case BEAVERAGES:
      return {
        ...state,
        beveragesCarousel: action.payload,
      };
    case KITCHENCAROUSEL:
      return {
        ...state,
        kitchenCarousel: action.payload,
      };
    case AIRPORDS_PRODUCTS:
      return {
        ...state,
        airpodsCarousel: action.payload,
      };
    case BEAUTY_BRAND:
      return {
        ...state,
        beautyBrandsCarousel: action.payload,
      };
    case DAIRY_PRODUCTS:
      return {
        ...state,
        dairyCarousel: action.payload,
      };
    case LIP_DONT_LIE:
      return {
        ...state,
        lipsMakeupCarousel: action.payload,
      };
    case CLEAN:
      return {
        ...state,
        cleaningCarousel: action.payload,
      };
    case BAD_BREATH:
      return {
        ...state,
        productsCarousel: action.payload,
      };
    case GET_ALL_ID:
      return {
        ...state,
        allIds: action.payload,
      };
    default:
      return state;
  }
};
