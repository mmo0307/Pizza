import React from "react";

export function Order() {
  return (
  <>
      <section className="order" id="order">
      <h1 className="heading">order now</h1>

      <form action="" method="post">

        <div>
        <div className="display-orders">
          <p>
            pizza-1 <span>( $3/- x 2 )</span>
          </p>
          <p>
            pizza-3 <span>( $2/- x 1 )</span>
          </p>
          <p>
            pizza-6 <span>( $4/- x 4 )</span>
          </p>
          <p>
            pizza-7 <span>( $2/- x 1 )</span>
          </p>
          <p>
            pizza-7 <span>( $2/- x 1 )</span>
          </p>
          <p>
            pizza-7 <span>( $2/- x 1 )</span>
          </p>
          <p>
            pizza-7 <span>( $2/- x 1 )</span>
          </p>
          <p>
            pizza-7 <span>( $2/- x 1 )</span>
          </p>
          <p>
            pizza-7 <span>( $2/- x 1 )</span>
          </p>
          <p>
            pizza-7 <span>( $2/- x 1 )</span>
          </p>
          <p>
            pizza-7 <span>( $2/- x 1 )</span>
          </p>
        </div>

        <div>
        <div className="flex">
          <div className="inputBox">
            <span>your name :</span>
            <input
              type="text"
              name="name"
              className="box"
              required
              placeholder="enter your name"
              maxLength={20}
            />
          </div>
          <div className="inputBox">
            <span>your number :</span>
            <input
              type="number"
              name="number"
              className="box"
              required
              placeholder="enter your number"
              min="0"
            />
          </div>
          <div className="inputBox">
            <span>payment method</span>
            <select name="method" className="box">
              <option value="cash on delivery">cash on delivery</option>
              <option value="credit card">credit card</option>
              <option value="paytm">paytm</option>
              <option value="paypal">paypal</option>
            </select>
          </div>
          <div className="inputBox">
            <span>address line 01 :</span>
            <input
              type="text"
              name="flat"
              className="box"
              required
              placeholder="e.g. flat no."
              maxLength={50}
            />
          </div>
          <div className="inputBox">
            <span>address line 02 :</span>
            <input
              type="text"
              name="street"
              className="box"
              required
              placeholder="e.g. street name."
              maxLength={50}
            />
          </div>
          <div className="inputBox">
            <span>pin code :</span>
            <input
              type="number"
              name="pin_code"
              className="box"
              required
              placeholder="e.g. 123456"
              min="0"
            />
          </div>
        </div>

        <input type="submit" value="order now" className="btn" name="order" />
        </div>

        </div>
      </form>
    </section>
  </>

  );
}