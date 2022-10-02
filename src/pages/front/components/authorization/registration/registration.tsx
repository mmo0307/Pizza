import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

export const Registration = () => {
    const navigate = useNavigate();
    const [nameSurname, setNameSurname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [repeatPassword, setRepeatPassword] = useState<string>('');

    const handleRegistration = () => {
        axios.post('http://localhost:8080/user/login', {
            name: nameSurname,
            email,
            phone,
            password,
        }).then(r => {
            console.log('r=>', r)
            if(r.status === 200){
                navigate('/');
            }
        })
    }

    return (
        <div className={`user-account active`}>
            <section>
                <div id="close-account">
                    <Link to='/'>close</Link>
                </div>

                <div className="flex">
                            <div>
                                <h3>register now</h3>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="box"
                                    placeholder="enter your name and surname"
                                    maxLength={255}
                                    onChange={(e) => setNameSurname(e.target.value)}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="box"
                                    placeholder="enter your email"
                                    maxLength={255}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    type="number"
                                    name="phone"
                                    required
                                    className="box"
                                    placeholder="enter your phone"
                                    maxLength={9}
                                    onChange={(e) => setPhone(e.target.value)}
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
                                    type="password"
                                    name="cpass"
                                    required
                                    className="box"
                                    placeholder="confirm your password"
                                    maxLength={20}
                                    onChange={(e) => setRepeatPassword(e.target.value)}
                                />
                                <input
                                    type="submit"
                                    value="register now"
                                    name="register"
                                    className="btn"
                                    onClick={() => handleRegistration()}
                                />
                                <div className="btn-block">
                                    <button onClick={() => navigate('/user/login')}>Login</button>
                                </div>
                            </div>
                </div>
            </section>
        </div>
    )
}

