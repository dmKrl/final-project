import { Link } from 'react-router-dom';
import FormModalSettings from '../../components/form-modals/FormModalSettings';
import HeadingH3 from '../../components/heading-h3/HeadingH3';
import s from '../add-new-adv/AddNewAdv.module.css';
import { adsUnRegisteredAPI } from '../../services/unRegisteredUserService';

function AdvSettings() {
    const choseAdvID = localStorage.getItem('advID');
    const { data: getChoseAdv } = adsUnRegisteredAPI.useGetChoseAdvQuery(
        Number(choseAdvID),
    );
    return (
        <div className={s.wrapper}>
            <div className={s.containerBg}>
                <div className={s.modalBlock}>
                    <div className={s.modalContent}>
                        <HeadingH3>Редактировать объявление</HeadingH3>
                        <div className={s.modalBtnClose}>
                            <Link to="/">
                                <div className={s.modalBtnCloseLine} />
                            </Link>
                        </div>
                        <FormModalSettings
                            newArtArea={getChoseAdv?.description}
                            newArtInput={getChoseAdv?.title}
                            newArtPrice={getChoseAdv?.price}
                            choseAdvID={Number(choseAdvID)}
                            getChoseAdv={getChoseAdv}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdvSettings;
