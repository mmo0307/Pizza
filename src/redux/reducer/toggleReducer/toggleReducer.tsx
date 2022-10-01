import { createSlice } from "@reduxjs/toolkit";
import { ToggleState } from "../../../Types/interface";

const initialState = {
  orders: false,
  shop: false,
  menu: false,
} as ToggleState;

const toggleReducer = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    menuToggle: (state) => {
      state.menu = !state.menu;
    },
    ordersToggle: (state) => {
      state.orders = !state.orders;
    },
    shopToggle: (state) => {
      state.shop = !state.shop;
    },
  },
});

export default toggleReducer.reducer;

export const { menuToggle, ordersToggle, shopToggle } =
  toggleReducer.actions;
