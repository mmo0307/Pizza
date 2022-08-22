import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Pizza1 from "../../images/pizza/pizza-1.png";
import Pizza2 from "../../images/pizza/pizza-2.png";
import Pizza3 from "../../images/pizza/pizza-3.png";
import Pizza4 from "../../images/pizza/pizza-4.png";
import Pizza5 from "../../images/pizza/pizza-5.png";
import Pizza6 from "../../images/pizza/pizza-6.png";
import Pizza7 from "../../images/pizza/pizza-7.png";
import Pizza8 from "../../images/pizza/pizza-8.png";
import Pizza9 from "../../images/pizza/pizza-9.png";
import { ProductCard } from "../product-cart/productCard";

interface DataProduct {
  id: number;
  description: string;
  img: string;
  name: string;
  price: number;
  veg: boolean;
}

export const Menu = () => {
  const [data_product, setData] = useState([
    {
      id: 1,
      name: "Margherita",
      veg: true,
      price: 449,
      description: "Cheese",
      quantity: 1,
      img: Pizza1,
      sizeandcrust: [
        {
          mediumPan: [
            {
              price: 279,
            },
          ],
          mediumstuffedcrustcheesemax: [
            {
              price: 375,
            },
          ],
          mediumstuffedcrustvegkebab: [
            {
              price: 375,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Tandoori Paneer",
      veg: true,
      price: 529,
      description:
        "Spiced paneeer, Onion,Green Capsicum & Red Paprika in Tandoori Sauce",
      quantity: 1,
      img: Pizza2,
      sizeandcrust: [
        {
          mediumPan: [
            {
              price: 529,
            },
          ],
          mediumstuffedcrustcheesemax: [
            {
              price: 625,
            },
          ],
          "medium stuffed crust-veg kebab": [
            {
              price: 625,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Veggie Supreme",
      veg: true,
      price: 569,
      description:
        "Black Olives,Green Capsicum, Mushroom, Onion,Red Paprika, Sweet Corn",
      quantity: 1,
      img: Pizza3,
      sizeandcrust: [
        {
          mediumPan: [
            {
              price: 569,
            },
          ],
          mediumstuffedcrustcheesemax: [
            {
              price: 665,
            },
          ],
          "medium stuffed crust-veg kebab": [
            {
              price: 665,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Double Paneer Supreme",
      veg: true,
      price: 569,
      description: "Spiced Paneer, Herbed Onion&Green Capsicum, Red Paprika",
      quantity: 1,
      img: Pizza4,
      sizeandcrust: [
        {
          mediumPan: [
            {
              price: 569,
            },
          ],
          mediumstuffedcrustcheesemax: [
            {
              price: 665,
            },
          ],
          "medium stuffed crust-veg kebab": [
            {
              price: 665,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Veggie Kebab Surprise",
      veg: true,
      price: 529,
      description:
        "Veg Kebab,Onion,Green Capsicum,Tomato & Sweet Corn in Tandoori Sauce",
      quantity: 1,
      img: Pizza5,
      sizeandcrust: [
        {
          mediumPan: [
            {
              price: 529,
            },
          ],
          mediumstuffedcrustcheesemax: [
            {
              price: 625,
            },
          ],
          "medium stuffed crust-veg kebab": [
            {
              price: 625,
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "Chicken Supreme",
      veg: false,
      price: 629,
      description: "Herbed Chicken,Schezwan Chicken Meatball,Chicken Tikka",
      quantity: 1,
      img: Pizza6,
      sizeandcrust: [
        {
          mediumPan: [
            {
              price: 725,
            },
          ],
          mediumstuffedcrustcheesemax: [
            {
              price: 625,
            },
          ],
          mediumstuffedcrustchickenseekhkebab: [
            {
              price: 725,
            },
          ],
        },
      ],
    },
    {
      id: 6,
      name: "Chicken Tikka Supreme",
      veg: false,
      price: 629,
      description: "Chicken Tikka,Chicken Malai Tikka,Onion,Red Paprika",
      quantity: 1,
      img: Pizza7,
      sizeandcrust: [
        {
          mediumPan: [
            {
              price: 725,
            },
          ],
          mediumstuffedcrustcheesemax: [
            {
              price: 625,
            },
          ],
          mediumstuffedcrustchickenseekhkebab: [
            {
              price: 725,
            },
          ],
        },
      ],
    },
    {
      id: 7,
      name: "Triple Chicken Feast",
      veg: false,
      price: 629,
      description:
        "Schezwan Chicken Meatball Herbed Chicken,Chicken Sausage,Geen Capsicum, Onion,Red Paprika",
      quantity: 1,
      img: Pizza8,
      sizeandcrust: [
        {
          mediumPan: [
            {
              price: 629,
            },
          ],
          mediumstuffedcrustcheesemax: [
            {
              price: 725,
            },
          ],
          mediumstuffedcrustchickenseekhkebab: [
            {
              price: 725,
            },
          ],
        },
      ],
    },
    {
      id: 8,
      name: "Chicken Tikka",
      veg: false,
      price: 569,
      description: "Chicken Tikka, Onion, Tomato",
      quantity: 1,
      img: Pizza9,
      sizeandcrust: [
        {
          mediumPan: [
            {
              price: 569,
            },
          ],
          mediumstuffedcrustcheesemax: [
            {
              price: 665,
            },
          ],
          mediumstuffedcrustchickenseekhkebab: [
            {
              price: 665,
            },
          ],
        },
      ],
    },
    {
      id: 9,
      name: "Double Chicken Sausage",
      veg: false,
      price: 529,
      description: "Chicken Sausage",
      quantity: 1,
      img: Pizza9,
      sizeandcrust: [
        {
          mediumPan: [
            {
              price: 529,
            },
          ],
          mediumstuffedcrustcheesemax: [
            {
              price: 625,
            },
          ],
          mediumstuffedcrustchickenseekhkebab: [
            {
              price: 625,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <section id="menu" className="menu">
      <h1 className="heading">our menu</h1>

      <div className="box-container">
        {data_product.map((data: DataProduct, indx: number) => {
          return <ProductCard key={indx} data={data} />;
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
