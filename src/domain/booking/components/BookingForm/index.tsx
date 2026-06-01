'use client';

import {
  BOOKING_FORM_CONFIG,
  BOOKING_FORM_RULES,
  DATE_PICKER_PROPS,
  GUESTS_OPTIONS,
  TIME_OPTIONS,
} from './constants';
import styles from './index.module.scss';
import { BookingFormValues } from './types';
import { FormController } from '@/domain/booking/components/FormController';
import { bookingFlowStore } from '@/domain/booking/model/bookingFlow.store';
import { Button } from '@/shared/components/Button';
import { Row } from '@/shared/components/Row';
import { DatePicker, Input, Select } from 'antd';
import { useForm } from 'react-hook-form';

export const BookingForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<BookingFormValues>(BOOKING_FORM_CONFIG);

  return (
    <form className={styles.root} onSubmit={handleSubmit(bookingFlowStore.submit)}>
      <FormController
        name="name"
        label="Имя"
        control={control}
        rules={BOOKING_FORM_RULES.name}
        render={({ field, hasError }) => (
          <Input {...field} placeholder="Введите ваше имя" status={hasError ? 'error' : ''} />
        )}
      />
      <FormController
        name="phone"
        label="Телефон"
        control={control}
        rules={BOOKING_FORM_RULES.phone}
        render={({ field, hasError }) => (
          <Input
            {...field}
            type="tel"
            placeholder="Введите ваш номер телефона"
            status={hasError ? 'error' : ''}
          />
        )}
      />
      <Row>
        <FormController
          name="date"
          label="Дата"
          control={control}
          rules={BOOKING_FORM_RULES.date}
          render={({ field, hasError }) => (
            <DatePicker
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              status={hasError ? 'error' : ''}
              {...DATE_PICKER_PROPS}
            />
          )}
        />
        <FormController
          name="time"
          label="Время"
          control={control}
          rules={BOOKING_FORM_RULES.time}
          render={({ field, hasError }) => (
            <Select
              {...field}
              options={TIME_OPTIONS}
              placeholder="Выберите время"
              status={hasError ? 'error' : ''}
            />
          )}
        />
      </Row>
      <FormController
        name="guests"
        label="Количество гостей"
        control={control}
        rules={BOOKING_FORM_RULES.guests}
        render={({ field, hasError }) => (
          <Select
            {...field}
            options={GUESTS_OPTIONS}
            placeholder="Выберите количество гостей"
            status={hasError ? 'error' : ''}
          />
        )}
      />
      <Button isLoading={isSubmitting} type="submit">
        ЗАБРОНИРОВАТЬ СТОЛИК
      </Button>
    </form>
  );
};
