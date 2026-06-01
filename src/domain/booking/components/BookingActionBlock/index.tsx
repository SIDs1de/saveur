'use client';

import { BOOKING_ACTION_BLOCK_MOTION_PROPS } from './constants';
import styles from './index.module.scss';
import { BookingActionBlockProps } from './types';
import { bookingFlowStore } from '@/domain/booking/model/bookingFlow.store';
import { TransitionLayer } from '@/shared/components/TransitionLayer';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';

export const BookingActionBlock = observer(
  ({ className, formStep, successStep }: BookingActionBlockProps) => {
    return (
      <div className={clsx(styles.root, className)}>
        <TransitionLayer
          mode="wait"
          motionKey={bookingFlowStore.step}
          motionProps={BOOKING_ACTION_BLOCK_MOTION_PROPS}
        >
          {bookingFlowStore.isFormStep ? formStep : successStep}
        </TransitionLayer>
      </div>
    );
  },
);
