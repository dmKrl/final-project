import { Link } from 'react-router-dom';
import s from './MainSellerProfile.module.css';
import HeadingH3 from '../heading-h3/HeadingH3';
import ButtonShowNum from '../button-show-num/ButtonShowNum';

function MainSellerProfile() {
    return (
        <div className={s.mainProfileSell}>
            <div className={s.profileSellContent}>
                <div className={s.profileSellSeller}>
                    <div className={s.sellerLeft}>
                        <div className={s.sellerImg}>
                            <Link to="/">
                                <img src="" alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className={s.sellerRight}>
                        <HeadingH3>Кирилл Матвеев</HeadingH3>
                        <p className={s.sellerCity}>Санкт-Петербург</p>
                        <p className={s.sellerInf}>
                            Продаёт товары с августа 2021
                        </p>
                        <ButtonShowNum />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainSellerProfile;
