import { Link } from 'react-router-dom';
import s from './MainSellerProfile.module.css';
import HeadingH3 from '../heading-h3/HeadingH3';
import ButtonShowNum from '../button-show-num/ButtonShowNum';
import changeDate from '../../app/changeDate';

function MainSellerProfile({ getChoseAdv }) {
    console.log(getChoseAdv);
    return (
        <div className={s.mainProfileSell}>
            <div className={s.profileSellContent}>
                <div className={s.profileSellSeller}>
                    <div className={s.sellerLeft}>
                        <div className={s.sellerImg}>
                            <Link to="/">
                                <img
                                    src={`http://localhost:8090/${getChoseAdv?.user?.avatar}`}
                                    alt="user-avatar"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className={s.sellerRight}>
                        <HeadingH3>
                            {getChoseAdv?.user?.name}
                            {getChoseAdv?.user?.surname}
                        </HeadingH3>
                        <p className={s.sellerCity}>
                            {getChoseAdv?.user?.city}
                        </p>
                        <p className={s.sellerInf}>
                            Продаёт товары с{' '}
                            {changeDate(getChoseAdv?.user?.sells_from)}
                        </p>
                        <ButtonShowNum />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainSellerProfile;
