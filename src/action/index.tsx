import { ProductList } from "../Types/interface";
import { createAction } from "@reduxjs/toolkit";

export const addToCart = createAction("ADD_CART", (item: ProductList) => ({
  payload: item,
}));

export const deleteItem = createAction("DELETE_CART", (id: number) => ({
  payload: id,
}));

export const changeItem = createAction("CHANGE_CART", (item: ProductList) => ({
  payload: item,
}));
