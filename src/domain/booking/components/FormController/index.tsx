import { FormControllerProps } from './types';
import { Label } from '@/shared/components/Label';
import { Controller, type FieldPath, type FieldValues } from 'react-hook-form';

export const FormController = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  name,
  control,
  label,
  rules,
  render,
}: FormControllerProps<TFieldValues, TName>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <Label
          text={label}
          error={fieldState.error?.message}
          field={render({
            field,
            hasError: Boolean(fieldState.error),
          })}
        />
      )}
    />
  );
};
