import { Outlet } from 'react-router-dom';
import s from './MainPage.module.css';
import Header from '../../components/header/Header';

function MainPage() {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <Header />
                <Outlet />
            </div>
        </div>
    );
}

export default MainPage;
