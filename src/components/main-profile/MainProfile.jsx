/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from 'react-router-dom';
import HeadingH3 from '../heading-h3/HeadingH3';
import s from './MainProfile.module.css';

function MainProfile() {
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
                        <form className={s.settingsForm} action="#">
                            <div className={s.settingsDiv}>
                                <label htmlFor="fname">Имя</label>
                                <input
                                    className={s.settingsFName}
                                    type="text"
                                    value="Дмитрий"
                                />
                            </div>
                            <div className={s.settingsDiv}>
                                <label htmlFor="lname">Фамилия</label>
                                <input
                                    className={s.settingsLName}
                                    value="Краличкин"
                                    type="text"
                                />
                            </div>
                            <div className={s.settingsDiv}>
                                <label htmlFor="city">Город</label>
                                <input
                                    className={s.settingsCity}
                                    type="text"
                                    value="Камчатский край"
                                />
                            </div>
                            <div className={s.settingsDiv}>
                                <label htmlFor="phone">Телефон</label>
                                <input
                                    className={s.settingsPhone}
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    value="89161234567"
                                />
                            </div>

                            <button className={s.settingsBtn} type="button">
                                Сохранить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainProfile;
