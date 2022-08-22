import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../action";
import Vegas from '../../images/pizza/vegan.png';

interface Data {
  id: number;
  description: string;
  img: string;
  name: string;
  price: number;
  veg: boolean;
}

export const ProductCard: React.FC<{ data: Data }> = ({ data }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(1);

  const changeCount = (e:any) => {
    setCount(e.currentTarget.value)
  }

  const item = {
    id: data.id,
    price: data.price,
    image: data.img,
    pizzaName: data.name,
    count: Number(count),
    totalCost: Number(count) * data.price,
  }

  return (
    <div className="box" id={`${data.id}`}>
      <div className="price">
        $<span>{data.price}</span>/-
      </div>
      {data.veg ?
      <div className="vegan">
        <span>
            <img className="vegan-img" src={Vegas} alt="" />
        </span>
      </div>
      : null
      }
      <img className="pizza-img" src={data.img} alt="" />
      <div className="name">{data.name}</div>
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
