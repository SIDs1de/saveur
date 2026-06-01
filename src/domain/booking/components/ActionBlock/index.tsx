'use client';

import { ACTION_BLOCK_MOTION_PROPS } from './constants';
import styles from './index.module.scss';
import { ActionBlockProps } from './types';
import { bookingFlowStore } from '@/domain/booking/model/bookingFlow.store';
import { TransitionLayer } from '@/shared/components/TransitionLayer';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';

export const ActionBlock = observer(({ className, formStep, successStep }: ActionBlockProps) => {
  return (
    <div className={clsx(styles.root, className)}>
      <TransitionLayer
        mode="wait"
        motionKey={bookingFlowStore.step}
        motionProps={ACTION_BLOCK_MOTION_PROPS}
      >
        {bookingFlowStore.isFormStep ? formStep : successStep}
      </TransitionLayer>
    </div>
  );
});
