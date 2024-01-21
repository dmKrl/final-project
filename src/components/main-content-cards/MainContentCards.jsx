import CardItem from '../UI/card-item/CardItem';
import s from './MainContentCards.module.css';

function MainContentCards() {
    return (
        <div className={s.mainContent}>
            <div className={s.cards}>
                <CardItem
                    price="2 200 ₽"
                    place="Санкт Петербург"
                    text="Ракетка для большого тенниса Triumph Pro ST"
                    date="Сегодня в 10:45"
                />
                <CardItem
                    price="2 200 ₽"
                    place="Санкт Петербург"
                    text="Ракетка для большого тенниса Triumph Pro ST"
                    date="Сегодня в 10:45"
                />
                <CardItem
                    price="2 200 ₽"
                    place="Санкт Петербург"
                    text="Ракетка для большого тенниса Triumph Pro ST"
                    date="Сегодня в 10:45"
                />
                <CardItem
                    price="2 200 ₽"
                    place="Санкт Петербург"
                    text="Ракетка для большого тенниса Triumph Pro ST"
                    date="Сегодня в 10:45"
                />
                <CardItem
                    price="2 200 ₽"
                    place="Санкт Петербург"
                    text="Ракетка для большого тенниса Triumph Pro ST"
                    date="Сегодня в 10:45"
                />
                <CardItem
                    price="2 200 ₽"
                    place="Санкт Петербург"
                    text="Ракетка для большого тенниса Triumph Pro ST"
                    date="Сегодня в 10:45"
                />
            </div>
        </div>
    );
}

export default MainContentCards;
