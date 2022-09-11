import React, { useEffect, useRef, useState } from "react";
import { ProductCard } from "../product-cart/productCard";
import axios from "axios";
import lottie from "lottie-web";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../Types/type";
import { productList } from "../../../redux/selector/productSelector";
import { PIZZA_API } from "../../../constants";
import { addProduct, sortProduct } from "../../../redux/reducer/productReducer/productReducer";
import { ProductCartList } from "../../../Types/interface";

export const AllMenu = () => {
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector(productList);
  const [loader, setloader] = useState<boolean>(true);
  const container = useRef<any>(null);

  const [currentTab, setCurrentTab] = useState<number>(0);
  const tabs = [
    {
      id: 0,
      tabTitle: "All",
    },
    {
      id: 1,
      tabTitle: "Vegan",
    },
    {
      id: 2,
      tabTitle: "Meat",
    },
  ];

  useEffect(() => {
    axios
      .get(PIZZA_API)
      .then((response) => {
        dispatch(addProduct(response.data));
        setloader(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dispatch]);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../constants/pizza-loader.json"),
    });
  }, [product.length]);

  return (
    <>
      <section id="menu" className="menu all_menu">
        {loader ? (
          <div
            style={{
              height: "400px",
            }}
            ref={container}
          ></div>
        ) : null}

        {!loader ? (
          <div className="tabs">
            {tabs.map((tab, i) => (
              <button
                className="tabs_title"
                key={i}
                disabled={currentTab === tab.id}
                onClick={() => {
                  setCurrentTab(i);
                }}
              >
                {tab.tabTitle}
              </button>
            ))}
            <select
              className="filter_price"
              name=""
              id=""
              onChange={(e) => dispatch(sortProduct(e.currentTarget.value))}
            >
              <option value="low">Low - High (Price)</option>
              <option value="high">High - Low (Price)</option>
            </select>
          </div>
        ) : null}

        <div className="box-container">
          {currentTab === 0
            ? product.map((data: ProductCartList) => {
                return <ProductCard key={uuidv4()} data={data} />;
              })
            : null}

          {currentTab === 1
            ? product.map((data: ProductCartList) => {
                return (
                  data.veg === true && (
                    <ProductCard key={uuidv4()} data={data} />
                  )
                );
              })
            : null}

          {currentTab === 2
            ? product.map((data: ProductCartList) => {
                return (
                  data.veg === false && (
                    <ProductCard key={uuidv4()} data={data} />
                  )
                );
              })
            : null}
        </div>
      </section>
    </>
  );
};
