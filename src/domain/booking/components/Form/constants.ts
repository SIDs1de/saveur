import { FormRules, FormValues } from './types';
import { isDisabledDate } from './utils';
import { isValidRuPhone, pluralNoun } from '@/shared/utils';
import { DefaultOptionType } from 'antd/es/select';
import { DefaultValues, UseFormProps } from 'react-hook-form';

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

export const DEFAULT_FORM_VALUES: DefaultValues<FormValues> = {
  name: '',
  phone: '',
  date: null,
  time: undefined,
  guests: undefined,
};

export const FORM_CONFIG: UseFormProps<FormValues> = {
  mode: 'onBlur',
  defaultValues: DEFAULT_FORM_VALUES,
};

export const FORM_RULES: FormRules = {
  name: {
    required: 'Введите имя',
  },
  phone: {
    required: 'Введите телефон',
    validate: (value) => isValidRuPhone(value) || 'Введите корректный номер: +7 или 8, 10 цифр',
  },
  date: {
    required: 'Выберите дату',
  },
  time: {
    required: 'Выберите время',
  },
  guests: {
    required: 'Выберите количество гостей',
  },
};

export const DATE_PICKER_PROPS = {
  format: 'DD.MM.YYYY',
  placeholder: 'дд.мм.гг',
  disabledDate: isDisabledDate,
};
