import { submitBooking } from '@/domain/booking/api/submitBooking';
import { BookingDetails } from '@/domain/booking/types';
import { afterEach, describe, expect, it, vi } from 'vitest';

const BOOKING: BookingDetails = {
  name: 'Анна Смирнова',
  phone: '+7 (999) 123-45-67',
  date: '10.06.2026',
  time: '19:00',
  guests: 4,
};

describe('submitBooking', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('resolves with booking details after the simulated request', async () => {
    vi.useFakeTimers();

    const promise = submitBooking(BOOKING);

    await vi.advanceTimersByTimeAsync(1500);
    await expect(promise).resolves.toEqual(BOOKING);
  });
});
