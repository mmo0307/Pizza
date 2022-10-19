import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const rand = () => Math.random().toString(36).substring(2);
    const token = () => rand() + rand();

    const handleLogin = () => {
        axios.post('http://localhost:8080/user/login', {
            email,
            password,
        }).then(r => {
            localStorage.setItem('token', token());
            const dataUser = {
                id: r.data.id,
                name: r.data.name,
                email: r.data.email,
                phone: r.data.phone,
                role_id: r.data.role_id,
            };
             localStorage.setItem('user_data', JSON.stringify(dataUser));
            if(r.status === 200){
                navigate('/');
            }
        }).catch(res => {
            setError(res.response.data.message);
        })
    }

    return (
        <div className={`user-account active`}>
            <section>
                <div id="close-account">
                    <Link to='/'>Закрыть</Link>
                </div>

                <div className="flex">
                        <div>
                            <h3>Войти</h3>
                            <h4>{error && error}</h4>
                            <input
                                type="email"
                                name="email"
                                required
                                className="box"
                                placeholder="Введите свою почту"
                                maxLength={50}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                name="pass"
                                required
                                className="box"
                                placeholder="Введите свой пароль"
                                maxLength={20}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <input
                                type="submit"
                                value="Войти"
                                name="login"
                                className="btn"
                                onClick={() => handleLogin()}
                            />
                            <div className="btn-block">
                                <button onClick={() => navigate('/user/registration')}>Регистрация</button>
                            </div>

                        </div>
                </div>
            </section>
        </div>
    )
}

