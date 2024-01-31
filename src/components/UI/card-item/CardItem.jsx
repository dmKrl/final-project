import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import s from './CardItem.module.css';
import { setChosenAdv } from '../../../redux/slices/adsSlice';

function CardItem({ ad }) {
    const { title, price, description, created_on: createdOn, images } = ad;
    const dateTime = createdOn?.split('T')[0];
    const dispatch = useDispatch();
    function addToStoreSelectedAdv() {
        return dispatch(setChosenAdv(ad));
    }

    return (
        <div className={s.cardsItem}>
            <div className={s.cardsCard}>
                <div className={s.cardImage}>
                    <Link to="/" className="">
                        <img src={images?.url} alt="" />
                    </Link>
                </div>
                <div className={s.cardContent}>
                    <button type="button" onClick={addToStoreSelectedAdv}>
                        <Link to="/adv-page" className="">
                            <h3 className={s.cardTitle}>{title}</h3>
                        </Link>
                    </button>
                    <p className={s.cardPrice}>{price} руб.</p>
                    <p className={s.cardPlace}>{description}</p>
                    <p className={s.cardDate}>{dateTime}</p>
                </div>
            </div>
        </div>
    );
}

export default CardItem;
