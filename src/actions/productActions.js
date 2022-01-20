import axios from 'axios';
import {
  PRODUCT_GET_REQUEST,
  PRODUCT_GET_SUCCESS,
  PRODUCT_GET_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  FILTER_PRODUCTS,
  CLEAR_FILTER,
} from '../constants/productConstants';

export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_GET_REQUEST });

    const { data } = await axios.get(`https://fakestoreapi.com/products`);

    dispatch({
      type: PRODUCT_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: PRODUCT_GET_FAIL, payload: error.message });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
  }
};

export const filterProducts = (text) => (dispatch) => {
  dispatch({ type: FILTER_PRODUCTS, payload: text });
};

export const clearFilter = () => (dispatch) => {
  dispatch({ type: CLEAR_FILTER });
};
