import styles from './index.module.scss';
import { BookingActionBlock } from '@/domain/booking/components/BookingActionBlock';
import { BookingInfo } from '@/domain/booking/components/BookingInfo';

export const BookingWidget = () => {
  return (
    <div className={'container'}>
      <div className={styles.card}>
        <BookingInfo className={styles.cardPart} />
        <BookingActionBlock className={styles.cardPart} />
      </div>
    </div>
  );
};
