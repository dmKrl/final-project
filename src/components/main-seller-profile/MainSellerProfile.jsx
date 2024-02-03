import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './MainSellerProfile.module.css';
import HeadingH3 from '../heading-h3/HeadingH3';
import ButtonShowNum from '../button-show-num/ButtonShowNum';
import { selectSellerInfo } from '../../redux/slices/sellerSlice';

function MainSellerProfile() {
    const sellerData = useSelector(selectSellerInfo);
    console.log(sellerData);
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
                        <HeadingH3>
                            {sellerData.name}
                            {sellerData.surname}
                        </HeadingH3>
                        <p className={s.sellerCity}>{sellerData.city}</p>
                        <p className={s.sellerInf}>
                            Продаёт товары с {sellerData.sells_from}
                        </p>
                        <ButtonShowNum />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainSellerProfile;
