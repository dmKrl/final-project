import MainAdv from '../../components/main-adv/MainAdv';
import MenuToBack from '../../components/menu-to-back/MenuToBack';
import s from './AdvPage.module.css';
import { adsUnRegisteredAPI } from '../../services/unRegisteredUserService';

function AdvPage() {
    const choseAdvID = localStorage.getItem('advID');
    const { data: getChoseAdv } = adsUnRegisteredAPI.useGetChoseAdvQuery(
        Number(choseAdvID),
    );
    return (
        <div className={s.main}>
            <div className={s.mainContainer}>
                <MenuToBack />
                <MainAdv getChoseAdv={getChoseAdv} />
            </div>
        </div>
    );
}

export default AdvPage;
