import {
  PRODUCTS_GET_REQUEST,
  PRODUCTS_GET_SUCCESS,
  PRODUCTS_GET_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  FILTER_PRODUCTS,
  CLEAR_FILTER,
  PRODUCT_DETAILS_RESET,
} from '../constants/productConstants';

const initialState = {
  products: [],
  product: {},
  loading: true,
  error: null,
  filtered: null,
};

export const productsGetReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_GET_REQUEST:
      return { loading: true, products: [] };
    case PRODUCTS_GET_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCTS_GET_FAIL:
      return { loading: false, error: action.payload };
    case FILTER_PRODUCTS:
      return {
        ...state,
        filtered: state.products.filter((prod) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return prod.title.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: action.payload,
      };
    default:
      return state;
  }
};

export const productDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_DETAILS_RESET:
      return {};
    default:
      return state;
  }
};
