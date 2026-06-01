'use client';

import styles from './index.module.scss';
import { bookingFlowStore } from '@/domain/booking/model/bookingFlow.store';
import { observer } from 'mobx-react-lite';

export const DetailsTable = observer(() => {
  const { booking } = bookingFlowStore;

  if (!booking) {
    return null;
  }

  const rows = [
    {
      label: 'Дата',
      value: booking.date,
    },
    {
      label: 'Время',
      value: booking.time,
    },
    {
      label: 'Гости',
      value: booking.guests,
    },
  ];

  return (
    <dl className={styles.list}>
      {rows.map(({ label, value }) => (
        <div className={styles.item} key={label}>
          <dt className={styles.label}>{label}</dt>
          <dd className={styles.value}>{value}</dd>
        </div>
      ))}
    </dl>
  );
});
