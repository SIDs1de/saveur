import dayjs from 'dayjs';

export const isDisabledDate: (current: dayjs.Dayjs) => boolean = (current) => {
  const today = dayjs().startOf('day');
  const maxDate = today.add(90, 'day');
  return current && (current.isBefore(today) || current.isAfter(maxDate));
};
