import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Logo from '../UI/logo/Logo';
import s from './Search.module.css';
import {
    selectFilterAds,
    setFilteredAds,
} from '../../redux/slices/filterSlice';

function Search() {
    const dispatch = useDispatch();
    const filterAds = useSelector(selectFilterAds);
    const [filterValue, setFilterValue] = useState();
    console.log(filterAds);
    function handleFilterAds() {
        dispatch(setFilteredAds(filterValue));
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
                    onChange={(e) => setFilterValue(e.target.value)}
                />
                <button
                    className={`${s.searchBtn} ${s.btnHov02}`}
                    type="button"
                    onClick={handleFilterAds}
                >
                    Найти
                </button>
            </div>
        </div>
    );
}

export default Search;
