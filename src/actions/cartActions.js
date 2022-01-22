import {
  CART_ADD_ITEM,
  CART_DELETE_ITEM,
  REMOVE_CART_ITEM,
} from '../constants/cartConstants';

export const addToCart = (product) => async (dispatch, getState) => {
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

export const deleteFromCartItem = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });

    localStorage.removeItem(
      'cartItems',
      JSON.stringify(getState().cartReducer)
    );
  } catch (error) {
    console.log(error);
  }
};
