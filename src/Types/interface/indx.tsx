
export interface ActionType {
    type: string;
    payload: any;
  }

interface Props {
    title: string;
    price: number;
    selected: boolean;
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
        cheese_board: [Props];
        meat: [Props];
        cheese_mix: [Props];
      }
    ];
  }

  export interface StoreState {
    productList: ProductList[];
  }