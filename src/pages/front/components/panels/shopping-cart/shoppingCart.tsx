import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
import { v4 as uuidv4 } from "uuid";
import { AppDispatch } from "../../../../../Types/type";
import { toggleShop } from "../../../../../redux/selector/toggleSelector";
import { productCartList } from "../../../../../redux/selector/cartSelector";
import { ProductCartList } from "../../../../../Types/interface";
import { shopToggle} from "../../../../../redux/reducer/toggleReducer/toggleReducer";
import { changeItem, deleteItem } from "../../../../../redux/reducer/cartReducer/cartReducer";
import { Modal } from "../../../../../constants/components/modal/modal";
import Vegas from '../../../../../images/pizza/vegan.png'
import Spicy from '../../../../../images/pizza/spicy.png'

export const ShoppingCart: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const container = useRef<any>(null);
  const flag = useSelector(toggleShop);
  const item = useSelector(productCartList);
  const [data, setData] = useState<ProductCartList[]>(item.productCartList);
  const [active, setActive] = useState<boolean>(false);
  const [productId, setProductId] = useState<number>(0);
  const [count, setCount] = useState<number>(1);
  const [productData, setProductData] = useState<ProductCartList>({
    id: 0,
    name: "",
    img: "",
    price: 0,
    count: 0,
    description: "",
    veg: false,
    spicy: false,
    additions: [
      {
        cheese_board: [
          {
            title: "",
            price: 0,
            selected: false,
          },
        ],
        meat: [
          {
            title: "",
            price: 0,
            selected: false,
          },
        ],
        cheese_mix: [
          {
            title: "",
            price: 0,
            selected: false,
          },
        ],
      },
    ],
  });

  const { id, price, img, name, description, additions, veg, spicy } =
    productData;

  const cheese_board = useRef<HTMLInputElement>(null);
  const meat = useRef<HTMLInputElement>(null);
  const cheese_mix = useRef<HTMLInputElement>(null);

  if (
    cheese_board.current !== null &&
    meat.current !== null &&
    cheese_mix.current !== null
  ) {
    cheese_board.current.checked = additions[0].cheese_board[0].selected;
    meat.current.checked = additions[0].meat[0].selected;
    cheese_mix.current.checked = additions[0].cheese_mix[0].selected;
  }

  const clearCheckBox = () => {
    if (null !== cheese_board.current) {
      if (cheese_board.current.checked) {
        cheese_board.current.checked = !cheese_board.current.checked;
      }
    }

    if (null !== meat.current) {
      if (meat.current.checked) {
        meat.current.checked = !meat.current.checked;
      }
    }

    if (null !== cheese_mix.current) {
      if (cheese_mix.current.checked) {
        cheese_mix.current.checked = !cheese_mix.current.checked;
      }
    }
  };

  const changeCount = (e: any) => {
    setCount(e.currentTarget.value);
  };

  const productItem = {
    id,
    price,
    img,
    name,
    description,
    additions,
    veg,
    count: Number(count),
    totalCost: Number(count) * price,
  };

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../../../constants/shop_cart.json"),
    });
  }, [item.productCartList.length]);

  useEffect(() => {
    setData(item.productCartList);
  }, [item]);

  useEffect(() => {
    data.forEach((item) => {
      if (item.id === productId) {
        setProductData(item);
        setCount(item.count);
      }
    });
  }, [data, productId]);

  return (
    <>
      <div className={`shopping-cart ${flag ? "active" : ""}`}>
        <section>
          <div id="close-cart">
            <span onClick={() => dispatch(shopToggle())}>??????????????</span>
          </div>
          {!item.productCartList.length ? <div ref={container}></div> : null}

          {data.map((item: ProductCartList) => (
            <div className="box" key={uuidv4()}>
              <div
                className="fas fa-times"
                onClick={() => dispatch(deleteItem(item.id))}
              ></div>
              <button
                onClick={() => setActive(true)}
                type="submit"
                className="fas fa-edit"
                name="update_qty"
              ></button>

              <div className="shopping_designations">
                {item.veg ? (
                  <div className="vegan">
                    <span>
                      <img className="vegan-img" src={Vegas} alt="" />
                    </span>
                  </div>
                ) : null}
                {item.spicy ? (
                  <div className="spicy">
                    <span>
                      <img className="spicy-img" src={Spicy} alt="" />
                    </span>
                  </div>
                ) : null}
              </div>

              <img src={item.img} alt="" />
              <div className="content">
                <span>
                  {item.name}{" "}
                  <p className="price_count_product">
                    ( ${item.price} - x {item.count} )
                  </p>
                </span>
                <div>
                  <button
                    onClick={() => {
                      setActive(true);
                      setProductId(item.id);
                    }}
                    type="submit"
                    className="fas fa-edit"
                    name="update_qty"
                  ></button>
                </div>
              </div>
            </div>
          ))}
          {data.length ? (
            <Link
              to="/orders"
              className="btn"
              onClick={() => dispatch(shopToggle())}
            >
              ?????????? ???????????? ({item.total > 0 ? item.total : 0})$
            </Link>
          ) : null}
        </section>
      </div>

      <Modal active={active} setActive={setActive}>
        <div className="modal_container">
          <div className="modal_image_block">
            <div className="price">
              <span>${price}</span>
            </div>

            <div className="shopping_designations">
              {veg ? (
                <div className="vegan">
                  <span>
                    <img className="vegan-img" src={Vegas} alt="" />
                  </span>
                </div>
              ) : null}
              {spicy ? (
                <div className="spicy">
                  <span>
                    <img className="spicy-img" src={Spicy} alt="" />
                  </span>
                </div>
              ) : null}
            </div>

            <img src={img} alt="" />
            <input
              type="number"
              min={1}
              max={100}
              step={1}
              value={count}
              className="qty"
              name="qty"
              onChange={changeCount}
            />
          </div>

          <div className="content">
            <h1 className="pizza_name">{name}</h1>
            <div className="content_pizza">
              <p className="pizza_description">{description}</p>

              <h2 className="addition">?????????????? ?? {name}</h2>

              <div className="addition_content">
                <input
                  ref={cheese_board}
                  className="choice_addition"
                  type="checkbox"
                  name="cheese_board"
                  value="cheese_board"
                />
                <p className="addition_title">
                  {additions[0].cheese_board[0].title}
                </p>
                <p className="addition_price">
                  +{additions[0].cheese_board[0].price}$
                </p>
              </div>

              <div className="addition_content">
                <input
                  ref={meat}
                  className="choice_addition"
                  type="checkbox"
                  name="meat"
                  value="meat"
                />
                <p className="addition_title">{additions[0].meat[0].title}</p>
                <p className="addition_price">+{additions[0].meat[0].price}$</p>
              </div>

              <div className="addition_content">
                <input
                  ref={cheese_mix}
                  className="choice_addition"
                  type="checkbox"
                  name="cheese_mix"
                  value="cheese_mix"
                />
                <p className="addition_title">
                  {additions[0].cheese_mix[0].title}
                </p>
                <p className="addition_price">
                  +{additions[0].cheese_mix[0].price}$
                </p>
              </div>
            </div>
          </div>

          <div className="bottom_button">
            <button
              className="btn"
              onClick={() => {
                dispatch(
                  changeItem({
                    productItem,
                    count,
                    meat: meat.current?.checked,
                    cheese_mix: cheese_mix.current?.checked,
                    cheese_board: cheese_board.current?.checked,
                  })
                );
                clearCheckBox();
                setActive(false);
              }}
            >
              ???????????????? ??????????
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};
