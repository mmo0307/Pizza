import React, { useState } from "react";

import Home1 from "../../../../images/home/home-img-1.png";
import Home2 from "../../../../images/home/home-img-2.png";
import Home3 from "../../../../images/home/home-img-3.png";

export const HomeBanner = () => {
  const [indx, setIndx] = useState<number>(0);
  const contentSlider: Array<{
    img: string;
    title: string;
  }> = [
    {
      img: Home1,
      title: "Паперони Пицца",
    },
    {
      img: Home2,
      title: "Пицца с Грибами",
    },
    {
      img: Home3,
      title: "Маскарпоне и Грибы",
    },
  ];

  const nextSlide = () => {
    if (indx !== contentSlider.length - 1) {
      setIndx(indx + 1);
    } else if (indx === contentSlider.length - 1) {
      setIndx(0);
    }
  };

  const prevSlide = () => {
    if (indx === 0) {
      setIndx(contentSlider.length - 1);
    } else if (indx > 0) {
      setIndx(indx - 1);
    }
  };

  return (
    <div className="home-bg">
      <section className="home" id="home">
        <div className="slide-container">
          <div className="slide active">
            <div className="image">
              <img src={contentSlider[indx].img} alt="" />
            </div>
            <div className="content">
              <h3>{contentSlider[indx].title}</h3>
              <div
                className="fas fa-angle-left"
                onClick={() => prevSlide()}
              ></div>
              <div
                className="fas fa-angle-right"
                onClick={() => nextSlide()}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
