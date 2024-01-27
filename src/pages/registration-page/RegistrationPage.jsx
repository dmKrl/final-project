import '../../App.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import s from './RegistrationPage.module.css';
import { getAccessTokenAPI } from '../../services/getAccessTokenService';
import { fetchPostRegister } from '../../api/api';
import { setAuth } from '../../redux/slices/authSlice';

function RegistrationPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [city, setCity] = useState('');
    const [postAccessToken] = getAccessTokenAPI.usePostAccessTokenMutation();
    const dispatch = useDispatch();
    const responseToken = async () => {
        const response = await postAccessToken({ email, password });
        const token = await response.json();
        dispatch(
            setAuth({
                access: token.data.access,
                refresh: token.data.refresh,
                user: JSON.parse(localStorage.getItem('userDataInfo')),
            }),
        );
    };
    const fetchForRegistration = async () => {
        try {
            console.log(1);
            const response = await fetchPostRegister({
                email,
                password,
                city,
                firstName,
                lastName,
            });
            responseToken();
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className={s.wrapper}>
            <div className={s.containerSignup}>
                <div className="modal__block">
                    <form
                        className={s.modalFormRegister}
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
                            className={`${s.wrap} modal__input login`}
                            type="text"
                            name="login"
                            placeholder="Введите email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <input
                            className={`${s.modalInputSignup} modal__input password`}
                            type="password"
                            name="password"
                            placeholder="Введите пароль"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                        />
                        <input
                            className={`${s.modalInputSignup} modal__input password`}
                            type="password"
                            name="repeat-password"
                            placeholder="Повторите пароль"
                            value={repeatPassword}
                            onChange={(event) =>
                                setRepeatPassword(event.target.value)
                            }
                        />
                        <input
                            className={`${s.modalInputSignup} modal__input`}
                            type="text"
                            name="first-name"
                            value={firstName}
                            onChange={(event) =>
                                setFirstName(event.target.value)
                            }
                            placeholder="Имя (необязательно)"
                        />
                        <input
                            className={`${s.modalInputSignup} modal__input`}
                            type="text"
                            name="last-name"
                            value={lastName}
                            onChange={(event) =>
                                setLastName(event.target.value)
                            }
                            placeholder="Фамилия (необязательно)"
                        />
                        <input
                            className={`${s.modalInputSignup} modal__input`}
                            type="text"
                            name="city"
                            value={city}
                            onChange={(event) => setCity(event.target.value)}
                            placeholder="Город (необязательно)"
                        />
                        <button
                            className={`${s.modalBtnSignupEnt}`}
                            type="button"
                            onClick={fetchForRegistration}
                        >
                            <span>Зарегистрироваться</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegistrationPage;
