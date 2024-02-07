import s from './ProfilePage.module.css';
import MenuToBack from '../../components/menu-to-back/MenuToBack';
import HeadingH2 from '../../components/UI/heading-h2/HeadingH2';
import MainContentCards from '../../components/main-content-cards/MainContentCards';
import HeadingH3 from '../../components/heading-h3/HeadingH3';
import MainProfile from '../../components/main-profile/MainProfile';
import { adsAPI, userAPI } from '../../services/getAccessTokenService';

function ProfilePage() {
    const { data: useInfo } = userAPI.useGetAuthUserQuery();
    const { data: userAds } = adsAPI.useGetAdsAuthUserQuery();

    return (
        <div>
            <div className={s.mainContainer}>
                <MenuToBack />
                <HeadingH2>Здравствуйте, {useInfo?.name}!</HeadingH2>
                <MainProfile userData={useInfo} />
                <HeadingH3>Мои товары</HeadingH3>
                {!userAds?.length ? (
                    'Список товаров пуст'
                ) : (
                    <MainContentCards cardAds={userAds} />
                )}
            </div>
        </div>
    );
}

export default ProfilePage;
