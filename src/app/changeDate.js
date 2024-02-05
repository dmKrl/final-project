/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

function changeDate(dateTime) {
    if (dateTime) {
        return format(dateTime, 'd MMMM yyyy', { locale: ru });
    }
}
export function changeDate2(dateTime) {
    return dateTime?.split('T')[0];
}

export default changeDate;
