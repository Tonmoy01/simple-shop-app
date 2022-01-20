import { CART_ADD_ITEM, CART_DELETE_ITEM } from '../constants/cartConstants';

export const addToCart = (product) => async (dispatch, getState) => {
  console.log(product);
  try {
    dispatch({ type: CART_ADD_ITEM, payload: product });

    localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer));
  } catch (error) {
    console.log(error);
  }
};

export const deleteToCart = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type: CART_DELETE_ITEM, payload: product });

    localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer));
  } catch (error) {
    console.log(error);
  }
};
