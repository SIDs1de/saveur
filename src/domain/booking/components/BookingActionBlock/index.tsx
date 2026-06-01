'use client';

import { BOOKING_FORM_BLOCK_MOTION_PROPS } from './constants';
import styles from './index.module.scss';
import { BookingFormProps } from './types';
import { BookingFormBlock } from '@/domain/booking/components/BookingFormBlock';
import { TransitionLayer } from '@/shared/components/TransitionLayer';
import clsx from 'clsx';
import { useState } from 'react';

export const BookingActionBlock = ({ className }: BookingFormProps) => {
  const [isFormStep, setIsFormStep] = useState(false);

  return (
    <div className={clsx(styles.root, className)}>
      <TransitionLayer motionProps={BOOKING_FORM_BLOCK_MOTION_PROPS}>
        {isFormStep ? <BookingFormBlock /> : <div>123</div>}
      </TransitionLayer>
    </div>
  );
};
