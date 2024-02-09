import '../../App.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import s from './AuthPage.module.css';
import { getAccessTokenAPI } from '../../services/getAccessTokenService';
import { setAuth } from '../../redux/slices/authSlice';

function AuthPage() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ mode: 'onBlur' });
    const [error, setError] = useState();
    const [postAccessToken] = getAccessTokenAPI.usePostAccessTokenMutation();
    const dispatch = useDispatch();
    const responseToken = (data) => {
        postAccessToken({ email: data.email, password: data.password })
            .then((response) => {
                dispatch(
                    setAuth({
                        access: response.data.access_token,
                        refresh: response.data.refresh_token,
                        user: JSON.parse(localStorage.getItem('userDataInfo')),
                    }),
                );
                localStorage.setItem(
                    'access_token',
                    response?.data?.access_token.toString(),
                );
                localStorage.setItem(
                    'refresh_token',
                    response?.data?.refresh_token.toString(),
                );
                window.location.assign('/profile');
                setError('');
            })
            .catch(() => {
                setError('Проверьте правильность ввода логина или пароля');
                localStorage.setItem('userDataInfo', null);
            });
    };
    const onSubmit = (data) => {
        setError('');
        responseToken(data);
        reset();
    };

    return (
        <div className={s.wrapper}>
            <div className={s.containerEnter}>
                <div className="modal__block">
                    <form
                        className="modal__form-login"
                        action=""
                        onSubmit={handleSubmit(onSubmit)}
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
                            placeholder="Введите email"
                            {...register('email', {
                                required: 'Поле обязательно к заполнению',
                            })}
                        />
                        <span className={s.error}>
                            {errors?.email?.message}
                        </span>

                        <input
                            className="modal__input"
                            type="password"
                            name="password"
                            placeholder="Введите пароль"
                            {...register('password', {
                                required: 'Поле обязательно к заполнению',
                            })}
                        />
                        <span className={s.error}>
                            {errors?.password?.message}
                        </span>

                        <button className={`${s.modalBtnEnter}`} type="submit">
                            <span>Войти</span>
                        </button>
                        <button className={`${s.modalBtnSignup}`} type="button">
                            <Link to="/registration">Зарегистрироваться</Link>
                        </button>
                        {error ? <span className={s.error}>{error}</span> : ''}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AuthPage;
