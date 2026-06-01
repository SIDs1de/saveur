import styles from './index.module.scss';
import { BookingActionBlock } from '@/domain/booking/components/BookingActionBlock';
import { BookingFormBlock } from '@/domain/booking/components/BookingFormBlock';
import { BookingInfo } from '@/domain/booking/components/BookingInfo';

export const BookingWidget = () => {
  return (
    <div className={'container'}>
      <div className={styles.card}>
        <BookingInfo className={styles.cardPart} />
        <BookingActionBlock
          className={styles.cardPart}
          formStep={<BookingFormBlock />}
          successStep={<div>123</div>}
        />
      </div>
    </div>
  );
};
