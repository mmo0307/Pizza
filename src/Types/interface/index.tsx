export interface ActionType {
  type: string;
  payload: any;
}
export interface ProductList {
  id: number;
  name: string;
  img: string;
  price: number;
  count: number;
  totalCost?: number;
  description: string;
  veg: boolean;
  additions: [
    {
      cheese_board: [
        {
          title: string;
          price: number;
          selected: boolean;
        }
      ];
      meat: [
        {
          title: string;
          price: number;
          selected: boolean;
        }
      ];
      cheese_mix: [
        {
          title: string;
          price: number;
          selected: boolean;
        }
      ];
    }
  ];
}

export interface StoreState {
  productList: ProductList[];
}

export interface ToogleState {
  account: boolean;
  orders: boolean;
  shop: boolean;
  menu: boolean;
}
