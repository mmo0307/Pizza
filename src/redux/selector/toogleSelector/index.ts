import { RootState } from "../../../Types/type";

export const toogleMenu = (state: RootState) => state.toogle.menu;

export const toogleAccount = (state: RootState) => state.toogle.account;

export const toogleOrders = (state: RootState) => state.toogle.orders;

export const toogleShop = (state: RootState) => state.toogle.shop;