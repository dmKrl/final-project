/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import HeadingH3 from '../../components/heading-h3/HeadingH3';
import Reviewer from '../../components/reviewer/Reviewer';
import s from './ProductReviews.module.css';
import changeDate from '../../app/changeDate';
import { commentsUnRegisteredAPI } from '../../services/unRegisteredUserService';
import { commentsRegisteredAPI } from '../../services/getAccessTokenService';

function ProductReviews() {
    const choseAdvID = localStorage.getItem('advID');
    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
    } = useForm({ mode: 'onBlur' });
    const [addReview] = commentsRegisteredAPI.usePostReviewsMutation();

    function onSubmit(data) {
        addReview({ data, pk: choseAdvID });
        reset();
    }

    const { data: getReviewsForAdv } =
        commentsUnRegisteredAPI.useGetReviewsForAdvQuery(choseAdvID);
    return (
        <div className={s.wrapper}>
            <div className={s.containerBg}>
                <div className={s.modalBlock}>
                    <div className={s.modalContent}>
                        <HeadingH3>Отзывы о товаре</HeadingH3>
                        <div className={s.modalBtnClose}>
                            <Link to={`/adv-page/${choseAdvID}`}>
                                <div className={s.modalBtnCloseLine} />
                            </Link>
                        </div>
                        <div className={s.modalScroll}>
                            <form
                                className={`${s.modalFormNewArt} ${s.formNewArt}`}
                                action="#"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <div className={s.formNewArtBlock}>
                                    <label htmlFor="">Добавить отзыв</label>
                                    <input
                                        {...register('review')}
                                        className={s.formNewArtArea}
                                        name="text"
                                        id="formArea"
                                        placeholder="Введите описание"
                                    />
                                    <span className={s.error}>
                                        {errors?.review?.message}
                                    </span>
                                </div>
                                <button
                                    type="submit"
                                    className={`${s.formNewArtBtnPub} ${s.btnHov02}`}
                                >
                                    Опубликовать
                                </button>
                            </form>
                            <div className={s.modalReviews}>
                                {getReviewsForAdv?.map((comment, index) => {
                                    return (
                                        <Reviewer
                                            reviewName={comment.author.name}
                                            reviewText={comment.text}
                                            reviewDate={changeDate(
                                                comment.created_on,
                                            )}
                                            reviewTitle="Комментарий"
                                            key={index}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductReviews;
