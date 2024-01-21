import { Link, useLocation } from 'react-router-dom';
import s from './Header.module.css';

function Header() {
    const location = useLocation();
    return (
        <header className={s.header}>
            <nav className={s.headerNav}>
                {location.pathname === '/' ? (
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
                        <Link to="/auth">
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
                    </>
                )}
            </nav>
        </header>
    );
}

export default Header;
