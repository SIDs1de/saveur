import styles from './index.module.scss';
import { ActionBlock } from '@/domain/booking/components/ActionBlock';
import { FormBlock } from '@/domain/booking/components/FormBlock';
import { Info } from '@/domain/booking/components/Info';
import { SuccessBlock } from '@/domain/booking/components/SuccessBlock';
import clsx from 'clsx';

export const Widget = () => {
  return (
    <div className={'container'}>
      <div className={styles.card}>
        <Info className={styles.cardPart} />
        <ActionBlock
          className={clsx(styles.cardPart, styles.actionBlock)}
          formStep={<FormBlock />}
          successStep={<SuccessBlock />}
        />
      </div>
    </div>
  );
};
