// src/redux/CartSlice.jsx

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const calculateTotals = (state) => {
  state.totalQuantity = state.cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  state.totalAmount = state.cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0,
  );
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItem: (state, action) => {
      const item = action.payload;

      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id,
      );

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

      calculateTotals(state);
    },

    removeItem: (state, action) => {
      const id = action.payload;

      const existingItem = state.cartItems.find((item) => item.id === id);

      if (!existingItem) return;

      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        existingItem.quantity -= 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      }

      calculateTotals(state);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const existingItem = state.cartItems.find((item) => item.id === id);

      if (!existingItem) return;

      existingItem.quantity = quantity;
      existingItem.totalPrice = existingItem.quantity * existingItem.price;

      calculateTotals(state);
    },

    deleteItem: (state, action) => {
      const id = action.payload;

      state.cartItems = state.cartItems.filter((item) => item.id !== id);

      calculateTotals(state);
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const { addItem, removeItem, updateQuantity, deleteItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
