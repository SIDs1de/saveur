import { FormValues } from '@/domain/booking/components/Form/types';
import { BookingDetails } from '@/domain/booking/types';

export function mapBookingFormValues(values: FormValues): BookingDetails {
  if (!values.date || !values.time || !values.guests) {
    throw new Error('Cannot submit an incomplete booking form');
  }

  return {
    name: values.name.trim(),
    phone: values.phone,
    date: values.date.format('DD.MM.YYYY'),
    time: values.time,
    guests: Number(values.guests),
  };
}
