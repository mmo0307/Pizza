import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shopToogle } from "../../../action";
import Pizza1 from "../../../images/pizza/pizza-1.jpg";
import Pizza7 from "../../../images/pizza/pizza-7.jpg";
import Pizza3 from "../../../images/pizza/pizza-3.jpg";
import Pizza6 from "../../../images/pizza/pizza-6.jpg";
import { Link } from "react-router-dom";

export const ShoppingCart: React.FC = () => {
  const flag = useSelector((state: any) => state.toogle.shop);
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(1);

  const changeCount = (e:any) => {
    setCount(e.currentTarget.value)
  }
  
  return (
    <>
      <div className={`shopping-cart ${flag ? "active" : ""}`}>
        <section>
          <div id="close-cart">
            <span onClick={() => dispatch(shopToogle())}>close</span>
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
                  min={1}
                  max={100}
                  value={count}
                  onChange={changeCount}
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
            <img src={Pizza3} alt="" />
            <div className="content">
              <p>
                pizza-3 <span>( $2/- x 1 )</span>
              </p>
              <form action="" method="post">
                <input
                  type="number"
                  className="qty"
                  name="qty"
                  min={1}
                  max={100}
                  value={count}
                  onChange={changeCount}
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
            <img src={Pizza6} alt="" />
            <div className="content">
              <p>
                pizza-6 <span>( $4/- x 2 )</span>
              </p>
              <form action="" method="post">
                <input
                  type="number"
                  className="qty"
                  name="qty"
                  min={1}
                  max={100}
                  value={count}
                  onChange={changeCount}
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
                  min={1}
                  max={100}
                  value={count}
                  onChange={changeCount}
                />
                <button
                  type="submit"
                  className="fas fa-edit"
                  name="update_qty"
                ></button>
              </form>
            </div>
          </div>

          <Link to="/orders" className="btn">
            order now
          </Link>
        </section>
      </div>
    </>
  );
};
