import { BookingFormValues } from './types';
import { pluralNoun } from '@/shared/utils';
import { DefaultOptionType } from 'antd/es/select';
import { DefaultValues } from 'react-hook-form';

export const TIME_OPTIONS: DefaultOptionType[] = [];

for (let i = 12; i <= 22; i++) {
  const time = `${i}:00`;
  TIME_OPTIONS.push({ label: time, value: time });
}

export const GUESTS_OPTIONS: DefaultOptionType[] = [];

for (let i = 1; i <= 12; i++) {
  GUESTS_OPTIONS.push({
    label: `${i} ${pluralNoun(i, 'гость', 'гостя', 'гостей')}`,
    value: `${i}`,
  });
}

export const DEFAULT_FORM_VALUES: DefaultValues<BookingFormValues> = {
  name: '',
  phone: '',
  date: undefined,
  time: undefined,
  guests: undefined,
};
