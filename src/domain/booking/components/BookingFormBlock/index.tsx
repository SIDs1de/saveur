import { TransitionLayer } from '../../../../shared/components/TransitionLayer';
import { BookingForm } from '../BookingForm';
import { BOOKING_FORM_BLOCK_MOTION_PROPS } from './constants';
import styles from './index.module.scss';
import { BookingFormProps } from './types';
import clsx from 'clsx';

export const BookingFormBlock = ({ className }: BookingFormProps) => {
  return (
    <div className={clsx(styles.root, className)}>
      <TransitionLayer motionProps={BOOKING_FORM_BLOCK_MOTION_PROPS}>
        <div className={styles.main}>
          <span className={styles.step}>Шаг 01</span>
          <h2 className={styles.title}>Забронировать столик</h2>
          <p className={styles.description}>
            Заполните форму — подтверждение займёт всего пару секунд.
          </p>
          <BookingForm />
        </div>
      </TransitionLayer>
    </div>
  );
};
