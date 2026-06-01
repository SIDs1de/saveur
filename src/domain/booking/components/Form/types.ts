import { Dayjs } from 'dayjs';
import { RegisterOptions } from 'react-hook-form';

export type FormValues = {
  name: string;
  phone: string;
  date: Dayjs | null;
  time?: string;
  guests?: string;
};

export type FormRules = {
  [K in keyof FormValues]?: RegisterOptions<FormValues, K>;
};
