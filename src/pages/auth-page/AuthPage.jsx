import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './AuthPage.module.css';
import { getAccessTokenAPI } from '../../services/getAccessTokenService';
import { setAuth } from '../../redux/slices/authSlice';

function AuthPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [postAccessToken] = getAccessTokenAPI.usePostAccessTokenMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const responseToken = () => {
        postAccessToken({ email, password })
            .then((response) => {
                dispatch(
                    setAuth({
                        access: response.data.access_token,
                        refresh: response.data.refresh_token,
                        user: JSON.parse(localStorage.getItem('userDataInfo')),
                    }),
                );
                navigate('/profile');
                localStorage.setItem(
                    'access_token',
                    response?.data?.access_token.toString(),
                );
                localStorage.setItem(
                    'refresh_token',
                    response?.data?.refresh_token.toString(),
                );
            })
            .catch(() => {
                localStorage.setItem('userDataInfo', null);
            });
    };

    return (
        <div className={s.wrapper}>
            <div className={s.containerEnter}>
                <div className="modal__block">
                    <form
                        className="modal__form-login"
                        action=""
                        onSubmit={(event) => event.preventDefault()}
                    >
                        <div>
                            <Link to="/">
                                <img
                                    className="modal__logo"
                                    src="/img/logo_modal.png"
                                    alt=""
                                />
                            </Link>
                        </div>
                        <input
                            className="modal__input login"
                            type="text"
                            name="login"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="Введите email"
                        />
                        <input
                            className="modal__input"
                            type="password"
                            name="password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            placeholder="Введите пароль"
                        />
                        <button
                            className={`${s.modalBtnEnter}`}
                            type="button"
                            onClick={responseToken}
                        >
                            <span>Войти</span>
                        </button>
                        <button className={`${s.modalBtnSignup}`} type="button">
                            <Link to="/registration">Зарегистрироваться</Link>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AuthPage;
