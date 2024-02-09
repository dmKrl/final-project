import { useState } from 'react';
import s from './ButtonShowNum.module.css';

function ButtonShowNum({ phoneNumber }) {
    const [isShowingNumber, setIsShowingNumber] = useState(false);
    return (
        <button
            type="button"
            className={s.articleBtn}
            onClick={() => setIsShowingNumber(!isShowingNumber)}
        >
            Показать телефон
            {isShowingNumber ? (
                <span>{phoneNumber}</span>
            ) : (
                <span>XXX XXX XX XX</span>
            )}
        </button>
    );
}

export default ButtonShowNum;
