import CardItem from '../UI/card-item/CardItem';
import s from './MainContentCards.module.css';
import { adsAPI } from '../../services/getAccessTokenService';

function MainContentCards() {
    const { data: allAds } = adsAPI.useGetAllAdsQuery();
    console.log(allAds);
    return (
        <div className={s.mainContent}>
            <div className={s.cards}>
                {allAds?.map((ad) => {
                    return (
                        <CardItem
                            price={ad.price}
                            place={ad.description}
                            text={ad.title}
                            date={ad.created_on}
                            image={ad.images[0]}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default MainContentCards;
