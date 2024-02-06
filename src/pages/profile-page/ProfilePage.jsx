import s from './ProfilePage.module.css';
import MenuToBack from '../../components/menu-to-back/MenuToBack';
import HeadingH2 from '../../components/UI/heading-h2/HeadingH2';
import MainContentCards from '../../components/main-content-cards/MainContentCards';
import HeadingH3 from '../../components/heading-h3/HeadingH3';
import MainProfile from '../../components/main-profile/MainProfile';
import { adsAPI } from '../../services/getAccessTokenService';

function ProfilePage() {
    const userData = JSON.parse(localStorage.getItem('userDataInfo'));
    const { data: userAds } = adsAPI.useGetAdsAuthUserQuery();

    console.log(userAds);
    return (
        <div>
            <div className={s.mainContainer}>
                <MenuToBack />
                <HeadingH2>Здравствуйте, {userData.name}!</HeadingH2>
                <MainProfile userData={userData} />
                <HeadingH3>Мои товары</HeadingH3>
                <MainContentCards />
            </div>
        </div>
    );
}

export default ProfilePage;
