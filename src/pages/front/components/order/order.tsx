import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearItem, deleteItem } from "../../../../redux/reducer/cartReducer/cartReducer";
import { productCartList } from "../../../../redux/selector/cartSelector";
import { AppDispatch } from "../../../../Types/type";
import { v4 as uuidv4 } from "uuid";
import { AddressData, UserData } from "../../../../Types/interface";
import axios from "axios";

export const Order = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const cartData = useSelector(productCartList);
  const userToken = localStorage.getItem('user_data');
  const [userData, setUserData] = useState<UserData>({
    id: 0,
    email: '',
    name: '',
    phone: 123456789,
    role_id: 2
  });
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<number>(0);
  const [addressData, setAddressData] = useState<AddressData[]>([]);
  const [selectAddress, setSelectAddress] = useState<number>(2);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if(userToken){
      setUserData(JSON.parse(userToken));
    }
    axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/order/addresses`).then(res => setAddressData(res.data));
  }, [userToken]);

  useEffect(() => {
    setName(userData.name);
    setPhone(userData.phone);
  }, [userData])

  const checkLength = () => {
    if (cartData.productCartList.length === 1) {
      navigate("/");
    }
  };

  const submitOrder = () => {
    if(name.length === 0 || phone === 0 || selectAddress === 0){
      setError('Какое-то поле пустое или не выбранно!');
    } else {
      axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/user/success-order`, {
        price: cartData.total,
        client_id: userData.id,
        client_name: name,
        address_id: selectAddress,
        products: JSON.stringify(cartData.productCartList)
      }).then(res => {
        if (res.status === 200) {
          localStorage.removeItem('product');
          dispatch(clearItem());
          navigate("/");
        }
      });
    }
  }

  return (
    <>
      <section className="order" id="order">
        <h1 className="heading">Заказ</h1>
        <h4 className="error_heading">{error && error}</h4>
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
                  <span>Ваше Имя :</span>
                  <input
                    type="text"
                    name="name"
                    className="box"
                    required
                    placeholder="enter your name"
                    maxLength={20}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="inputBox">
                  <span>Ваш номер телефона :</span>
                  <input
                    type="number"
                    name="number"
                    className="box"
                    required
                    placeholder="enter your number"
                    min="0"
                    value={phone}
                    onChange={(e) => setPhone(+e.target.value)}
                  />
                </div>
                {/*<div className="inputBox">*/}
                {/*  <span>payment method</span>*/}
                {/*  <select name="method" className="box">*/}
                {/*    <option value="cash on delivery">cash on delivery</option>*/}
                {/*    <option value="credit card">credit card</option>*/}
                {/*  </select>*/}
                {/*</div>*/}
                <div className="inputBox">
                  <span>Аддресс :</span>
                  <select name="method" className="box" onChange={(e) => setSelectAddress(+e.target.value)}>
                    {
                      addressData && addressData.map((item) =>
                          <option key={uuidv4()} value={item.id_address}>{item.address_name}</option>
                      )
                    }
                  </select>
                </div>
              </div>

              <input
                type="submit"
                value={`Сумма заказа (${cartData.total}$)`}
                className="btn"
                name="Сделать заказ"
                onClick={() => submitOrder()}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
