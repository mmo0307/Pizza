import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = () => {}

    return (
        <div className={`user-account active`}>
            <section>
                <div id="close-account">
                    <Link to='/'>close</Link>
                </div>

                <div className="flex">
                        <div>
                            <h3>login now</h3>
                            <input
                                type="email"
                                name="email"
                                required
                                className="box"
                                placeholder="enter your email"
                                maxLength={50}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                name="pass"
                                required
                                className="box"
                                placeholder="enter your password"
                                maxLength={20}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <input
                                type="submit"
                                value="login now"
                                name="login"
                                className="btn"
                                onClick={() => handleLogin}
                            />
                            <div className="btn-block">
                                <button onClick={() => navigate('/user/registration')}>Registration</button>
                            </div>

                        </div>
                </div>
            </section>
        </div>
    )
}

