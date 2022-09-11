import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { accountToogle } from '../../../../redux/reducer/toogleReducer/toogleReducer';
import { toogleAccount } from '../../../../redux/selector/toogleSelector';
import { AppDispatch } from '../../../../Types/type';

export const Account = () => {
  const flag = useSelector(toogleAccount);
  const dispatch =  useDispatch<AppDispatch>();
  return (
    <div className={`user-account ${flag ? 'active': ''}`}>
    <section>
      <div id="close-account">
        <span onClick={() => dispatch(accountToogle())}>close</span>
      </div>

      <div className="user">
        <p>
          <span>you are not logged in now!</span>
        </p>
      </div>

      <div className="display-orders">
        <p>
          pizza-1 <span>( $3/- x 2 )</span>
        </p>
        <p>
          pizza 03 <span>( $2/- x 1 )</span>
        </p>
        <p>
          pizza 06 <span>( $4/- x 4 )</span>
        </p>
        <p>
          pizza 07 <span>( $2/- x 1 )</span>
        </p>
      </div>

      <div className="flex">
        <form action="" method="post">
          <h3>login now</h3>
          <input
            type="email"
            name="email"
            required
            className="box"
            placeholder="enter your email"
            maxLength={50}
          />
          <input
            type="password"
            name="pass"
            required
            className="box"
            placeholder="enter your password"
            maxLength={20}
          />
          <input
            type="submit"
            value="login now"
            name="login"
            className="btn"
          />
        </form>

        <form action="" method="post">
          <h3>register now</h3>
          <input
            type="text"
            name="name"
            required
            className="box"
            placeholder="enter your name"
            maxLength={20}
          />
          <input
            type="email"
            name="email"
            required
            className="box"
            placeholder="enter your email"
            maxLength={50}
          />
          <input
            type="password"
            name="pass"
            required
            className="box"
            placeholder="enter your password"
            maxLength={20}
          />
          <input
            type="password"
            name="cpass"
            required
            className="box"
            placeholder="confirm your password"
            maxLength={20}
          />
          <input
            type="submit"
            value="register now"
            name="register"
            className="btn"
          />
        </form>
      </div>
    </section>
  </div>
  )
}
