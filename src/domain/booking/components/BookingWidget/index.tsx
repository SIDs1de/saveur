import { BookingForm } from '../BookingForm';
import { BookingInfo } from '../BookingInfo';
import styles from './index.module.scss';

export const BookingWidget = () => {
  return (
    <div className={'container'}>
      <div className={styles.card}>
        <BookingInfo className={styles.cardPart} />
        <BookingForm className={styles.cardPart} />
      </div>
    </div>
  );
};
