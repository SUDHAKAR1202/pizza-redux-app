import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  size: "small",
  crust: "thin",
  toppings: [],
  price: 0,
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setSize: (state, action) => {
      state.size = action.payload;
    },

    setCrust: (state, action) => {
      state.crust = action.payload;
    },

    toggleTopping: (state, action) => {
      const topping = action.payload;

      if (state.toppings.includes(topping)) {
        state.toppings = state.toppings.filter((t) => t !== topping);
      } else {
        state.toppings.push(topping);
      }
    },

    calculatePrice: (state) => {
      const basePrice = {
        small: 100,
        medium: 150,
        large: 200,
      };

      state.price =
        basePrice[state.size] + state.toppings.length * 20;
    },
  },
});

export const {
  setSize,
  setCrust,
  toggleTopping,
  calculatePrice,
} = pizzaSlice.actions;

export default pizzaSlice.reducer;