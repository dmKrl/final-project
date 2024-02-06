import { useSelector } from 'react-redux';
import CardItem from '../UI/card-item/CardItem';
import s from './MainContentCards.module.css';
import { selectFilterAds } from '../../redux/slices/filterSlice';
import { adsUnRegisteredAPI } from '../../services/unRegisteredUserService';

function MainContentCards() {
    const { data: allAds } = adsUnRegisteredAPI.useGetAllAdsQuery();
    const filterAds = useSelector(selectFilterAds);
    const filteredAds = allAds?.filter((ads) => {
        const matchesNameTrack = ads.title
            .toLowerCase()
            .includes(filterAds.toLowerCase());
        return matchesNameTrack;
    });
    return (
        <div className={s.mainWrapper}>
            <div className={s.mainContent}>
                <div className={s.cards}>
                    {filteredAds?.map((ad) => {
                        return <CardItem ad={ad} key={ad.id} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default MainContentCards;
