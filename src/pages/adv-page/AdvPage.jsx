import { useSelector } from 'react-redux';
import MainAdv from '../../components/main-adv/MainAdv';
import MenuToBack from '../../components/menu-to-back/MenuToBack';
import s from './AdvPage.module.css';
import { selectChosenAdv } from '../../redux/slices/adsSlice';

function AdvPage() {
    const choseAdv = useSelector(selectChosenAdv);
    console.log(choseAdv);
    return (
        <div className={s.main}>
            <div className={s.mainContainer}>
                <MenuToBack />
                <MainAdv chosenAdv={choseAdv} />
            </div>
        </div>
    );
}

export default AdvPage;
