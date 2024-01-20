import Logo from '../UI/logo/Logo';
import s from './Search.module.css';

function Search() {
    function onSubmit(event) {
        event.preventDefault();
    }
    return (
        <div className={s.mainSearch}>
            <Logo />
            <form action="#" className={s.searchForm}>
                <input
                    className={s.searchText}
                    type="text"
                    placeholder="Поиск по объявлениям"
                    name="search"
                />
                <button
                    className={`${s.searchBtn} ${s.btnHov02}`}
                    type="button"
                    onSubmit={onSubmit}
                >
                    Найти
                </button>
            </form>
        </div>
    );
}

export default Search;
