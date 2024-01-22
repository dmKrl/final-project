import '../../App.css';
import { Link } from 'react-router-dom';
import s from './RegistrationPage.module.css';

function RegistrationPage() {
    return (
        <div className={s.wrapper}>
            <div className={s.containerSignup}>
                <div className="modal__block">
                    <form className={s.modalFormRegister} action="">
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
                        />
                        <input
                            className={`${s.modalInputSignup} modal__input password`}
                            type="password"
                            name="password"
                            placeholder="Введите пароль"
                        />
                        <input
                            className={`${s.modalInputSignup} modal__input password`}
                            type="password"
                            name="password"
                            placeholder="Повторите пароль"
                        />
                        <input
                            className={`${s.modalInputSignup} modal__input`}
                            type="text"
                            name="first-name"
                            placeholder="Имя (необязательно)"
                        />
                        <input
                            className={`${s.modalInputSignup} modal__input`}
                            type="text"
                            name="last-name"
                            placeholder="Фамилия (необязательно)"
                        />
                        <input
                            className={`${s.modalInputSignup} modal__input`}
                            type="text"
                            name="city"
                            placeholder="Город (необязательно)"
                        />
                        <button
                            className={`${s.modalBtnSignupEnt}`}
                            type="button"
                        >
                            <span>
                                <Link to="/profile">Зарегистрироваться</Link>
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegistrationPage;
