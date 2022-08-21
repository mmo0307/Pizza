
interface ProductList {
    id: number,
    pizzaName: string,
    image: string,
    price: number,
    count: number,
    totalCost: number
}

interface StoreState {
  productList: ProductList[],
}

const initialState: StoreState = {
    productList: [],
};

interface ActionType {
    type: string,
    payload: any
  }

export const productReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
      case "ADD": {
        console.log(state);
        return { ...state };
      }
      case "DELETE": {
        console.log(state);
        return { ...state };
      }
      case "CHANGE": {
        console.log(state);
        return { ...state };
      }
      default:
        return state;
    }
  };
