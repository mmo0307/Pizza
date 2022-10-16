export interface ActionType {
  type: string;
  payload: any;
}
export interface ProductCartList {
  id: number;
  name: string;
  img: string;
  price: number;
  count: number;
  totalCost?: number;
  description: string;
  veg: boolean;
  spicy: boolean;
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

export interface Product {
  productList: ProductCartList[];
}

export interface StoreState {
  productCartList: ProductCartList[];
  total: number;
}

export interface ToggleState {
  account: boolean;
  orders: boolean;
  shop: boolean;
  menu: boolean;
}

export interface UserData {
  id: number,
  email: '',
  name: '',
  phone: number,
  role_id: number
}

export interface AddressData {
  id_address: number,
  address_name: ''
}

export interface UserOrdersData {
  order_id: number,
  client_id: number,
  client_name: string,
  products: ProductCartList[],
  price: number,
  address_id: number,
  order_date: string,
  address_name: string,
}
