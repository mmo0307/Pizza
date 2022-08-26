export const accountToogle = () => ({
  type: "accountToogle",
});

export const ordersToogle = () => ({
  type: "ordersToogle",
});

export const shopToogle = () => ({
  type: "shopToogle",
});

export const menuToogle = () => ({
  type: "menuToogle",
});
interface Props {
  title: string;
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

export const addToCart = (item: ProductList) => ({
  type: "ADD_CART",
  payload: item,
});

export const deleteItem = (id: number) => ({
  type: "DELETE_CART",
  payload: id,
});

export const changeItem = (item: ProductList) => ({
  type: "CHANGE_CART",
  payload: item,
});
