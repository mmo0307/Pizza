import { ProductList } from "../Types/interface";

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
