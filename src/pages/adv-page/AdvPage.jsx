import MainAdv from '../../components/main-adv/MainAdv';
import MenuToBack from '../../components/menu-to-back/MenuToBack';
import s from './AdvPage.module.css';
import { adsUnRegisteredAPI } from '../../services/unRegisteredUserService';

function AdvPage() {
    const choseAdvID = localStorage.getItem('advID');
    const { data: getChoseAdv } = adsUnRegisteredAPI.useGetChoseAdvQuery(
        Number(choseAdvID),
    );
    const { data: dataImage } =
        adsUnRegisteredAPI.useGetChoseImageQuery(choseAdvID);
    console.log(dataImage);
    console.log(getChoseAdv);
    return (
        <div className={s.main}>
            <div className={s.mainContainer}>
                <MenuToBack />
                <MainAdv getChoseAdv={getChoseAdv} dataImage={dataImage} />
            </div>
        </div>
    );
}

export default AdvPage;
