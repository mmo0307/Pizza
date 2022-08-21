interface StoreState {
  account: boolean;
  orders: boolean;
  shop: boolean;
  menu: boolean;
}

interface ActionType {
  type: string;
}

const initialState: StoreState = {
  account: false,
  orders: false,
  shop: false,
  menu: false,
};

export const toogleReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "accountToogle": {
      state.account = !state.account;
      console.log(state);
      return { ...state };
    }
    case "ordersToogle": {
      state.orders = !state.orders;
      console.log(state);
      return { ...state };
    }
    case "shopToogle": {
      state.shop = !state.shop;
      console.log(state);
      return { ...state };
    }
    case "menuToogle": {
      state.menu = !state.menu;
      console.log(state);
      return { ...state };
    }
    default:
      return state;
  }
};
