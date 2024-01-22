import { Link, useLocation } from 'react-router-dom';
import HeadingH3 from '../heading-h3/HeadingH3';
import s from './MainAdv.module.css';
import ButtonShowNum from '../button-show-num/ButtonShowNum';
import ButtonChangeAdv from '../button-change-adv/ButtonChangeAdv';

function MainAdv() {
    const loaction = useLocation();
    return (
        <div>
            <div className={s.mainArtic}>
                <div className={s.mainContent}>
                    <div className={s.articleLeft}>
                        <div className={s.articleFillImg}>
                            <div className={s.articleImg}>
                                <img src="" alt="" />
                            </div>
                            <div className={s.articleImgBar}>
                                <div className={s.articleImgBarDiv}>
                                    <img src="" alt="" />
                                </div>
                                <div className={s.articleImgBarDiv}>
                                    <img src="" alt="" />
                                </div>
                                <div className={s.articleImgBarDiv}>
                                    <img src="" alt="" />
                                </div>
                                <div className={s.articleImgBarDiv}>
                                    <img src="" alt="" />
                                </div>
                                <div className={s.articleImgBarDiv}>
                                    <img src="" alt="" />
                                </div>
                                <div className={s.articleImgBarDiv}>
                                    <img src="" alt="" />
                                </div>
                                <div className={s.articleImgBarDiv}>
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.articleRight}>
                    <div className={s.articleBlock}>
                        <HeadingH3>
                            Ракетка для большого тенниса Triumph Pro STС Б/У
                        </HeadingH3>
                        <div className={s.articleInfo}>
                            <p className={s.articleDate}>Сегодня в 10:45</p>
                            <p className={s.articleCity}>Санкт-Петербург</p>
                            <Link className={s.articleLink} to="/adv-page">
                                23 отзыва
                            </Link>
                        </div>
                        <p className={s.articlePrice}>2 200 ₽</p>
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
                                <Link
                                    to="/seller-profile"
                                    className={s.authorName}
                                >
                                    Кирилл
                                </Link>
                                <p className={s.authorAbout}>
                                    Продаёт товары с августа 2021
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.mainContainer}>
                <HeadingH3>Описание товара</HeadingH3>
                <div className={s.mainContent}>
                    <p className={s.mainText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MainAdv;
