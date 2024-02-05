import { useSelector } from 'react-redux';
import MainAdv from '../../components/main-adv/MainAdv';
import MenuToBack from '../../components/menu-to-back/MenuToBack';
import s from './AdvPage.module.css';
import { selectChosenAdv } from '../../redux/slices/adsSlice';
import { adsAPI } from '../../services/getAccessTokenService';

function AdvPage() {
    const choseAdv = useSelector(selectChosenAdv);
    const { data: getChoseAdv } = adsAPI.useGetChoseAdvQuery(Number(choseAdv));

    console.log(getChoseAdv);
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
