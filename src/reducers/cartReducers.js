import { CART_ADD_ITEM, CART_DELETE_ITEM } from '../constants/cartConstants';

const cart = [];

export const cartReducer = (state = cart, action) => {
  const product = action.payload;

  switch (action.type) {
    case CART_ADD_ITEM:
      const exist = state.find((x) => x.id === product.id);

      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

    case CART_DELETE_ITEM:
      const del = state.find((x) => x.id === product.id);

      if (del.qty === 1) {
        return state.filter((x) => x.id !== del.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }

    default:
      return state;
  }
};
