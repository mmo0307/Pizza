import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { menuToggle, ordersToggle, shopToggle } from "../../../../redux/reducer/toggleReducer/toggleReducer";
import { productCartList } from "../../../../redux/selector/cartSelector";
import { toggleMenu } from "../../../../redux/selector/toggleSelector";
import { ProductCartList, UserData } from "../../../../Types/interface";
import { AppDispatch } from "../../../../Types/type";
import { OrderPanel } from "../panels/order/orderPanel";
import { ShoppingCart } from "../panels/shopping-cart/shoppingCart";

export const Header = () => {
  let location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const flag = useSelector(toggleMenu);
  const item = useSelector(productCartList);
  const [data, setData] = useState<ProductCartList[]>([]);
  const localToken = localStorage.getItem('token');
  const userToken = localStorage.getItem('user_data');
  const [token, setToken] = useState<string>('');
  const [userData, setUserData] = useState<UserData>({
    id: 0,
    email: '',
    name: '',
    phone: 123456789,
    role_id: 2
  });

  const deleteToken = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_data');
    setToken('');
  }

  const header_class = location.pathname === '/admin' ? 'header-none' : 'header';

  useEffect(() => {
    if(localToken) {
      setToken(localToken);
    }
    if(userToken){
      setUserData(JSON.parse(userToken));
    }
  }, [localToken]);

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
            <a href={"#home"}>Главная</a>
            <a href={"#about"}>О нас</a>
            <a href={"#menu"}>Меню</a>
            <a href={"#contact"}>Контакты</a>
          </nav>

          <div className="icons">
            <div
              id="menu-btn"
              className="fas fa-bars"
              onClick={() => dispatch(menuToggle())}
            ></div>
            {
              token.length > 0 ?
                  <>
                    <div className="fas fa-door-open" onClick={() => deleteToken()}></div>
                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                    {userData.role_id === 1 ? <a href={`${process.env.REACT_APP_ADMIN_DOMAIN}/orders`} className="fas fa-lock"></a> : null}
                    <div
                        id="order-btn"
                        className="fas fa-box"
                        onClick={() => dispatch(ordersToggle())}
                    ></div>
                  </>
                  :
                  <Link
                    id="user-btn"
                    className="fas fa-user"
                    to="/user/login"
                  ></Link>
            }
            <div
              id="cart-btn"
              className="fas fa-shopping-cart"
              onClick={() => dispatch(shopToggle())}
            >
              <span>({data.length})</span>
            </div>
          </div>
        </section>
      </header>

      <OrderPanel />
      <ShoppingCart />
    </>
  );
};
