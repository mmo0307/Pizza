import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
import axios from "axios";
import { ProductCartList } from "../../../../Types/interface";
import { ProductCard } from "../product-cart/productCard";

export const Menu = () => {
  const [loader, setLoader] = useState<boolean>(true);
  const container = useRef<any>(null);
  const [data_product, setData] = useState([]);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../../constants/pizza-loader.json"),
    });
  }, [data_product.length]);

  useEffect(() => {
    axios
      .get("https://63000cf734344b6431048186.mockapi.io/pizza_item")
      .then((response) => {
        setData(response.data);
        setLoader(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section id="menu" className="menu">
      {loader ? (
        <div
          style={{
            height: "400px",
          }}
          ref={container}
        ></div>
      ) : null}

      <h1 className="heading">our menu</h1>

      <div className="box-container">
        {data_product.splice(0, 9).map((data: ProductCartList) => {
          return <ProductCard data={data} />;
        })}
      </div>

      <div className="link-container">
        <Link className="link-btn" to="/menu">
          Go to All Menu
        </Link>
      </div>
    </section>
  );
};
