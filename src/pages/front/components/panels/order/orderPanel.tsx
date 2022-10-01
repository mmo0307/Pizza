import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../../Types/type";
import { ordersToggle } from '../../../../../redux/reducer/toggleReducer/toggleReducer';
import { toggleOrders } from '../../../../../redux/selector/toggleSelector';

export const OrderPanel = () => {
  const flag = useSelector(toggleOrders);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className={`my-orders ${flag ? "active" : ""}`}>
      <section>
        <div id="close-orders">
          <span onClick={() => dispatch(ordersToggle())}>close</span>
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
              pizza 01 $3/- x 2, pizza 03 $2/- x 1, pizza 06 $4/- x 4, pizza 07,
              $2/- x 1
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
              pizza 01 $3/- x 2, pizza 03 $2/- x 1, pizza 06 $4/- x 4, pizza 07,
              $2/- x 1
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
  );
}
