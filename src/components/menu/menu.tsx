import React from "react";
import { Link } from "react-router-dom";

import Pizza1 from "../../images/pizza/pizza-1.png";
import Pizza2 from "../../images/pizza/pizza-2.png";
import Pizza3 from "../../images/pizza/pizza-3.png";
import Pizza4 from "../../images/pizza/pizza-4.png";
import Pizza5 from "../../images/pizza/pizza-5.png";
import Pizza6 from "../../images/pizza/pizza-6.png";
import Pizza7 from "../../images/pizza/pizza-7.png";
import Pizza8 from "../../images/pizza/pizza-8.png";
import Pizza9 from "../../images/pizza/pizza-9.png";

export const Menu = () => {
  return (
    <section id="menu" className="menu">
      <h1 className="heading">our menu</h1>

      <div className="box-container">
        <div className="box">
          <div className="price">
            $<span>2</span>/-
          </div>
          <img src={Pizza1} alt="" />
          <div className="name">pizza 1</div>
          <form action="" method="post">
            <input
              type="number"
              min="1"
              max="100"
              value="1"
              className="qty"
              name="qty"
            />
            <input
              type="submit"
              value="add to cart"
              name="add_to_cart"
              className="btn"
            />
          </form>
        </div>

        <div className="box">
          <div className="price">
            $<span>4</span>/-
          </div>
          <img src={Pizza2} alt="" />
          <div className="name">pizza 2</div>
          <form action="" method="post">
            <input
              type="number"
              min="1"
              max="100"
              value="1"
              className="qty"
              name="qty"
            />
            <input
              type="submit"
              value="add to cart"
              name="add_to_cart"
              className="btn"
            />
          </form>
        </div>

        <div className="box">
          <div className="price">
            $<span>2</span>/-
          </div>
          <img src={Pizza3} alt="" />
          <div className="name">pizza 3</div>
          <form action="" method="post">
            <input
              type="number"
              min="1"
              max="100"
              value="1"
              className="qty"
              name="qty"
            />
            <input
              type="submit"
              value="add to cart"
              name="add_to_cart"
              className="btn"
            />
          </form>
        </div>

        <div className="box">
          <div className="price">
            $<span>3</span>/-
          </div>
          <img src={Pizza4} alt="" />
          <div className="name">pizza 4</div>
          <form action="" method="post">
            <input
              type="number"
              min="1"
              max="100"
              value="1"
              className="qty"
              name="qty"
            />
            <input
              type="submit"
              value="add to cart"
              name="add_to_cart"
              className="btn"
            />
          </form>
        </div>

        <div className="box">
          <div className="price">
            $<span>2</span>/-
          </div>
          <img src={Pizza5} alt="" />
          <div className="name">pizza 5</div>
          <form action="" method="post">
            <input
              type="number"
              min="1"
              max="100"
              value="1"
              className="qty"
              name="qty"
            />
            <input
              type="submit"
              value="add to cart"
              name="add_to_cart"
              className="btn"
            />
          </form>
        </div>

        <div className="box">
          <div className="price">
            $<span>4</span>/-
          </div>
          <img src={Pizza6} alt="" />
          <div className="name">pizza 6</div>
          <form action="" method="post">
            <input
              type="number"
              min="1"
              max="100"
              value="1"
              className="qty"
              name="qty"
            />
            <input
              type="submit"
              value="add to cart"
              name="add_to_cart"
              className="btn"
            />
          </form>
        </div>

        <div className="box">
          <div className="price">
            $<span>2</span>/-
          </div>
          <img src={Pizza7} alt="" />
          <div className="name">pizza 7</div>
          <form action="" method="post">
            <input
              type="number"
              min="1"
              max="100"
              value="1"
              className="qty"
              name="qty"
            />
            <input
              type="submit"
              value="add to cart"
              name="add_to_cart"
              className="btn"
            />
          </form>
        </div>

        <div className="box">
          <div className="price">
            $<span>3</span>/-
          </div>
          <img src={Pizza8} alt="" />
          <div className="name">pizza 8</div>
          <form action="" method="post">
            <input
              type="number"
              min="1"
              max="100"
              value="1"
              className="qty"
              name="qty"
            />
            <input
              type="submit"
              value="add to cart"
              name="add_to_cart"
              className="btn"
            />
          </form>
        </div>

        <div className="box">
          <div className="price">
            $<span>4</span>/-
          </div>
          <img src={Pizza9} alt="" />
          <div className="name">pizza 9</div>
          <form action="" method="post">
            <input
              type="number"
              min="1"
              max="100"
              value="1"
              className="qty"
              name="qty"
            />
            <input
              type="submit"
              value="add to cart"
              name="add_to_cart"
              className="btn"
            />
          </form>
        </div>
      </div>

      <div className="link-container">
        <Link className="link-btn" to="/menu">Go to All Menu</Link>
      </div>
      
    </section>
  );
};
