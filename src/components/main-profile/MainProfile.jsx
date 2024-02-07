/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import HeadingH3 from '../heading-h3/HeadingH3';
import s from './MainProfile.module.css';

function MainProfile({ userData }) {
    const { register, handleSubmit, reset } = useForm({ mode: 'onBlur' });

    function onSubmit(data) {
        console.log(data);
        reset();
    }

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
                        <form
                            className={s.settingsForm}
                            action="#"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className={s.settingsDiv}>
                                <label htmlFor="fname">Имя</label>
                                <input
                                    {...register('name')}
                                    className={s.settingsFName}
                                    type="text"
                                    defaultValue={userData?.name}
                                />
                            </div>
                            <div className={s.settingsDiv}>
                                <label htmlFor="lname">Фамилия</label>
                                <input
                                    {...register('surname')}
                                    className={s.settingsLName}
                                    type="text"
                                    defaultValue={userData?.surname}
                                />
                            </div>
                            <div className={s.settingsDiv}>
                                <label htmlFor="city">Город</label>
                                <input
                                    {...register('city')}
                                    className={s.settingsCity}
                                    type="text"
                                    defaultValue={userData?.city}
                                />
                            </div>
                            <div className={s.settingsDiv}>
                                <label htmlFor="phone">Телефон</label>
                                <input
                                    {...register('phone')}
                                    className={s.settingsPhone}
                                    type="phone"
                                    name="phone"
                                    id="phone"
                                    defaultValue={userData?.phone}
                                />
                            </div>

                            <button className={s.settingsBtn} type="submit">
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
