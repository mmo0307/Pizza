import React, {useCallback, useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../../Types/type";
import { ordersToggle } from '../../../../../redux/reducer/toggleReducer/toggleReducer';
import { toggleOrders } from '../../../../../redux/selector/toggleSelector';
import { UserOrdersData, UserData } from "../../../../../Types/interface";
import axios from "axios";

export const OrderPanel = () => {
  const flag = useSelector(toggleOrders);
  const dispatch = useDispatch<AppDispatch>();
  const userToken = localStorage.getItem('user_data');
  const [userData, setUserData] = useState<UserData>({
    id: 0,
    email: '',
    name: '',
    phone: 123456789,
    role_id: 2
  });
  const [userOrdersData, setUserOrdersData] = useState<UserOrdersData[]>([{
    order_id: 0,
    client_id: 0,
    client_name: '',
    products: [],
    price: 0,
    address_id: 0,
    order_date: '',
    address_name: ''
  }]);

  const getUserOrdersData = useCallback(() => {
    if(userData.id > 0) {
      axios.get(`http://localhost:8080/user/userOrders/${userData.id}`).then(res => setUserOrdersData(res.data));
    }
  }, [userData]);

  useEffect(() => {
    if(userToken){
      setUserData(JSON.parse(userToken));
    }
  }, [userToken]);

  useEffect(() => {
    getUserOrdersData();
  }, [userData]);

  return (
    <div className={`my-orders ${flag ? "active" : ""}`}>
      <section>
        <div id="close-orders">
          <span onClick={() => dispatch(ordersToggle())}>Закрыть</span>
        </div>

        <h3 className="title"> Мои заказы </h3>

        {userOrdersData && userOrdersData.map((item, index) => {
          return (
            <div className="box" key={index}>
              <p>
                Дата заказа : <span>{item.order_date.substring(0, 10)}</span>{" "}
              </p>
              <p>
                Имя : <span>{item.client_name}</span>{" "}
              </p>
              <p>
                Телефон : <span>{userData.phone}</span>
              </p>
              <p>
                Аддресс :{" "}
                <span>{item.address_name}</span>
              </p>

              {/*<p>*/}
              {/*  payment method : <span>cash on delivery</span>*/}
              {/*</p>*/}

              <p>
                Мои заказы :{" "}
                {
                  item.products.map((item) => {
                    return(
                        <>
                          <span>
                            {item.name}/{item.count}
                          </span>
                          <br/>
                        </>
                    )})
                }
              </p>

              <p>
                Сумма заказа : <span>${item.price}</span>
              </p>

              {/*<p>*/}
              {/*  payment status :{" "}*/}
              {/*  <span style={{ color: "var(--red)" }}>pending</span>{" "}*/}
              {/*</p>*/}
            </div>
          )
          })
        }

      </section>
    </div>
  );
}
