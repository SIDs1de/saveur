import { TransitionLayer } from '../../../../shared/components/TransitionLayer';
import styles from './index.module.scss';
import { BookingInfoProps } from './types';
import clsx from 'clsx';

export const BookingInfo = ({ className }: BookingInfoProps) => {
  return (
    <div className={clsx(styles.root, className)}>
      <TransitionLayer className={styles.main}>
        <div>
          <span className={styles.subtitle}>ОНЛАЙН-БРОНИРОВАНИЕ</span>
          <h1>
            Ваш столик <span className={styles.highlight}>уже ждёт.</span>
          </h1>
          <p className={styles.description}>
            Оставьте детали визита, а мы подготовим всё к вашему приходу.
          </p>
        </div>
        <div>
          <div className={styles.groups}>
            <address className={styles.group}>
              <span className={styles.groupLabel}>АДРЕС</span>
              <span className={styles.groupValue}>Малая Бронная, 14</span>
            </address>
            <div className={styles.group}>
              <span className={styles.groupLabel}>ЧАСЫ РАБОТЫ</span>
              <span className={styles.groupValue}>Ежедневно, 12:00–23:00</span>
            </div>
          </div>
          <p className={styles.additionalInfo}>
            Для компаний больше 12 гостей позвоните нам:{' '}
            <a href="tel:+74951234567">+7 (495) 123-45-67</a>
          </p>
        </div>
      </TransitionLayer>
    </div>
  );
};
