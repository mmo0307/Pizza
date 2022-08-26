import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../action";
import Vegas from "../../images/pizza/vegan.png";

interface Props {
  title: string;
  price: number;
  selected: boolean;
}
interface Data {
  id: number;
  description: string;
  img: string;
  name: string;
  price: number;
  veg: boolean;
  additions: [
    {
      cheese_board: [Props];
      meat: [Props];
      cheese_mix: [Props];
    }
  ];
}

export const ProductCard: React.FC<{ data: Data }> = ({ data }) => {
  const { id, price, img, name, veg, description, additions } = data;
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(1);

  const changeCount = (e: any) => {
    setCount(e.currentTarget.value);
  };

  const item = {
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

  return (
    <div className="box" id={`${id}`}>
      <div className="price">
        $<span>{price}</span>
      </div>
      {veg ? (
        <div className="vegan">
          <span>
            <img className="vegan-img" src={Vegas} alt="" />
          </span>
        </div>
      ) : null}
      <img className="pizza-img" src={img} alt="" />
      <div className="name">{name}</div>
      <div className="description">{description}</div>
      <div className="price_count">
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
        <input
          type="submit"
          value="add to cart"
          name="add_to_cart"
          className="btn"
          onClick={() => dispatch(addToCart(item))}
        />
      </div>
    </div>
  );
};
