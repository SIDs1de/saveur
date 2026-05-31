import { Dayjs } from 'dayjs';

export type BookingFormValues = {
  name: string;
  phone: string;
  date: Dayjs;
  time: string;
  guests: string;
};
