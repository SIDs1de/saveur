import { BookingFlowStore } from '@/domain/booking/model/bookingFlow.store';
import { BookingDetails, BookingStep } from '@/domain/booking/types';
import dayjs from 'dayjs';
import { afterEach, describe, expect, it, vi } from 'vitest';

const BOOKING: BookingDetails = {
  name: 'Анна Смирнова',
  phone: '+7 (999) 123-45-67',
  date: '10.06.2026',
  time: '19:00',
  guests: 4,
};

describe('BookingFlowStore', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('starts on the form step without booking details', () => {
    const store = new BookingFlowStore();

    expect(store.step).toBe(BookingStep.FORM);
    expect(store.booking).toBeNull();
    expect(store.isFormStep).toBe(true);
  });

  it('moves to the success step with booking details', () => {
    const store = new BookingFlowStore();

    store.completeBooking(BOOKING);

    expect(store.step).toBe(BookingStep.SUCCESS);
    expect(store.booking).toEqual(BOOKING);
    expect(store.isFormStep).toBe(false);
  });

  it('resets the completed booking flow', () => {
    const store = new BookingFlowStore();

    store.completeBooking(BOOKING);
    store.reset();

    expect(store.step).toBe(BookingStep.FORM);
  });

  it('submits form values and completes the booking flow', async () => {
    vi.useFakeTimers();

    const store = new BookingFlowStore();
    const promise = store.submit({
      name: '  Анна Смирнова  ',
      phone: '+7 (999) 123-45-67',
      date: dayjs('2026-06-10'),
      time: '19:00',
      guests: '4',
    });

    await vi.advanceTimersByTimeAsync(1500);
    await promise;

    expect(store.step).toBe(BookingStep.SUCCESS);
    expect(store.booking).toEqual(BOOKING);
  });
});
