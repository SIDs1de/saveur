'use client';

import { bookingFlowStore } from '@/domain/booking/model/bookingFlow.store';
import { observer } from 'mobx-react-lite';

export const GuestName = observer(() => {
  return <>{bookingFlowStore.booking?.name}</>;
});
