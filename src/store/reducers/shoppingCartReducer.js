import {
  SET_CART,
  SET_ADDRESS,
  SET_PAYMENT,
} from "../actions/shoppingCartAction";

const initialState = {
  cart: [],
  payment: {},
  address: {},
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case SET_PAYMENT:
      return {
        ...state,
        payment: action.payload,
      };
    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    default:
      return state;
  }
};
