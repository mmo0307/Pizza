import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Registration = () => {
    const navigate = useNavigate();
    const [nameSurname, setNameSurname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const rand = () => Math.random().toString(36).substring(2);
    const token = () => rand() + rand();

    const handleRegistration = () => {
        axios.post('http://localhost:8080/user/registration', {
            name: nameSurname,
            email,
            phone,
            password,
        }).then(res => {
            localStorage.setItem('token', token());
            const dataUser = {
                id: res.data.id,
                name: res.data.name,
                email: res.data.email,
                phone: res.data.phone,
                role_id: res.data.role_id,
            };
            localStorage.setItem('user_data', JSON.stringify(dataUser));
            if(res.status === 200){
                navigate('/');
            }
        }).catch(res => {
            setError(res.response.data.message);
        });
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
                                <h4>{error && error}</h4>
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

