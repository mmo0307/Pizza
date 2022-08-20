import React from 'react'

export function Footer() {
  return (
    <section className="footer" id="contact">
    <div className="box-container">
      <div className="box">
        <i className="fas fa-phone"></i>
        <h3>phone number</h3>
        <p>+123-456-7890</p>
        <p>+111-222-3333</p>
      </div>

      <div className="box">
        <i className="fas fa-map-marker-alt"></i>
        <h3>our address</h3>
        <p>mumbai, india - 400104</p>
      </div>

      <div className="box">
        <i className="fas fa-clock"></i>
        <h3>opening hours</h3>
        <p>00:09am to 00:10pm</p>
      </div>

      <div className="box">
        <i className="fas fa-envelope"></i>
        <h3>email address</h3>
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
