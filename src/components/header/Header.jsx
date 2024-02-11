import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import s from './Header.module.css';
import { setAuth } from '../../redux/slices/authSlice';

function Header() {
    const dispatch = useDispatch();
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
                                onClick={() => {
                                    dispatch(setAuth(null));
                                    localStorage.setItem('access_token', null);
                                }}
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
