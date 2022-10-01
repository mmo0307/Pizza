import React from 'react';
import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <div className={`user-account active`}>
            <section>
                <div id="close-account">
                    <Link to='/'>close</Link>
                </div>

                <div className="flex">
                    <form action="src/pages/front/components/panels/account/account" method="post">
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

                    <form action="src/pages/front/components/panels/account/account" method="post">
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

