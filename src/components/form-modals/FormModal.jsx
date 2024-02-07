/* eslint-disable jsx-a11y/label-has-associated-control */
import { useForm } from 'react-hook-form';
import s from '../../modals/add-new-adv/AddNewAdv.module.css';

function FormModal(props) {
    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
    } = useForm();

    function onSubmit() {
        reset();
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
                    {...register('name', {
                        required: 'Поле обязательно к заполнению',
                    })}
                />
                <span>{errors?.name?.message}</span>
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
                />
            </div>
            <div className={s.formNewArtBlock}>
                <p className={s.formNewArtP}>
                    Фотографии товара
                    <span>не более 5 фотографий</span>
                </p>
                <div className={s.formNewArtBarImg}>
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
                <span>{errors?.price?.message}</span>
                <div className={s.formNewArtInputPriceCover} />
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
