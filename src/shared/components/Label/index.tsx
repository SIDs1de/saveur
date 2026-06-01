import { LABEL_MOTION_PROPS } from './constants';
import styles from './index.module.scss';
import { LabelProps } from './types';
import { TransitionLayer } from '@/shared/components/TransitionLayer';

export const Label = ({ text, field, error }: LabelProps) => {
  return (
    <label className={styles.root}>
      <span className={'text-label'}>{text}</span>
      {field}
      {
        <TransitionLayer condition={Boolean(error)} motionProps={LABEL_MOTION_PROPS}>
          <span className={styles.error}>{error}</span>
        </TransitionLayer>
      }
    </label>
  );
};
