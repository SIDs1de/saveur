import styles from './index.module.scss';
import { DetailsTable } from '@/domain/booking/components/DetailsTable';
import { GuestName } from '@/domain/booking/components/GuestName';
import { ResetButton } from '@/domain/booking/components/ResetButton';
import Image from 'next/image';

export const SuccessBlock = () => {
  return (
    <div className={styles.root}>
      <Image width={62} height={62} src="/success-badge.svg" alt="Success" />
      <p className={styles.successText}>БРОНИРОВАНИЕ ПОДТВЕРЖДЕНО</p>
      <h2>
        До встречи, <GuestName />!
      </h2>
      <p className={styles.description}>
        Столик сохранён за вами. Будем ждать вас по адресу Малая Бронная, 14.
      </p>
      <DetailsTable />
      <ResetButton className={styles.btn} />
    </div>
  );
};
