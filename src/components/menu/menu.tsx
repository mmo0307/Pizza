import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "../product-cart/productCard";
import lottie from "lottie-web";
import axios from "axios";
import { ProductList } from "../../Types/interface";
import { v4 as uuidv4 } from 'uuid';

export const Menu = () => {
  const [loader, setloader] = useState<boolean>(true);
  const container = useRef<any>(null);
  const [data_product, setData] = useState([]);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../constants/pizza-loader.json"),
    });
  }, [data_product.length]);

  useEffect(() => {
    axios
      .get("https://63000cf734344b6431048186.mockapi.io/pizza_item")
      .then((response) => {
        setData(response.data);
        setloader(false);
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
        {data_product.splice(0, 9).map((data: ProductList) => {
          return <ProductCard key={uuidv4()} data={data} />;
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
