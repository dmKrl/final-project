/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import s from '../../modals/add-new-adv/AddNewAdv.module.css';
import { adsAPI } from '../../services/getAccessTokenService';

function FormModal(props) {
    const location = useLocation();
    const [image] = useState([]);
    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
    } = useForm({ mode: 'onBlur' });
    const [postAdv] = adsAPI.usePostAdvWithOnlyTextMutation();
    const [updatePost] = adsAPI.useUpdateUserAdvMutation();
    const [postImagesAdv] = adsAPI.usePostImagesAdvMutation();

    function UploadUserAvatar(event) {
        event.preventDefault();
        const selectedFile = event.target.files[0];
        image.push(selectedFile);
    }

    function onSubmit(data) {
        if (location.pathname === '/add-new-adv') {
            postAdv(data);
        } else {
            updatePost({ data, pk: props.choseAdvID })
                .unwrap()
                .then((response) => {
                    if (image) {
                        for (let i = 0; i < image.length; i++) {
                            postImagesAdv({ data: image[i], pk: response.id });
                        }
                    }
                });
        }
        window.location.assign('/');
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
                    defaultValue={props.newArtInput}
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
                    defaultValue={props.newArtArea}
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
                            onChange={UploadUserAvatar}
                        />
                    </div>
                    <div className={s.formNewArtImg}>
                        <input
                            className={s.formNewArtImgCover}
                            type="file"
                            src=""
                            alt=""
                            onChange={UploadUserAvatar}
                        />
                        <div className={s.formNewArtImgCover} />
                    </div>
                    <div className={s.formNewArtImg}>
                        <input
                            className={s.formNewArtImgCover}
                            type="file"
                            src=""
                            alt=""
                            onChange={UploadUserAvatar}
                        />
                        <div className={s.formNewArtImgCover} />
                    </div>
                    <div className={s.formNewArtImg}>
                        <input
                            className={s.formNewArtImgCover}
                            type="file"
                            src=""
                            alt=""
                            onChange={UploadUserAvatar}
                        />
                        <div className={s.formNewArtImgCover} />
                    </div>
                    <div className={s.formNewArtImg}>
                        <input
                            className={s.formNewArtImgCover}
                            type="file"
                            src=""
                            alt=""
                            onChange={UploadUserAvatar}
                        />
                        <div className={s.formNewArtImgCover} />
                    </div>
                </div>
            </div>
            <div className={`${s.formNewArtBlock} ${s.blockPrice}`}>
                <label htmlFor="">Цена</label>
                <input
                    className={s.formNewArtInputPrice}
                    type="number"
                    defaultValue={props.newArtPrice}
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
