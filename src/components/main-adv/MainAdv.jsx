import { Link, useLocation } from 'react-router-dom';
import HeadingH3 from '../heading-h3/HeadingH3';
import s from './MainAdv.module.css';
import ButtonShowNum from '../button-show-num/ButtonShowNum';
import ButtonChangeAdv from '../button-change-adv/ButtonChangeAdv';
import changeDate from '../../app/changeDate';

function MainAdv({ getChoseAdv, getReviewsForAdv }) {
    const loaction = useLocation();
    return (
        <div>
            <div className={s.mainArtic}>
                <div className={s.mainContent}>
                    <div className={s.articleLeft}>
                        <div className={s.articleFillImg}>
                            <div className={s.articleImg}>
                                <img
                                    src={`http://localhost:8090/${getChoseAdv?.images[0]?.url}`}
                                    alt=""
                                />
                            </div>
                            <div className={s.articleImgBar}>
                                {getChoseAdv?.images?.map((image, index) => {
                                    return (
                                        <div
                                            className={s.articleImgBarDiv}
                                            key={index}
                                        >
                                            <img
                                                src={`http://localhost:8090/${image?.url}`}
                                                alt=""
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.articleRight}>
                    <div className={s.articleBlock}>
                        <HeadingH3>{getChoseAdv?.title}</HeadingH3>
                        <div className={s.articleInfo}>
                            <p className={s.articleDate}>
                                {changeDate(getChoseAdv?.created_on)}
                            </p>
                            <p className={s.articleCity}>
                                {getChoseAdv?.user?.city}
                            </p>
                            <Link className={s.articleLink} to="/reviews">
                                {getReviewsForAdv?.length} отзыва
                            </Link>
                        </div>
                        <p className={s.articlePrice}>
                            {getChoseAdv?.price} рублей.
                        </p>
                        {loaction.pathname === '/adv-page' ? (
                            <ButtonShowNum />
                        ) : (
                            <ButtonChangeAdv />
                        )}

                        <div className={s.articleAuthor}>
                            <div className={s.authorImg}>
                                <img src="" alt="" />
                            </div>
                            <div className={s.authorCont}>
                                <button type="button">
                                    <Link
                                        to="/seller-profile"
                                        className={s.authorName}
                                    >
                                        {getChoseAdv?.user?.name}
                                    </Link>
                                </button>
                                <p className={s.authorAbout}>
                                    Продаёт товары с{' '}
                                    {changeDate(getChoseAdv?.user?.sells_from)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.mainContainer}>
                <HeadingH3>Описание товара</HeadingH3>
                <div className={s.mainContent}>
                    <p className={s.mainText}>{getChoseAdv?.description}</p>
                </div>
            </div>
        </div>
    );
}

export default MainAdv;
