interface Props {
  price: number;
  selected: boolean;
}
interface ProductList {
  id: number;
  name: string;
  img: string;
  price: number;
  count: number;
  totalCost: number;
  description: string;
  veg: boolean;
  additions: [
    {
      cheese_board: [Props];
      meat: [Props];
      cheese_mix: [Props];
    }
  ];
}

interface StoreState {
  productList: ProductList[];
}

const initialState: StoreState = {
  productList: [],
};

interface ActionType {
  type: string;
  payload: any;
}

export const productReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "ADD_CART": {
      const findItem = state.productList.find(
        (obj) => obj.id === action.payload.id
      );

      if (findItem) {
        findItem.count += action.payload.count;
        findItem.totalCost += action.payload.count * action.payload.price;
      } else {
        state.productList.push({
          ...action.payload,
          count: action.payload.count,
        });
      }

      let total = 0;
      state.productList.forEach((item) => {
        total += item.totalCost;
      });

      return { ...state, total };
    }
    case "DELETE_CART": {
      state.productList = state.productList.filter(
        (item) => item.id !== action.payload
      );
      let total = 0;
      state.productList.forEach((item) => {
        total += item.totalCost;
      });

      return { ...state, total };
    }
    case "CHANGE_CART": {
      console.log(action.payload);
      let total = 0;
      state.productList.forEach((item) => {
        total += item.totalCost;
      });
      return { ...state, total };
    }
    default:
      return state;
  }
};
