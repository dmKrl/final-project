import { Link } from 'react-router-dom';
import s from './CardItem.module.css';
import changeDate from '../../../app/changeDate';

function CardItem({ ad }) {
    const { title, price, description, created_on: createdOn, images } = ad;
    function addToStoreSelectedAdv() {
        localStorage.setItem('advID', ad.id);
    }

    return (
        <div className={s.cardsItem}>
            <div className={s.cardsCard}>
                <Link
                    to={`/adv-page/${ad.id}`}
                    className=""
                    onClick={addToStoreSelectedAdv}
                >
                    <div className={s.cardImage}>
                        {!images[0]?.url ? (
                            'Нет фото'
                        ) : (
                            <img
                                src={`http://localhost:8090/${images[0]?.url}`}
                                alt=""
                            />
                        )}
                    </div>
                    <div className={s.cardContent}>
                        <h3 className={s.cardTitle}>{title}</h3>
                        <p className={s.cardPrice}>{price} руб.</p>
                        <p className={s.cardPlace}>{description}</p>
                        <p className={s.cardDate}>{changeDate(createdOn)}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default CardItem;
