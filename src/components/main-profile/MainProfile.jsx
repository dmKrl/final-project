/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from 'react-router-dom';
import { useState } from 'react';
import HeadingH3 from '../heading-h3/HeadingH3';
import s from './MainProfile.module.css';
import FormProfile from '../form-profile/FormProfile';

function MainProfile({ userData }) {
    const [image, setImage] = useState('');
    const [imagePreLoad, setImagePreLoad] = useState('');

    function UploadUserAvatar(event) {
        event.preventDefault();
        const selectedFile = event.target.files[0];
        setImage(selectedFile);
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = () => {
            setImagePreLoad(reader.result);
        };
    }
    return (
        <div className={s.mainProfile}>
            <div className={s.profileContent}>
                <HeadingH3>Настройки профиля</HeadingH3>
                <div className={s.profileSettings}>
                    <div className={s.settingsLeft}>
                        <div className={s.settingsImg}>
                            <Link to="/profile">
                                {imagePreLoad ? (
                                    <img src={imagePreLoad} alt="" />
                                ) : (
                                    <img
                                        src={`http://localhost:8090/${userData?.avatar}`}
                                        alt=""
                                    />
                                )}
                            </Link>
                        </div>
                        <input
                            id="change"
                            className={s.settingsChangePhoto}
                            type="file"
                            accept=".jpg, .jpeg, .png"
                            onChange={UploadUserAvatar}
                        />
                        <label htmlFor="change">Заменить</label>
                    </div>
                    <div className={s.settingsRight}>
                        <FormProfile userData={userData} image={image} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainProfile;
