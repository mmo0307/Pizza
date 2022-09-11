import { createSlice } from "@reduxjs/toolkit";
import { ActionType, Product } from "../../../Types/interface";

const initialState = {
  productList: [],
} as Product;

const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: ActionType) => {
      state.productList = action.payload;
    },
    sortProduct: (state, action: ActionType) => {
      if(action.payload === 'low') {
        state.productList.sort((a, b) => a.price - b.price);
      } else {
        state.productList.sort((a, b) => b.price - a.price);
      }
    },
  },
});

export const { addProduct, sortProduct } = productReducer.actions;

export default productReducer.reducer;
