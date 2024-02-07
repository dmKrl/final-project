/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from 'react-router-dom';
import { useState } from 'react';
import HeadingH3 from '../heading-h3/HeadingH3';
import s from './MainProfile.module.css';
import FormProfile from '../form-profile/FormProfile';

function MainProfile({ userData }) {
    const [image, setImage] = useState('');
    return (
        <div className={s.mainProfile}>
            <div className={s.profileContent}>
                <HeadingH3>Настройки профиля</HeadingH3>
                <div className={s.profileSettings}>
                    <div className={s.settingsLeft}>
                        <div className={s.settingsImg}>
                            <Link to="/">
                                <img src="" alt="" />
                            </Link>
                        </div>
                        <input
                            id="change"
                            className={s.settingsChangePhoto}
                            type="file"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
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
