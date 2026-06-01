import { FormValues } from '@/domain/booking/components/Form/types';
import { mapBookingFormValues } from '@/domain/booking/model/mapBookingFormValues';
import dayjs from 'dayjs';
import { describe, expect, it } from 'vitest';

const VALID_FORM_VALUES: FormValues = {
  name: '  Анна Смирнова  ',
  phone: '+7 (999) 123-45-67',
  date: dayjs('2026-06-10'),
  time: '19:00',
  guests: '4',
};

describe('mapBookingFormValues', () => {
  it('normalizes form values into booking details', () => {
    expect(mapBookingFormValues(VALID_FORM_VALUES)).toEqual({
      name: 'Анна Смирнова',
      phone: '+7 (999) 123-45-67',
      date: '10.06.2026',
      time: '19:00',
      guests: 4,
    });
  });

  it.each([
    ['date', { ...VALID_FORM_VALUES, date: null }],
    ['time', { ...VALID_FORM_VALUES, time: undefined }],
    ['guests', { ...VALID_FORM_VALUES, guests: undefined }],
  ])('rejects form values without %s', (_field, values) => {
    expect(() => mapBookingFormValues(values)).toThrow('Cannot submit an incomplete booking form');
  });
});
