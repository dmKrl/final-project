import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import s from '../../pages/auth-page/AuthPage.module.css';
import { userAPI } from '../../services/getAccessTokenService';
import { setAuth } from '../../redux/slices/authSlice';

function SetPassword() {
    const [setUserPassword] = userAPI.useSetUserPasswordMutation();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ mode: 'onBlur' });
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        setUserPassword(data).then(() => {
            reset();
            dispatch(setAuth(null));
            localStorage.setItem('access_token', null);
            window.location.assign('/auth');
        });
    };

    return (
        <div className={s.setPasswordContainer}>
            <form
                className={`modal__form-login ${s.modalFormSetPassword}`}
                action=""
                onSubmit={handleSubmit(onSubmit)}
            >
                <div>
                    <Link to="/profile">
                        <img
                            className="modal__logo"
                            src="/img/logo_modal.png"
                            alt=""
                        />
                    </Link>
                </div>
                <input
                    className="modal__input login"
                    type="password"
                    name="login"
                    placeholder="Введите старый пароль"
                    {...register('password_1', {
                        required: 'Поле обязательно к заполнению',
                    })}
                />
                <span className={s.error}>{errors?.password?.message}</span>

                <input
                    className="modal__input"
                    type="password"
                    name="password"
                    placeholder="Введите новый пароль"
                    {...register('password_2', {
                        required: 'Поле обязательно к заполнению',
                    })}
                />
                <span className={s.error}>
                    {errors?.repeatPassword?.message}
                </span>

                <button
                    className={`${s.modalBtnEnter} ${s.modalBtnEnterSetPassword}`}
                    type="submit"
                >
                    <span>Поменять пароль</span>
                </button>
                {/* {error ? <span className={s.error}>{error}</span> : ''} */}
            </form>
        </div>
    );
}

export default SetPassword;
