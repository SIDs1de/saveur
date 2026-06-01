'use client';

import { bookingFlowStore } from '@/domain/booking/model/bookingFlow.store';
import { Button } from '@/shared/components/Button';

export const ResetButton = ({ className }: { className?: string }) => {
  return (
    <Button
      className={className}
      onClick={bookingFlowStore.reset}
      variant="outlined"
      size="sm"
      isFullWidth={false}
      type="button"
    >
      ЗАБРОНИРОВАТЬ ЕЩЁ
    </Button>
  );
};
