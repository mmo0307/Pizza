import { ActionType, StoreState } from "../../Types/interface/indx";

const initialState: StoreState = {
  productList: [],
};


export const productReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "ADD_CART": {
      const findItem = state.productList.find(
        (obj) => obj.id === action.payload.id
      );

      if (findItem) {
        findItem.count += action.payload.count;
        if(findItem.totalCost){
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

      return { ...state, total };
    }
    case "DELETE_CART": {
      state.productList = state.productList.filter(
        (item) => item.id !== action.payload
      );
      let total = 0;
      state.productList.forEach((item) => {
        total += item.totalCost ?? 0;
      });

      return { ...state, total };
    }
    case "CHANGE_CART": {
      console.log(action.payload);
      let total = 0;
      state.productList.forEach((item) => {
        total += item.totalCost ?? 0;
      });
      return { ...state, total };
    }
    default:
      return state;
  }
};
