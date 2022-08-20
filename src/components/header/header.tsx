import React from "react";

export function Header() {
  return (
    <header className="header">
      <section className="flex">
        <a href="#home" className="logo">
          Pizza.
        </a>

        <nav className="navbar">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#menu">menu</a>
          <a href="#order">order</a>
          <a href="#contact">contact</a>
        </nav>

        <div className="icons">
          <div id="menu-btn" className="fas fa-bars"></div>
          <div id="user-btn" className="fas fa-user"></div>
          <div id="order-btn" className="fas fa-box"></div>
          <div id="cart-btn" className="fas fa-shopping-cart">
            <span>(4)</span>
          </div>
        </div>
      </section>
    </header>
  );
}
