import { createContext, useContext, useReducer } from 'react';

export const Store = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const newItem = action.payload;
      console.log(newItem);
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems: [...state.cart.cartItems, action.payload],
        },
      };
    default:
      return state;
  }
};
const intialState = {
  cart: {
    cartItems: [],
  },
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
};

export const useStoreContext = () => {
  return useContext(Store);
};
