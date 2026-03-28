import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (_, index) => index !== action.payload
      );
    },

    calculateTotal: (state) => {
      state.total = state.items.reduce(
        (sum, item) => sum + item.price,
        0
      );
    },

    clearCart: () => initialState,
  },
});

export const {
  addToCart,
  removeFromCart,
  calculateTotal,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;