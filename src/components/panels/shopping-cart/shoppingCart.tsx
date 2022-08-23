import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, shopToogle } from "../../../action";
import { Link } from "react-router-dom";
import { Modal } from "../../modal/modal";
import lottie from "lottie-web";

interface Data {
  id: number;
  pizzaName: string;
  image: string;
  price: number;
  count: number;
}

export const ShoppingCart: React.FC = () => {
  const dispatch = useDispatch();
  const flag = useSelector((state: any) => state.toogle.shop);
  const item = useSelector((state: any) => state.product);
  const [data, setData] = useState<Data[]>(item.productList);
  const [active, setActive] = useState<boolean>(false);

  const container = useRef<any>(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./shop_cart.json"),
    });
  }, [item.productList.length]);

  useEffect(() => {
    setData(item.productList);
  }, [item]);

  return (
    <>
      <div className={`shopping-cart ${flag ? "active" : ""}`}>
        <section>
          <div id="close-cart">
            <span onClick={() => dispatch(shopToogle())}>close</span>
          </div>
          {!item.productList.length ? <div ref={container}></div> : null}

          {data.map((item: Data, indx: number) => (
            <div className="box" key={`${indx}`}>
              <a
                href="#"
                className="fas fa-times"
                onClick={() => dispatch(deleteItem(item.id))}
              ></a>
              <button
                onClick={() => setActive(true)}
                type="submit"
                className="fas fa-edit"
                name="update_qty"
              ></button>
              <img src={item.image} alt="" />
              <div className="content">
                <p>
                  {item.pizzaName}{" "}
                  <span>
                    ( ${item.price}/- x {item.count} )
                  </span>
                </p>
                <div>
                  <button
                    onClick={() => setActive(true)}
                    type="submit"
                    className="fas fa-edit"
                    name="update_qty"
                  ></button>
                </div>
              </div>
            </div>
          ))}
          {item.productList.length ? (
            <Link to="/orders" className="btn">
              order now ({item.total > 0 ? item.total : 0})$
            </Link>
          ) : null}
        </section>
      </div>

      <Modal active={active} setActive={setActive}>
        {" "}
      </Modal>
    </>
  );
};
