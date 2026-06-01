import styles from './index.module.scss';
import { BookingForm } from '@/domain/booking/components/BookingForm';

export const BookingFormBlock = () => {
  return (
    <div className={styles.main}>
      <span className={styles.step}>Шаг 01</span>
      <h2 className={styles.title}>Забронировать столик</h2>
      <p className={styles.description}>
        Заполните форму — подтверждение займёт всего пару секунд.
      </p>
      <BookingForm />
    </div>
  );
};
