import {
  PRODUCT_GET_REQUEST,
  PRODUCT_GET_SUCCESS,
  PRODUCT_GET_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from '../constants/productConstants';

const initialState = {
  products: [],
  product: {},
  loading: true,
  error: null,
  filterProduct: '',
};

export const productGetReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_GET_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_GET_SUCCESS:
      return { loading: false, products: action.payload };
    case 'FILTER_BY_SEARCH':
      return {
        ...state,
        filterProduct: action.payload,
      };
    case PRODUCT_GET_FAIL:
      return { loading: false, error: action.payload };
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
