import { ADD_TO_CART , REMOVE_FROM_CART } from "./Action";
import { addToCart , removeFromCart } from "./Action";

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      const index = state.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        const newState = [...state];
        newState.splice(index, 1);
        return newState;
      }
      return state;
    default:
      return state;
  }
};

export default cartReducer;