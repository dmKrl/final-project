import '../../App.css';
import { Link } from 'react-router-dom';
import s from './AuthPage.module.css';

function AuthPage() {
    return (
        <div className={s.wrapper}>
            <div className={s.containerEnter}>
                <div className="modal__block">
                    <form className="modal__form-login" action="">
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
                        />
                        <input
                            className="modal__input"
                            type="password"
                            name="password"
                            placeholder="Введите пароль"
                        />
                        <button className={`${s.modalBtnEnter}`} type="button">
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
