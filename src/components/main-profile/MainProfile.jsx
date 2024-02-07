/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from 'react-router-dom';
import HeadingH3 from '../heading-h3/HeadingH3';
import s from './MainProfile.module.css';
import FormProfile from '../form-profile/FormProfile';

function MainProfile({ userData }) {
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
                        <button className={s.settingsChangePhoto} type="button">
                            Заменить
                        </button>
                    </div>
                    <div className={s.settingsRight}>
                        <FormProfile userData={userData} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainProfile;
