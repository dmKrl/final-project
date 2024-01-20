import { Link } from 'react-router-dom';
import s from './Header.module.css';

function Header() {
    return (
        <header className={s.header}>
            <nav className={s.headerNav}>
                <Link to="/auth">
                    <button
                        type="button"
                        className={`${s.headerBtnMainEnter} ${s.btnHov01}`}
                    >
                        Вход в личный кабинет
                    </button>
                </Link>
            </nav>
        </header>
    );
}

export default Header;
