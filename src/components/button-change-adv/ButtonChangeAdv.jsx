import { Link } from 'react-router-dom';
import { adsAPI } from '../../services/getAccessTokenService';
import s from './ButtonChangeAdv.module.css';

function ButtonChangeAdv() {
    const choseAdvID = localStorage.getItem('advID');
    const [deleteAdv] = adsAPI.useDeleteChosenAdvMutation();

    function deleteChoseAdv() {
        deleteAdv(choseAdvID);
        window.location.assign('/');
    }

    return (
        <div className={s.articleBtnBlock}>
            <button type="button" className={`${s.articleBtn} ${s.btnRedact}`}>
                <Link to="/adv-settings">Редактировать</Link>
            </button>
            <button
                type="button"
                className={`${s.articleBtn} ${s.btnRemove}`}
                onClick={deleteChoseAdv}
            >
                Снять с публикации
            </button>
        </div>
    );
}

export default ButtonChangeAdv;
