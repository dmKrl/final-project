/* eslint-disable jsx-a11y/label-has-associated-control */
import { useForm } from 'react-hook-form';
import s from '../../modals/add-new-adv/AddNewAdv.module.css';
import { adsAPI } from '../../services/getAccessTokenService';

function FormModal(props) {
    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
    } = useForm({ mode: 'onBlur' });
    const [postAdv] = adsAPI.usePostAdvWithOnlyTextMutation();

    function onSubmit(data) {
        postAdv(data);
        reset();
        window.location.assign('/');
    }
    return (
        <form
            className={`${s.modalFormNewArt} ${s.formNewArt}`}
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className={s.formNewArtBlock}>
                <label htmlFor="">Название</label>
                <input
                    className={s.formNewArtInput}
                    type="text"
                    name="name"
                    value={props.newArtInput}
                    id="formName"
                    placeholder="Введите название"
                    {...register('title', {
                        required: 'Поле обязательно к заполнению',
                    })}
                />
                <span className={s.error}>{errors?.name?.message}</span>
            </div>
            <div className={s.formNewArtBlock}>
                <label htmlFor="">Описание</label>
                <textarea
                    className={s.formNewArtArea}
                    name="text"
                    value={props.newArtArea}
                    id="formArea"
                    cols="auto"
                    rows="10"
                    placeholder="Введите описание"
                    {...register('description')}
                />
            </div>
            <div className={s.formNewArtBlock}>
                <p className={s.formNewArtP}>
                    Фотографии товара
                    <span>не более 5 фотографий</span>
                </p>
                <div className={s.formNewArtBarImg}>
                    <div className={s.formNewArtImg}>
                        <input
                            className={s.formNewArtImgCover}
                            type="file"
                            src=""
                            alt=""
                        />
                    </div>
                    <div className={s.formNewArtImg}>
                        <img className={s.formNewArtImgCover} src="" alt="" />
                        <div className={s.formNewArtImgCover} />
                    </div>
                    <div className={s.formNewArtImg}>
                        <img className={s.formNewArtImgCover} src="" alt="" />
                        <div className={s.formNewArtImgCover} />
                    </div>
                    <div className={s.formNewArtImg}>
                        <img className={s.formNewArtImgCover} src="" alt="" />
                        <div className={s.formNewArtImgCover} />
                    </div>
                    <div className={s.formNewArtImg}>
                        <img className={s.formNewArtImgCover} src="" alt="" />
                        <div className={s.formNewArtImgCover} />
                    </div>
                </div>
            </div>
            <div className={`${s.formNewArtBlock} ${s.blockPrice}`}>
                <label htmlFor="">Цена</label>
                <input
                    className={s.formNewArtInputPrice}
                    type="number"
                    {...register('price', {
                        required: 'Поле обязательно к заполнению',
                    })}
                />
                <div className={s.formNewArtInputPriceCover} />
                <span className={`${s.error} ${s.errorBottom}`}>
                    {errors?.price?.message}
                </span>
            </div>
            <button
                type="submit"
                className={`${s.formNewArtBtnPub} ${s.btnHov02}`}
            >
                Опубликовать
            </button>
        </form>
    );
}

export default FormModal;
