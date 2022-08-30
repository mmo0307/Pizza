import { createReducer } from "@reduxjs/toolkit";
import { ActionType, StoreState } from "../../Types/interface";
import { addToCart, deleteItem, changeItem } from "../../action";

const initialState = {
  productList: [],
  total: 0,
} as StoreState;

export const productReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, (state, action:ActionType) => {
      const findItem = state.productList.find(
        (obj) => obj.id === action.payload.id
      );

      if (findItem) {
        findItem.count += action.payload.count;
        if (findItem.totalCost) {
          findItem.totalCost += action.payload.count * action.payload.price;
        }
      } else {
        state.productList.push({
          ...action.payload,
          count: action.payload.count,
        });
      }

      let total = 0;
      state.productList.forEach((item) => {
        total += item.totalCost ?? 0;
      });
      state.total = total;
    })
    .addCase(deleteItem, (state, action:ActionType) => {
      state.productList = state.productList.filter(
        (item) => item.id !== action.payload
      );
      let total: number = 0;
      state.productList.forEach((item) => {
        total += item.totalCost ?? 0;
      });
      state.total = total;
    })
    .addCase(changeItem, (state, action:ActionType) => {
      console.log(state);
      console.log(action.payload);
      console.log(state);

      let total = 0;
      state.productList.forEach((item) => {
        total += item.totalCost ?? 0;
      });
      state.total = total;
    });
});