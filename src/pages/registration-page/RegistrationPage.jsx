import '../../App.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import s from './RegistrationPage.module.css';
import { getAccessTokenAPI } from '../../services/getAccessTokenService';
import fetchPostRegister from '../../api/api';
import { setAuth } from '../../redux/slices/authSlice';

function RegistrationPage() {
    const [postAccessToken] = getAccessTokenAPI.usePostAccessTokenMutation();
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ mode: 'onBlur' });

    const responseToken = ({ email, password }) => {
        postAccessToken({ email, password })
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
                window.location.assign('./profile');
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const fetchForRegistration = async (data) => {
        try {
            console.log(1);
            await fetchPostRegister({
                email: data.email,
                password: data.password,
                city: data.city,
                firstName: data.firstName,
                lastName: data.lastName,
                phone: data.phone,
            });
            responseToken({ email: data.email, password: data.password });
        } catch (error) {
            console.log(error);
        }
    };

    const onSubmit = (data) => {
        fetchForRegistration(data);
        reset();
    };

    return (
        <div className={s.wrapper}>
            <div className={s.containerSignup}>
                <div className="modal__block">
                    <form
                        className={s.modalFormRegister}
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
                            className={`${s.wrap} modal__input login`}
                            type="text"
                            name="login"
                            placeholder="Введите email"
                            {...register('email', {
                                required: 'Поле обязательно к заполнению',
                            })}
                        />{' '}
                        <span className={s.error}>
                            {errors?.email?.message}
                        </span>
                        <input
                            className={`${s.modalInputSignup} modal__input password`}
                            type="password"
                            name="password"
                            placeholder="Введите пароль"
                            {...register('password', {
                                required: 'Поле обязательно к заполнению',
                            })}
                        />{' '}
                        <span className={s.error}>
                            {errors?.password?.message}
                        </span>
                        <input
                            className={`${s.modalInputSignup} modal__input password`}
                            type="password"
                            name="repeat-password"
                            placeholder="Повторите пароль"
                            {...register('repeatPassword', {
                                required: 'Поле обязательно к заполнению',
                            })}
                        />{' '}
                        <span className={s.error}>
                            {errors?.repeatPassword?.message}
                        </span>
                        <input
                            className={`${s.modalInputSignup} modal__input`}
                            type="text"
                            name="first-name"
                            {...register('firstName')}
                            placeholder="Имя (необязательно)"
                        />
                        <input
                            className={`${s.modalInputSignup} modal__input`}
                            type="text"
                            name="last-name"
                            {...register('lastName')}
                            placeholder="Фамилия (необязательно)"
                        />
                        <input
                            className={`${s.modalInputSignup} modal__input`}
                            type="text"
                            name="city"
                            {...register('city')}
                            placeholder="Город (необязательно)"
                        />
                        <input
                            className={`${s.modalInputSignup} modal__input`}
                            type="number"
                            name="phone"
                            {...register('phone')}
                            placeholder="Номер телефона (необязательно)"
                        />
                        <button
                            className={`${s.modalBtnSignupEnt}`}
                            type="submit"
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
