import { createSlice } from "@reduxjs/toolkit";
import { ToogleState } from "../../../Types/interface";

const initialState = {
  account: false,
  orders: false,
  shop: false,
  menu: false,
} as ToogleState;

const toogleReducer = createSlice({
  name: "toogle",
  initialState,
  reducers: {
    accountToogle: (state) => {
      state.account = !state.account;
    },
    menuToogle: (state) => {
      state.menu = !state.menu;
    },
    ordersToogle: (state) => {
      state.orders = !state.orders;
    },
    shopToogle: (state) => {
      state.shop = !state.shop;
    },
  },
});

export default toogleReducer.reducer;

export const { accountToogle, menuToogle, ordersToogle, shopToogle } =
  toogleReducer.actions;
