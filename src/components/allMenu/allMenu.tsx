import React, { useEffect, useRef, useState } from "react";
import { ProductCard } from "../product-cart/productCard";
import axios from "axios";
import lottie from "lottie-web";

interface Props {
  title:string;
  price: number;
  selected: boolean;
}

interface DataProduct {
  id: number;
  name: string;
  veg: boolean;
  price: number;
  weight: number;
  description: string;
  img: string;
  additions: [
    {
      cheese_board: [Props];
      meat: [Props];
      cheese_mix: [Props];
    }
  ];
}

export function AllMenu() {
  const [data_product, setData] = useState([]);
  const [loader, setloader] = useState<boolean>(true);
  const container = useRef<any>(null);

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
      .then(function (response) {
        setData(response.data);
        setloader(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

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
        <div className="box-container">
          {data_product.map((data: DataProduct, indx: number) => {
            return <ProductCard key={indx} data={data} />;
          })}
        </div>
      </section>
    </>
  );
}
