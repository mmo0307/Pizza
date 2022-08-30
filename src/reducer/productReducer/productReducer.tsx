import { createSlice } from "@reduxjs/toolkit";
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
      console.log(state);
      console.log(action.payload);
      console.log(state);

      let total = 0;
      state.productList.forEach((item) => {
        total += item.totalCost ?? 0;
      });
      state.total = total;
    },
  },
});

export default productReducer.reducer;

export const { addToCart, deleteItem, changeItem } = productReducer.actions;
