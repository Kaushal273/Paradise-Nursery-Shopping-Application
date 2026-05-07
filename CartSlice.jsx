// src/redux/CartSlice.jsx

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id,
      );

      state.totalQuantity++;

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        state.cartItems.push({
          ...item,
          quantity: 1,
          totalPrice: item.price,
        });
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + item.totalPrice,
        0,
      );
    },

    removeFromCart: (state, action) => {
      const id = action.payload;

      const existingItem = state.cartItems.find((item) => item.id === id);

      if (!existingItem) return;

      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        existingItem.quantity -= 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + item.totalPrice,
        0,
      );
    },

    deleteItem: (state, action) => {
      const id = action.payload;

      const existingItem = state.cartItems.find((item) => item.id === id);

      if (!existingItem) return;

      state.totalQuantity -= existingItem.quantity;

      state.cartItems = state.cartItems.filter((item) => item.id !== id);

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + item.totalPrice,
        0,
      );
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, deleteItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
