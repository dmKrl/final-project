/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from 'react-router-dom';
import FormModalAdd from '../../components/form-modals/FormModalAdd';
import HeadingH3 from '../../components/heading-h3/HeadingH3';
import s from './AddNewAdv.module.css';

function AddNewAdv() {
    return (
        <div className={s.wrapper}>
            <div className={s.containerBg}>
                <div className={s.modalBlock}>
                    <div className={s.modalContent}>
                        <HeadingH3>Новое объявление</HeadingH3>
                        <div className={s.modalBtnClose}>
                            <Link to="/profile">
                                <div className={s.modalBtnCloseLine} />
                            </Link>
                        </div>
                        <FormModalAdd />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddNewAdv;
