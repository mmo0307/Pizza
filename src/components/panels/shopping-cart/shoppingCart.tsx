import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, shopToogle } from "../../../action";
import { Link } from "react-router-dom";

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
  const item = useSelector((state:any) => state.product)
  const [count, setCount] = useState<number>(1);
  const [data, setData] = useState<Data[]>(item.productList);

  console.log(data)

  const changeCount = (e: any) => {
    setCount(e.currentTarget.value);
  };

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

          {data.map((item: Data, indx: number) => (
            <div className="box" key={`${indx}`}>
              <a href="#" className="fas fa-times" onClick={() => dispatch(deleteItem(item.id))}></a>
              <img src={item.image} alt="" />
              <div className="content">
                <p>
                  {item.pizzaName}{" "}
                  <span>
                    ( ${item.price}/- x {item.count} )
                  </span>
                </p>
                <div>
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
                </div>
              </div>
            </div>
          ))}
          <Link to="/orders" className="btn">
            order now
          </Link>
        </section>
      </div>
    </>
  );
};
