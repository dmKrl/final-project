import { Link } from 'react-router-dom';
import s from './Header.module.css';

function Header() {
    return (
        <header className={s.header}>
            <nav className={s.headerNav}>
                {localStorage.getItem('access_token') === 'null' ? (
                    <Link to="/auth">
                        <button
                            type="button"
                            className={`${s.headerBtnMainEnter} ${s.btnHov01}`}
                        >
                            Вход в личный кабинет
                        </button>
                    </Link>
                ) : (
                    <>
                        <Link to="/add-new-adv">
                            <button
                                type="button"
                                className={`${s.headerBtnMainEnter} ${s.btnHov01}`}
                            >
                                Разместить объявление
                            </button>
                        </Link>
                        <Link to="/profile">
                            <button
                                type="button"
                                className={`${s.headerBtnMainEnter} ${s.btnHov01}`}
                            >
                                Личный кабинет
                            </button>
                        </Link>
                        <Link to="/auth">
                            <button
                                type="button"
                                className={`${s.headerBtnMainEnter} ${s.btnHov01}`}
                                onClick={() =>
                                    localStorage.setItem('access_token', null)
                                }
                            >
                                Выйти
                            </button>
                        </Link>
                    </>
                )}
            </nav>
        </header>
    );
}

export default Header;
