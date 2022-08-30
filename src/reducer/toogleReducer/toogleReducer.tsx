import { createReducer } from "@reduxjs/toolkit";
import {
  accountToogle,
  menuToogle,
  ordersToogle,
  shopToogle,
} from "../../action/toogle/toogle";
import { ToogleState } from "../../Types/interface";

const initialState = {
  account: false,
  orders: false,
  shop: false,
  menu: false,
} as ToogleState;

export const toogleReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(accountToogle, (state, action) => {
      state.account = !state.account;
    })
    .addCase(menuToogle, (state, action) => {
      state.menu = !state.menu;
    })
    .addCase(ordersToogle, (state, action) => {
      state.orders = !state.orders;
    })
    .addCase(shopToogle, (state, action) => {
      state.shop = !state.shop;
    });
});
