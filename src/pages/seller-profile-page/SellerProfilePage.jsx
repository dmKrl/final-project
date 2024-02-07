import s from './SellerProfilePage.module.css';
import HeadingH2 from '../../components/UI/heading-h2/HeadingH2';
import MenuToBack from '../../components/menu-to-back/MenuToBack';
import MainContentCards from '../../components/main-content-cards/MainContentCards';
import HeadingH3 from '../../components/heading-h3/HeadingH3';
import MainSellerProfile from '../../components/main-seller-profile/MainSellerProfile';
import { adsUnRegisteredAPI } from '../../services/unRegisteredUserService';

function SellerProfilePage() {
    const choseAdvID = localStorage.getItem('advID');
    const { data: allAds } = adsUnRegisteredAPI.useGetAllAdsQuery();
    const { data: getChoseAdv } = adsUnRegisteredAPI.useGetChoseAdvQuery(
        Number(choseAdvID),
    );
    function findAllUserAds() {
        return allAds?.filter((card) => {
            if (card.user.id === getChoseAdv?.user.id) {
                return card;
            }
            return false;
        });
    }
    return (
        <div className={s.mainContainer}>
            <MenuToBack />
            <HeadingH2>Профиль продавца</HeadingH2>
            <MainSellerProfile getChoseAdv={getChoseAdv} />
            <HeadingH3>Товары продавца</HeadingH3>
            <MainContentCards cardAds={findAllUserAds()} />
        </div>
    );
}

export default SellerProfilePage;
