/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from '../../modals/add-new-adv/AddNewAdv.module.css';
import { adsAPI } from '../../services/getAccessTokenService';
import {
    clearImagesPreLoad,
    selectImagesPreLoad,
    setImagesPreLoad,
} from '../../redux/slices/adsSlice';
import NewArtInputCover from '../UI/new-art-input-cover/NewArtInputCover';

function FormModalSettings(props) {
    const dispatch = useDispatch();
    const [images, setImages] = useState([]);
    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
    } = useForm({ mode: 'onBlur' });
    const imagesPreLoad = useSelector(selectImagesPreLoad);
    const [updatePost] = adsAPI.useUpdateUserAdvMutation();
    const [postImagesAdv] = adsAPI.usePostImagesAdvMutation();

    function changePreLoadImage(selectedImage) {
        const reader = new FileReader();
        reader.readAsDataURL(selectedImage);
        reader.onloadend = () => {
            dispatch(setImagesPreLoad(reader.result));
        };
    }

    function redirectToAdvPage(id) {
        localStorage.setItem('advID', id);
        window.location.assign(`/adv-page/${localStorage.getItem('advID')}`);
    }

    function clearStatesWithImages() {
        setImages([]);
        dispatch(clearImagesPreLoad());
    }

    function UploadUserAvatar(event) {
        event.preventDefault();
        const selectedFile = event.target.files[0];
        if (!selectedFile) {
            return;
        }
        images.push(selectedFile);
        changePreLoadImage(selectedFile);
    }

    function onSubmit(data) {
        updatePost({ data, pk: props.choseAdvID })
            .unwrap()
            .then((response) => {
                if (images) {
                    for (let i = 0; i < images.length; i++) {
                        postImagesAdv({ data: images[i], pk: response.id });
                    }
                    setTimeout(() => {
                        clearStatesWithImages();
                        redirectToAdvPage(response.id);
                    }, 200);
                }
            });

        reset();
    }
    console.log(props.getChoseAdv);
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
                    {}
                    <NewArtInputCover
                        UploadUserAvatar={UploadUserAvatar}
                        imagesPreLoad={
                            props?.getChoseAdv?.images[0]?.url
                                ? `http://localhost:8090/${props?.getChoseAdv?.images[0]?.url}`
                                : imagesPreLoad[0]
                        }
                    />
                    <NewArtInputCover
                        UploadUserAvatar={UploadUserAvatar}
                        imagesPreLoad={
                            props?.getChoseAdv?.images[1]?.url
                                ? `http://localhost:8090/${props?.getChoseAdv?.images[1]?.url}`
                                : imagesPreLoad[1]
                        }
                    />
                    <NewArtInputCover
                        UploadUserAvatar={UploadUserAvatar}
                        imagesPreLoad={
                            props?.getChoseAdv?.images[2]?.url
                                ? `http://localhost:8090/${props?.getChoseAdv?.images[2]?.url}`
                                : imagesPreLoad[2]
                        }
                    />
                    <NewArtInputCover
                        UploadUserAvatar={UploadUserAvatar}
                        imagesPreLoad={
                            props?.getChoseAdv?.images[3]?.url
                                ? `http://localhost:8090/${props?.getChoseAdv?.images[3]?.url}`
                                : imagesPreLoad[3]
                        }
                    />
                    <NewArtInputCover
                        UploadUserAvatar={UploadUserAvatar}
                        imagesPreLoad={
                            props?.getChoseAdv?.images[4]?.url
                                ? `http://localhost:8090/${props?.getChoseAdv?.images[4]?.url}`
                                : imagesPreLoad[4]
                        }
                    />
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

export default FormModalSettings;
