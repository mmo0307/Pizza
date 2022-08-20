import React from "react";

import Home1 from "../../images/home/home-img-1.png";
import Home2 from "../../images/home/home-img-2.png";
import Home3 from "../../images/home/home-img-3.png";

import About1 from "../../images/about/about-1.svg";
import About2 from "../../images/about/about-2.svg";
import About3 from "../../images/about/about-3.svg";

import Pizza1 from "../../images/pizza/pizza-1.jpg";
import Pizza7 from "../../images/pizza/pizza-7.jpg";

import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { Menu } from "../menu/menu";
import { Order } from "../order/order";

export function Main() {
  return (
    <>
      <Header />

      <div className="user-account">
        <section>
          <div id="close-account">
            <span>close</span>
          </div>

          <div className="user">
            <p>
              <span>you are not logged in now!</span>
            </p>
          </div>

          <div className="display-orders">
            <p>
              pizza-1 <span>( $3/- x 2 )</span>
            </p>
            <p>
              pizza 03 <span>( $2/- x 1 )</span>
            </p>
            <p>
              pizza 06 <span>( $4/- x 4 )</span>
            </p>
            <p>
              pizza 07 <span>( $2/- x 1 )</span>
            </p>
          </div>

          <div className="flex">
            <form action="" method="post">
              <h3>login now</h3>
              <input
                type="email"
                name="email"
                required
                className="box"
                placeholder="enter your email"
                maxLength={50}
              />
              <input
                type="password"
                name="pass"
                required
                className="box"
                placeholder="enter your password"
                maxLength={20}
              />
              <input
                type="submit"
                value="login now"
                name="login"
                className="btn"
              />
            </form>

            <form action="" method="post">
              <h3>register now</h3>
              <input
                type="text"
                name="name"
                required
                className="box"
                placeholder="enter your name"
                maxLength={20}
              />
              <input
                type="email"
                name="email"
                required
                className="box"
                placeholder="enter your email"
                maxLength={50}
              />
              <input
                type="password"
                name="pass"
                required
                className="box"
                placeholder="enter your password"
                maxLength={20}
              />
              <input
                type="password"
                name="cpass"
                required
                className="box"
                placeholder="confirm your password"
                maxLength={20}
              />
              <input
                type="submit"
                value="register now"
                name="register"
                className="btn"
              />
            </form>
          </div>
        </section>
      </div>

      <div className="my-orders">
        <section>
          <div id="close-orders">
            <span>close</span>
          </div>

          <h3 className="title"> my orders </h3>

          <div className="box">
            <p>
              placed on : <span>06/04/2022</span>{" "}
            </p>
            <p>
              name : <span>shaikh anas</span>{" "}
            </p>
            <p>
              number : <span>1234567890</span>
            </p>
            <p>
              address :{" "}
              <span>
                flat no. 123, bulding no. 2, jogeshwari, mumbai, india - 400104
              </span>
            </p>
            <p>
              payment method : <span>cash on delivery</span>
            </p>
            <p>
              your orders :{" "}
              <span>
                pizza 01 $3/- x 2, pizza 03 $2/- x 1, pizza 06 $4/- x 4, pizza
                07, $2/- x 1
              </span>
            </p>
            <p>
              total price : <span>$11/-</span>
            </p>
            <p>
              payment status :{" "}
              <span style={{ color: "var(--red)" }}>pending</span>{" "}
            </p>
          </div>

          <div className="box">
            <p>
              placed on : <span>06/04/2022</span>{" "}
            </p>
            <p>
              name : <span>shaikh anas</span>{" "}
            </p>
            <p>
              number : <span>1234567890</span>
            </p>
            <p>
              address :{" "}
              <span>
                flat no. 123, bulding no. 2, jogeshwari, mumbai, india - 400104
              </span>
            </p>
            <p>
              payment method : <span>cash on delivery</span>
            </p>
            <p>
              your orders :{" "}
              <span>
                pizza 01 $3/- x 2, pizza 03 $2/- x 1, pizza 06 $4/- x 4, pizza
                07, $2/- x 1
              </span>
            </p>
            <p>
              total price : <span>$11/-</span>
            </p>
            <p>
              payment status :{" "}
              <span style={{ color: "var(--red)" }}>pending</span>{" "}
            </p>
          </div>
        </section>
      </div>

      <div className="shopping-cart">
        <section>
          <div id="close-cart">
            <span>close</span>
          </div>

          <div className="box">
            <a href="#" className="fas fa-times"></a>
            <img src={Pizza1} alt="" />
            <div className="content">
              <p>
                pizza-1 <span>( $3/- x 2 )</span>
              </p>
              <form action="" method="post">
                <input
                  type="number"
                  className="qty"
                  name="qty"
                  min="1"
                  value="2"
                  max="100"
                />
                <button
                  type="submit"
                  className="fas fa-edit"
                  name="update_qty"
                ></button>
              </form>
            </div>
          </div>

          <div className="box">
            <a href="#" className="fas fa-times"></a>
            <img src="./images/pizza-3.jpg" alt="" />
            <div className="content">
              <p>
                pizza-3 <span>( $2/- x 1 )</span>
              </p>
              <form action="" method="post">
                <input
                  type="number"
                  className="qty"
                  name="qty"
                  min="1"
                  value="1"
                  max="100"
                />
                <button
                  type="submit"
                  className="fas fa-edit"
                  name="update_qty"
                ></button>
              </form>
            </div>
          </div>

          <div className="box">
            <a href="#" className="fas fa-times"></a>
            <img src="./images/pizza-6.jpg" alt="" />
            <div className="content">
              <p>
                pizza-6 <span>( $4/- x 2 )</span>
              </p>
              <form action="" method="post">
                <input
                  type="number"
                  className="qty"
                  name="qty"
                  min="1"
                  value="2"
                  max="100"
                />
                <button
                  type="submit"
                  className="fas fa-edit"
                  name="update_qty"
                ></button>
              </form>
            </div>
          </div>

          <div className="box">
            <a href="#" className="fas fa-times"></a>
            <img src={Pizza7} alt="" />
            <div className="content">
              <p>
                pizza-7 <span>( $2/- x 1 )</span>
              </p>
              <form action="" method="post">
                <input
                  type="number"
                  className="qty"
                  name="qty"
                  min="1"
                  value="1"
                  max="100"
                />
                <button
                  type="submit"
                  className="fas fa-edit"
                  name="update_qty"
                ></button>
              </form>
            </div>
          </div>

          <a href="#order" className="btn">
            order now
          </a>
        </section>
      </div>

      <div className="home-bg">
        <section className="home" id="home">
          <div className="slide-container">
            <div className="slide active">
              <div className="image">
                <img src={Home1} alt="" />
              </div>
              <div className="content">
                <h3>homemade Pepperoni Pizza</h3>
                <div
                  className="fas fa-angle-left"
                  onClick={() => console.log()}
                ></div>
                <div
                  className="fas fa-angle-right"
                  onClick={() => console.log()}
                ></div>
              </div>
            </div>

            <div className="slide">
              <div className="image">
                <img src={Home2} alt="" />
              </div>
              <div className="content">
                <h3>Pizza With Mushrooms</h3>
                <div
                  className="fas fa-angle-left"
                  onClick={() => console.log()}
                ></div>
                <div
                  className="fas fa-angle-right"
                  onClick={() => console.log()}
                ></div>
              </div>
            </div>

            <div className="slide">
              <div className="image">
                <img src={Home3} alt="" />
              </div>
              <div className="content">
                <h3>Mascarpone And Mushrooms</h3>
                <div
                  className="fas fa-angle-left"
                  onClick={() => console.log()}
                ></div>
                <div
                  className="fas fa-angle-right"
                  onClick={() => console.log()}
                ></div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="about" id="about">
        <h1 className="heading">about us</h1>

        <div className="box-container">
          <div className="box">
            <img src={About1} alt="" />
            <h3>made with love</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
              quae amet beatae magni numquam facere sit. Tempora vel laboriosam
              repudiandae!
            </p>
            <a href="#menu" className="btn">
              our menu
            </a>
          </div>

          <div className="box">
            <img src={About2} alt="" />
            <h3>30 minutes delivery</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
              quae amet beatae magni numquam facere sit. Tempora vel laboriosam
              repudiandae!
            </p>
            <a href="#menu" className="btn">
              our menu
            </a>
          </div>

          <div className="box">
            <img src={About3} alt="" />
            <h3>share with freinds</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
              quae amet beatae magni numquam facere sit. Tempora vel laboriosam
              repudiandae!
            </p>
            <a href="#menu" className="btn">
              our menu
            </a>
          </div>
        </div>
      </section>

      <Menu />

      <Order />

      <Footer />
    </>
  );
}
