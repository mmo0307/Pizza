import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Vegas from "../../images/pizza/vegan.png";
import Spicy from "../../images/pizza/spicy.png";
import { addToCart } from "../../reducer/cartReducer/cartReducer";
import { ProductCartList } from "../../Types/interface";

export const ProductCard: React.FC<{ data: ProductCartList }> = ({ data }) => {
  const { id, price, img, name, veg, spicy, description, additions } = data;
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
    spicy,
    count: Number(count),
    totalCost: Number(count) * price,
  };

  return (
    <div className="box" id={`${id}`}>
      <div className="price_box">
        <span className="price">${price}</span>
        <div className="designations">
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
      </div>

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
