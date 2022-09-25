import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useLocation} from "react-router-dom";
import { accountToogle, menuToogle, ordersToogle, shopToogle } from "../../../redux/reducer/toogleReducer/toogleReducer";
import { productCartList } from "../../../redux/selector/cartSelector";
import { toogleMenu } from "../../../redux/selector/toogleSelector";
import { ProductCartList } from "../../../Types/interface";
import { AppDispatch } from "../../../Types/type";
import { Account } from "../panels/account/account";
import { OrderPanel } from "../panels/order/orderPanel";
import { ShoppingCart } from "../panels/shopping-cart/shoppingCart";

export const Header = () => {
  let location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const flag = useSelector(toogleMenu);
  const item = useSelector(productCartList);
  const [data, setData] = useState<ProductCartList[]>([]);

  const header_class = location.pathname === '/admin' ? 'header-none' : 'header'

  useEffect(() => {
    setData(item.productCartList);
  }, [item]);

  return (
    <>
      <header className={header_class}>
        <section className="flex">
          <Link to="/" className="logo">
            Pizza.
          </Link>

          <nav className={`navbar ${flag ? "active" : ""}`}>
            <a href="#home">home</a>
            <a href="#about">about</a>
            <a href="#menu">menu</a>
            <a href="#contact">contact</a>
          </nav>

          <div className="icons">
            <div
              id="menu-btn"
              className="fas fa-bars"
              onClick={() => dispatch(menuToogle())}
            ></div>
            <div
              id="user-btn"
              className="fas fa-user"
              onClick={() => dispatch(accountToogle())}
            ></div>
            <div
              id="order-btn"
              className="fas fa-box"
              onClick={() => dispatch(ordersToogle())}
            ></div>
            <div
              id="cart-btn"
              className="fas fa-shopping-cart"
              onClick={() => dispatch(shopToogle())}
            >
              <span>({data.length})</span>
            </div>
          </div>
        </section>
      </header>

      <Account />
      <OrderPanel />
      <ShoppingCart />
    </>
  );
};
