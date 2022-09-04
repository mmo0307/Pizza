import { createSlice, current } from "@reduxjs/toolkit";
import { ActionType, StoreState } from "../../Types/interface";

const initialState = {
  productCartList: [],
  total: 0,
} as StoreState;

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: ActionType) => {
      console.log(action)
      const findItem = state.productCartList.find(
        (obj) => obj.id === action.payload.id
      );

      if (findItem) {
        findItem.count += action.payload.count;
        if (findItem.totalCost) {
          findItem.totalCost += action.payload.count * action.payload.price;
        }
      } else {
        state.productCartList.push({
          ...action.payload,
          count: action.payload.count,
        });
      }

      let total = 0;
      state.productCartList.forEach((item) => {
        total += item.totalCost ?? 0;
      });
      state.total = total;

      console.log(current(state))
    },
    deleteItem: (state, action: ActionType) => {
      state.productCartList = state.productCartList.filter(
        (item) => item.id !== action.payload
      );
      let total: number = 0;
      state.productCartList.forEach((item) => {
        total += item.totalCost ?? 0;
      });
      state.total = total;
    },
    changeItem: (state, action: ActionType) => {
      console.log(current(state));
      console.log(action.payload);
      const { productItem, meat, cheese_mix, cheese_board } = action.payload;

      for (let i = 0; i < state.productCartList.length; i++) {
        if (current(state.productCartList[i]).id === productItem.id) {
          state.productCartList[i].additions[0].meat[0].selected = meat;
          state.productCartList[i].additions[0].cheese_mix[0].selected =
            cheese_mix;
          state.productCartList[i].additions[0].cheese_board[0].selected =
            cheese_board;
        }
      }

      console.log("----------");
      console.log(action.payload);
      console.log(current(state));

      let total = 0;
      state.productCartList.forEach((item) => {
        total += item.totalCost ?? 0;
      });
      state.total = total;
    },
  },
});

export const { addToCart, deleteItem, changeItem } = cartReducer.actions;

export default cartReducer.reducer;
