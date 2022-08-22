interface ProductList {
  id: number;
  pizzaName: string;
  image: string;
  price: number;
  count: number;
  totalCost: number;
  //addition: string[];
  //exclusion: string[];
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

      const findItem = state.productList.find((obj) => obj.id === action.payload.id);
      
      if(findItem) {
        findItem.count += action.payload.count;
        findItem.totalCost += action.payload.count * action.payload.price;
      } else {
        console.log('tyt')
        state.productList.push({...action.payload, count: action.payload.count});
      }

      console.log('state.productList = ', state.productList)

      let total = 0;
      state.productList.forEach((item) => {
        total += item.totalCost;
      })

      console.log('total = '+total)

      return { ...state, total };
    }
    case "DELETE_CART": {
      state.productList = state.productList.filter(
        (item) => item.id !== action.payload
      );
      return { ...state };
    }
    case "CHANGE_CART": {
      console.log(state);
      return { ...state };
    }
    default:
      return state;
  }
};
