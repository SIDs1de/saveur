import { isDisabledDate } from '@/domain/booking/components/BookingForm/utils';
import dayjs from 'dayjs';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

describe('isDisabledDate', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-06-01T12:00:00'));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('allows today and dates up to 90 days ahead', () => {
    expect(isDisabledDate(dayjs('2026-06-01'))).toBe(false);
    expect(isDisabledDate(dayjs('2026-08-30'))).toBe(false);
  });

  it('disables past dates and dates more than 90 days ahead', () => {
    expect(isDisabledDate(dayjs('2026-05-31'))).toBe(true);
    expect(isDisabledDate(dayjs('2026-08-31'))).toBe(true);
  });
});
