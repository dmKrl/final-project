/* eslint-disable jsx-a11y/label-has-associated-control */
import HeadingH3 from '../../components/heading-h3/HeadingH3';
import Reviewer from '../../components/reviewer/Reviewer';
import s from './ProductReviews.module.css';

function ProductReviews() {
    return (
        <div className={s.wrapper}>
            <div className={s.containerBg}>
                <div className={s.modalBlock}>
                    <div className={s.modalContent}>
                        <HeadingH3>Отзывы о товаре</HeadingH3>
                        <div className={s.modalBtnClose}>
                            <div className={s.modalBtnCloseLine} />
                        </div>
                        <div className={s.modalScroll}>
                            <form
                                className={`${s.modalFormNewArt} ${s.formNewArt}`}
                                action="#"
                            >
                                <div className={s.formNewArtBlock}>
                                    <label htmlFor="">Добавить отзыв</label>
                                    <textarea
                                        className={s.formNewArtArea}
                                        name="text"
                                        id="formArea"
                                        cols="auto"
                                        rows="5"
                                        placeholder="Введите описание"
                                    />
                                </div>
                                <button
                                    type="button"
                                    className={`${s.formNewArtBtnPub} ${s.btnHov02}`}
                                >
                                    Опубликовать
                                </button>
                            </form>
                            <div className={s.modalReviews}>
                                <Reviewer
                                    reviewName="Олег"
                                    reviewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                    reviewDate="14 августа"
                                    reviewTitle="Комментарий"
                                />
                                <Reviewer
                                    reviewName="Олег"
                                    reviewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                    reviewDate="14 августа"
                                    reviewTitle="Комментарий"
                                />
                                <Reviewer
                                    reviewName="Олег"
                                    reviewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                    reviewDate="14 августа"
                                    reviewTitle="Комментарий"
                                />
                                <Reviewer
                                    reviewName="Олег"
                                    reviewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                    reviewDate="14 августа"
                                    reviewTitle="Комментарий"
                                />
                                <Reviewer
                                    reviewName="Олег"
                                    reviewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                    reviewDate="14 августа"
                                    reviewTitle="Комментарий"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductReviews;
