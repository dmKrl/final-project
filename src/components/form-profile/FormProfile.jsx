/* eslint-disable jsx-a11y/label-has-associated-control */
import { useForm } from 'react-hook-form';
import { userAPI } from '../../services/getAccessTokenService';
import s from '../main-profile/MainProfile.module.css';

function FormProfile({ userData, image }) {
    console.log(image);
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({ mode: 'onBlur' });
    const [patchUserAuth] = userAPI.usePatchAuthUserMutation();
    const [updateUserAvatar] = userAPI.useUpdateUserAvatarMutation();

    function onSubmit(data) {
        updateUserAvatar(image);
        patchUserAuth(data);
        reset();
    }
    return (
        <form
            className={s.settingsForm}
            action="#"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className={s.settingsDiv}>
                <label htmlFor="fname">Имя</label>
                <input
                    {...register('name', {
                        required: 'Поле обязательно к заполнению',
                        minLength: {
                            value: 1,
                            message: 'Минимум 1 символ',
                        },
                    })}
                    className={s.settingsFName}
                    type="text"
                    defaultValue={userData?.name}
                />
                <span>{errors?.name?.message}</span>
            </div>
            <div className={s.settingsDiv}>
                <label htmlFor="lname">Фамилия</label>
                <input
                    {...register('surname', {
                        required: 'Поле обязательно к заполнению',
                        minLength: {
                            value: 1,
                            message: 'Минимум 1 символ',
                        },
                    })}
                    className={s.settingsLName}
                    type="text"
                    defaultValue={userData?.surname}
                />
                <span>{errors?.surname?.message}</span>
            </div>
            <div className={s.settingsDiv}>
                <label htmlFor="city">Город</label>
                <input
                    {...register('city', {
                        required: 'Поле обязательно к заполнению',
                        minLength: {
                            value: 1,
                            message: 'Минимум 1 символ',
                        },
                    })}
                    className={s.settingsCity}
                    type="text"
                    defaultValue={userData?.city}
                />
                <span>{errors?.city?.message}</span>
            </div>
            <div className={s.settingsDiv}>
                <label htmlFor="phone">Телефон</label>
                <input
                    {...register('phone', {
                        required: 'Поле обязательно к заполнению',
                        minLength: {
                            value: 10,
                            message: 'Минимум 10 символов',
                        },
                    })}
                    className={s.settingsPhone}
                    type="phone"
                    name="phone"
                    id="phone"
                    defaultValue={userData?.phone}
                />
                <span>{errors?.phone?.message}</span>
            </div>

            <button className={s.settingsBtn} type="submit">
                Сохранить
            </button>
        </form>
    );
}

export default FormProfile;
