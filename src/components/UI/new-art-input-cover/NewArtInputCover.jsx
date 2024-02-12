/* eslint-disable jsx-a11y/label-has-associated-control */
import s from '../../../modals/add-new-adv/AddNewAdv.module.css';

function NewArtInputCover({ UploadUserAvatar, imagesPreLoad }) {
    return (
        <div className={s.formNewArtImg}>
            <input
                className={s.formNewArtInputCover}
                type="file"
                id="input1"
                onChange={UploadUserAvatar}
            />
            {imagesPreLoad ? (
                <img src={imagesPreLoad} alt="" />
            ) : (
                <label htmlFor="input1" className={s.formNewArtImgCover} />
            )}
        </div>
    );
}

export default NewArtInputCover;
