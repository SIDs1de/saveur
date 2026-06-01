import { submitBooking } from '@/domain/booking/api/submitBooking';
import { BookingFormValues } from '@/domain/booking/components/BookingForm/types';
import { mapBookingFormValues } from '@/domain/booking/model/mapBookingFormValues';
import { BookingDetails, BookingStep } from '@/domain/booking/types';
import { action, computed, makeObservable, observable } from 'mobx';

class BookingFlowStore {
  constructor() {
    makeObservable(this, {
      step: observable,
      setStep: action.bound,

      booking: observable,
      setBooking: action.bound,

      isFormStep: computed,
      completeBooking: action.bound,
      reset: action.bound,
      submit: action.bound,
    });
  }

  step: BookingStep = BookingStep.FORM;
  setStep(step: BookingStep) {
    this.step = step;
  }

  booking: BookingDetails | null = null;
  setBooking(booking: BookingDetails | null) {
    this.booking = booking;
  }

  get isFormStep() {
    return this.step === BookingStep.FORM;
  }

  completeBooking(booking: BookingDetails) {
    this.setBooking(booking);
    this.setStep(BookingStep.SUCCESS);
  }

  reset() {
    this.setBooking(null);
    this.setStep(BookingStep.FORM);
  }

  async submit(values: BookingFormValues) {
    const booking = mapBookingFormValues(values);
    const result = await submitBooking(booking);

    this.completeBooking(result);
  }
}

export const bookingFlowStore = new BookingFlowStore();
