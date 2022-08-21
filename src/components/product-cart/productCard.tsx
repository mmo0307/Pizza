import React, { useState } from "react";
import Vegas from '../../images/pizza/vegan.png';

interface Data {
  description: string;
  img: string;
  name: string;
  price: number;
  veg: boolean;
}

export const ProductCard: React.FC<{ data: Data }> = ({ data }) => {

  const [count, setCount] = useState<number>(1);

  const changeCount = (e:any) => {
    setCount(e.currentTarget.value)
  }

  return (
    <div className="box">
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
      <img src={data.img} alt="" />
      <div className="name">{data.name}</div>
      <form action="" method="post">
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
        />
      </form>
    </div>
  );
};
