import { Link } from 'react-router-dom';
import s from './CardItem.module.css';

function CardItem(props) {
    return (
        <div className={s.cardsItem}>
            <div className={s.cardsCard}>
                <div className={s.cardImage}>
                    <Link to="/" className="">
                        <img src="#" alt="" />
                    </Link>
                </div>
                <div className={s.cardContent}>
                    <Link to="/" className="">
                        <h3 className={s.cardTitle}>{props.text}</h3>
                    </Link>
                    <p className={s.cardPrice}>{props.price}</p>
                    <p className={s.cardPlace}>{props.place}</p>
                    <p className={s.cardDate}>{props.date}</p>
                </div>
            </div>
        </div>
    );
}

export default CardItem;
