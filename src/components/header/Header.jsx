import s from './Header.module.css';

function Header() {
    return (
        <header className={s.header}>
            <nav className={s.headerNav}>
                <button
                    type="button"
                    className={`${s.headerBtnMainEnter} ${s.btnHov01}`}
                >
                    Вход в личный кабинет
                </button>
            </nav>
        </header>
    );
}

export default Header;
