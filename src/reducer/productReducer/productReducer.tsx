import { createSlice, current } from "@reduxjs/toolkit";
import { ActionType, StoreState } from "../../Types/interface";

const initialState = {
  productList: [],
  total: 0,
} as StoreState;

const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action: ActionType) => {
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
    },
    deleteItem: (state, action: ActionType) => {
      state.productList = state.productList.filter(
        (item) => item.id !== action.payload
      );
      let total: number = 0;
      state.productList.forEach((item) => {
        total += item.totalCost ?? 0;
      });
      state.total = total;
    },
    changeItem: (state, action: ActionType) => {
      console.log(current(state));
      console.log(action.payload);
      const { productItem, meat, cheese_mix, cheese_board } = action.payload;

      for (let i = 0; i < state.productList.length; i++) {
        if (current(state.productList[i]).id === productItem.id) {
          state.productList[i].additions[0].meat[0].selected = meat;
          state.productList[i].additions[0].cheese_mix[0].selected = cheese_mix;
          state.productList[i].additions[0].cheese_board[0].selected = cheese_board;
        }
      }

      console.log("----------");
      console.log(action.payload);
      console.log(current(state));

      let total = 0;
      state.productList.forEach((item) => {
        total += item.totalCost ?? 0;
      });
      state.total = total;
    },
  },
});

export const { addToCart, deleteItem, changeItem } = productReducer.actions;

export default productReducer.reducer;
