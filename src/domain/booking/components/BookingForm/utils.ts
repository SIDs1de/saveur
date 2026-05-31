import { BookingFormValues } from './types';
import { sleep } from '@/shared/utils';
import dayjs from 'dayjs';

export const onSubmit = async (values: BookingFormValues) => {
  const payload = {
    ...values,
    date: values.date?.format('DD.MM.YYYY'),
  };

  await sleep(1500);

  console.log(payload);
};

export const isDisabledDate: (current: dayjs.Dayjs) => boolean = (current) => {
  const today = dayjs().startOf('day');
  const maxDate = today.add(90, 'day');
  return current && (current.isBefore(today) || current.isAfter(maxDate));
};
