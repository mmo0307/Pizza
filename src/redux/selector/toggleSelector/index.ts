import { RootState } from "../../../Types/type";

export const toggleMenu = (state: RootState) => state.toggle.menu;

export const toggleOrders = (state: RootState) => state.toggle.orders;

export const toggleShop = (state: RootState) => state.toggle.shop;