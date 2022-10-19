import React from 'react'

export const Footer = () => {
  return (
    <section className="footer" id="contact">
    <div className="box-container">
      <div className="box">
        <i className="fas fa-phone"></i>
        <h3>Номера телефонов</h3>
        <p>+123-456-7890</p>
        <p>+111-222-3333</p>
      </div>

      <div className="box">
        <i className="fas fa-map-marker-alt"></i>
        <h3>Наш аддресс</h3>
        <p>Украина, Днепр - 49000</p>
      </div>

      <div className="box">
        <i className="fas fa-clock"></i>
        <h3>Время работы</h3>
        <p>с 09:00 до 22:00</p>
      </div>

      <div className="box">
        <i className="fas fa-envelope"></i>
        <h3>Наши почты</h3>
        <p>shaikhanas@gmail.com</p>
        <p>anasbhai@gmail.com</p>
      </div>
    </div>

    <div className="credit">
      &copy; copyright @ 2022 by <span>Misha</span> | all rights reserved!
    </div>
  </section>
  )
}
