import { createSlice, current } from "@reduxjs/toolkit";
import { ActionType, StoreState } from "../../../Types/interface";

const initialState = {
  ...(JSON.parse(
    localStorage.getItem("product") ||
      JSON.stringify({ productCartList: [], total: 0 })
  ) as StoreState),
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: ActionType) => {
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

      localStorage.setItem("product", JSON.stringify(state));
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

      localStorage.setItem("product", JSON.stringify(state));
    },
    changeItem: (state, action: ActionType) => {
      const { productItem, meat, cheese_mix, cheese_board, count } =
        action.payload;

      state.productCartList.forEach((item) => {
        if (current(item).id === productItem.id) {
          item.additions[0].meat[0].selected = meat;
          item.additions[0].cheese_mix[0].selected = cheese_mix;
          item.additions[0].cheese_board[0].selected = cheese_board;

          item.count = Number(count);
          item.totalCost = item.price * Number(count);

          if (meat) {
            item.totalCost += item.additions[0].meat[0].price * Number(count);
          }

          if (cheese_mix) {
            item.totalCost += item.additions[0].cheese_mix[0].price * Number(count);
          }

          if (cheese_board) {
            item.totalCost += item.additions[0].cheese_board[0].price * Number(count);
          }
        }
      });

      let total = 0;
      state.productCartList.forEach((item) => {
        total += item.totalCost ?? 0;
      });
      state.total = total;
      localStorage.setItem("product", JSON.stringify(state));
    },
    clearItem: (state) =>  {
      state.productCartList = [];
      state.total = 0;
    }
  },
});

export const { addToCart, deleteItem, changeItem, clearItem } = cartReducer.actions;

export default cartReducer.reducer;
