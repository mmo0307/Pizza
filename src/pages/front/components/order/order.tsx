import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteItem } from "../../../../redux/reducer/cartReducer/cartReducer";
import { productCartList } from "../../../../redux/selector/cartSelector";
import { AppDispatch } from "../../../../Types/type";
import { v4 as uuidv4 } from "uuid";

export const Order = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cartData = useSelector(productCartList);
  const navigate = useNavigate();

  const checkLength = () => {
    if (cartData.productCartList.length === 1) {
      navigate("/");
    }
  };

  return (
    <>
      <section className="order" id="order">
        <h1 className="heading">order now</h1>

        <div className="form_order">
          <div>
            <div className="display-orders">
              {cartData.productCartList.map((item) => {
                return (
                  <div key={uuidv4()}>
                    <img src={item.img} alt="" />
                    <p>{item.name}</p>
                    <span>
                      ( ${item.price} - x {item.count} )
                    </span>
                    <p
                      className="fas fa-times"
                      onClick={() => {
                        checkLength();
                        dispatch(deleteItem(item.id));
                      }}
                    ></p>
                  </div>
                );
              })}
            </div>

            <div>
              <div className="flex">
                <div className="inputBox">
                  <span>your name :</span>
                  <input
                    type="text"
                    name="name"
                    className="box"
                    required
                    placeholder="enter your name"
                    maxLength={20}
                  />
                </div>
                <div className="inputBox">
                  <span>your number :</span>
                  <input
                    type="number"
                    name="number"
                    className="box"
                    required
                    placeholder="enter your number"
                    min="0"
                  />
                </div>
                <div className="inputBox">
                  <span>payment method</span>
                  <select name="method" className="box">
                    <option value="cash on delivery">cash on delivery</option>
                    <option value="credit card">credit card</option>
                  </select>
                </div>
                <div className="inputBox">
                  <span>address line 01 :</span>
                  <input
                    type="text"
                    name="flat"
                    className="box"
                    required
                    placeholder="e.g. flat no."
                    maxLength={50}
                  />
                </div>
              </div>

              <input
                type="submit"
                value={`order now (${cartData.total}$)`}
                className="btn"
                name="order"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
