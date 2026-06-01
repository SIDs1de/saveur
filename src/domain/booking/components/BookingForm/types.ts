import { Dayjs } from 'dayjs';
import { RegisterOptions } from 'react-hook-form';

export type BookingFormValues = {
  name: string;
  phone: string;
  date: Dayjs | null;
  time?: string;
  guests?: string;
};

export type BookingFormRules = {
  [K in keyof BookingFormValues]?: RegisterOptions<BookingFormValues, K>;
};
