import HeadingH2 from '../../components/UI/heading-h2/HeadingH2';
import Search from '../../components/search/Search';
import s from './AdsPage.module.css';
import { adsUnRegisteredAPI } from '../../services/unRegisteredUserService';
import MainContentCards from '../../components/main-content-cards/MainContentCards';

function MainPage() {
    const { data: allAds } = adsUnRegisteredAPI.useGetAllAdsQuery();
    console.log(allAds);

    return (
        <div className={s.main}>
            <Search />
            <div className={s.mainContainer}>
                <HeadingH2>Объявления</HeadingH2>
                <MainContentCards cardAds={allAds} />
            </div>
        </div>
    );
}

export default MainPage;
