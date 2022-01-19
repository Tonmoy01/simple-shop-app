import {
  PRODUCT_GET_REQUEST,
  PRODUCT_GET_SUCCESS,
  PRODUCT_GET_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  FILTER_PRODUCTS,
} from '../constants/productConstants';

const initialState = {
  products: [],
  product: {},
  loading: true,
  error: null,
  filtered: null,
};

export const productGetReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_GET_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_GET_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_GET_FAIL:
      return { loading: false, error: action.payload };
    case FILTER_PRODUCTS:
      return {
        ...state,
        filtered: state.products.filter((prod) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return prod.title.match(regex);
        }),
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
    default:
      return state;
  }
};
