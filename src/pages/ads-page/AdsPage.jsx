import CardItem from '../../components/UI/CardItem/CardItem';
import Search from '../../components/search/Search';
import s from './AdsPage.module.css';

function MainPage() {
    return (
        <div className={s.main}>
            <Search />
            <div className={s.mainContainer}>
                <h2 className={s.mainH2}>Объявления</h2>
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
            </div>
        </div>
    );
}

export default MainPage;
