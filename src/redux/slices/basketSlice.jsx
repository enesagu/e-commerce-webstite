import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

// Retrieve basket from localStorage
const getBasketFromStorage = () => {
  const basket = localStorage.getItem("basket");
  return basket ? JSON.parse(basket) : [];
};

// Write basket to localStorage
const writeFromBasketToStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};




const initialState = {
  products: getBasketFromStorage(),
  drawer: false,
  totalAmount: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const findProduct = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (findProduct) {
        // If product exists, update the quantity
        findProduct.count += action.payload.count;
      } else {
        // If new product, add to the basket
        state.products.push(action.payload);
      }

      // Update localStorage
      writeFromBasketToStorage(state.products);
    },

    removeToBasket: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      writeFromBasketToStorage(state.products); // Update local storage
    },

    setDrawer: (state, action) => {
      state.drawer = !state.drawer;
    },

    calculateBasket: (state, action) => {
      state.totalAmount = state.products.reduce((total, product) => total + product.price * product.count, 0);
    },
  },
});

export const { addToBasket, setDrawer, calculateBasket, removeToBasket } = basketSlice.actions;
export default basketSlice.reducer;
