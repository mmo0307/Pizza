import React from 'react'

import About1 from "../../../../images/about/about-1.svg";
import About2 from "../../../../images/about/about-2.svg";
import About3 from "../../../../images/about/about-3.svg";

export const About = () => {
  return (
    <section className="about" id="about">
    <h1 className="heading">О нас</h1>

    <div className="box-container">
      <div className="box">
        <img src={About1} alt="" />
        <h3>Делаем с любовью</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
          quae amet beatae magni numquam facere sit. Tempora vel laboriosam
          repudiandae!
        </p>
        <a href="#menu" className="btn">
          Наше меню
        </a>
      </div>

      <div className="box">
        <img src={About2} alt="" />
        <h3>30 минут доставки</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
          quae amet beatae magni numquam facere sit. Tempora vel laboriosam
          repudiandae!
        </p>
        <a href="#menu" className="btn">
          Наше меню
        </a>
      </div>

      <div className="box">
        <img src={About3} alt="" />
        <h3>Делитесь с друзьями</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
          quae amet beatae magni numquam facere sit. Tempora vel laboriosam
          repudiandae!
        </p>
        <a href="#menu" className="btn">
          Наше меню
        </a>
      </div>
    </div>
  </section>
  )
}
