import MainAdv from '../../components/main-adv/MainAdv';
import MenuToBack from '../../components/menu-to-back/MenuToBack';
import s from './AdvPage.module.css';
import {
    adsUnRegisteredAPI,
    commentsUnRegisteredAPI,
} from '../../services/unRegisteredUserService';

function AdvPage() {
    const choseAdvID = localStorage.getItem('advID');
    console.log(choseAdvID);
    const { data: getChoseAdv } = adsUnRegisteredAPI.useGetChoseAdvQuery(
        Number(choseAdvID),
    );

    const { data: getReviewsForAdv } =
        commentsUnRegisteredAPI.useGetReviewsForAdvQuery(choseAdvID);
    return (
        <div className={s.main}>
            <div className={s.mainContainer}>
                <MenuToBack />
                <MainAdv
                    getChoseAdv={getChoseAdv}
                    getReviewsForAdv={getReviewsForAdv}
                />
            </div>
        </div>
    );
}

export default AdvPage;
