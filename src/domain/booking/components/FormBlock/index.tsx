import styles from './index.module.scss';
import { Form } from '@/domain/booking/components/Form';

export const FormBlock = () => {
  return (
    <div>
      <span className={styles.step}>Шаг 01</span>
      <h2 className={styles.title}>Забронировать столик</h2>
      <p className={styles.description}>
        Заполните форму — подтверждение займёт всего пару секунд.
      </p>
      <Form />
    </div>
  );
};
