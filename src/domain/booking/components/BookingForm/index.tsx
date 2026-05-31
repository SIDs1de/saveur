'use client';

import { DEFAULT_FORM_VALUES, GUESTS_OPTIONS, TIME_OPTIONS } from './constants';
import styles from './index.module.scss';
import { BookingFormValues } from './types';
import { isDisabledDate, onSubmit } from './utils';
import { Button } from '@/shared/components/Button';
import { Label } from '@/shared/components/Label';
import { Row } from '@/shared/components/Row';
import { isValidRuPhone } from '@/shared/utils/isValidRuPhone';
import { DatePicker, Input, Select } from 'antd';
import { Controller, useForm } from 'react-hook-form';

export const BookingForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<BookingFormValues>({
    mode: 'onBlur',
    defaultValues: DEFAULT_FORM_VALUES,
  });

  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        rules={{
          required: 'Введите имя',
        }}
        render={({ field, fieldState }) => (
          <Label
            text="Имя"
            error={fieldState.error?.message}
            field={
              <Input
                {...field}
                placeholder="Введите ваше имя"
                status={fieldState.error ? 'error' : ''}
              />
            }
          />
        )}
      />
      <Controller
        name="phone"
        control={control}
        rules={{
          required: 'Введите телефон',
          validate: (value) =>
            isValidRuPhone(value) || 'Введите корректный номер: +7 или 8, 10 цифр',
        }}
        render={({ field, fieldState }) => (
          <Label
            text="Телефон"
            error={fieldState.error?.message}
            field={
              <Input
                {...field}
                type="tel"
                placeholder="Введите ваш номер телефона"
                status={fieldState.error ? 'error' : ''}
              />
            }
          />
        )}
      />
      <Row>
        <Controller
          name="date"
          control={control}
          rules={{
            required: 'Выберите дату',
          }}
          render={({ field, fieldState }) => (
            <Label
              text="Дата"
              error={fieldState.error?.message}
              field={
                <DatePicker
                  value={field.value}
                  onChange={field.onChange}
                  format="DD.MM.YYYY"
                  placeholder="дд.мм.гг"
                  status={fieldState.error ? 'error' : ''}
                  disabledDate={isDisabledDate}
                />
              }
            />
          )}
        />
        <Controller
          name="time"
          control={control}
          rules={{
            required: 'Выберите время',
          }}
          render={({ field, fieldState }) => (
            <Label
              text="Время"
              error={fieldState.error?.message}
              field={
                <Select
                  {...field}
                  options={TIME_OPTIONS}
                  placeholder="Выберите время"
                  status={fieldState.error ? 'error' : ''}
                />
              }
            />
          )}
        />
      </Row>
      <Controller
        name="guests"
        control={control}
        rules={{
          required: 'Выберите количество гостей',
        }}
        render={({ field, fieldState }) => (
          <Label
            text="Количество гостей"
            error={fieldState.error?.message}
            field={
              <Select
                {...field}
                options={GUESTS_OPTIONS}
                placeholder="Выберите количество гостей"
                status={fieldState.error ? 'error' : ''}
              />
            }
          />
        )}
      />
      <Button isLoading={isSubmitting} type="submit">
        ЗАБРОНИРОВАТЬ СТОЛИК
      </Button>
    </form>
  );
};
