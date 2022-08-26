import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  accountToogle,
  menuToogle,
  ordersToogle,
  shopToogle,
} from "../../action";
import { Account } from "../panels/account/account";
import { OrderPanel } from "../panels/order/orderPanel";
import { ShoppingCart } from "../panels/shopping-cart/shoppingCart";

interface Data {
  id: number;
  pizzaName: string;
  image: string;
  price: number;
  count: number;
}

export function Header() {
  const dispatch = useDispatch();
  const flag = useSelector((state: any) => state.toogle.menu);
  const item = useSelector((state:any) => state.product)
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    setData(item.productList);
  }, [item]);
  
  return (
    <>
      <header className="header">
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
}
