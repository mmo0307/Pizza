import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { accountToogle, menuToogle, ordersToogle, shopToogle } from "../../action";
import { Account } from "../panels/account/account";
import { OrderPanel } from "../panels/order/orderPanel";
import { ShoppingCart } from "../panels/shopping-cart/shoppingCart";

export function Header() {
  const dispatch =  useDispatch();
  const flag = useSelector((state:any) => state.toogle.menu);
  return (
    <>
      <header className="header">
        <section className="flex">
          <a href="/" className="logo">
            Pizza.
          </a>

          <nav className={`navbar ${flag ? 'active': ''}`}>
            <a href="#home">home</a>
            <a href="#about">about</a>
            <a href="#menu">menu</a>
            <a href="#contact">contact</a>
          </nav>

          <div className="icons">
            <div id="menu-btn" className="fas fa-bars" onClick={() => dispatch(menuToogle())}></div>
            <div id="user-btn" className="fas fa-user" onClick={() => dispatch(accountToogle())}></div>
            <div id="order-btn" className="fas fa-box" onClick={() => dispatch(ordersToogle())}></div>
            <div id="cart-btn" className="fas fa-shopping-cart" onClick={() => dispatch(shopToogle())}>
              <span>(4)</span>
            </div>
          </div>
        </section>
      </header>

      <Account />
      <OrderPanel />
      <ShoppingCart />
    </>
  );
}
