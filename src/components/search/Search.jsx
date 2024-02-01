import { useDispatch, useSelector } from 'react-redux';
import Logo from '../UI/logo/Logo';
import s from './Search.module.css';
import {
    selectFilterAds,
    setFilteredAds,
} from '../../redux/slices/filterSlice';

function Search() {
    const dispatch = useDispatch();
    const filterAds = useSelector(selectFilterAds);
    console.log(filterAds);
    function handleFilterAds(event) {
        dispatch(setFilteredAds(event.target.value));
    }
    return (
        <div className={s.mainSearch}>
            <Logo />
            <div className={s.searchForm}>
                <input
                    className={s.searchText}
                    type="text"
                    placeholder="Поиск по объявлениям"
                    name="text"
                    defaultValue={filterAds}
                    onChange={handleFilterAds}
                />
                <button
                    className={`${s.searchBtn} ${s.btnHov02}`}
                    type="button"
                >
                    Найти
                </button>
            </div>
        </div>
    );
}

export default Search;
