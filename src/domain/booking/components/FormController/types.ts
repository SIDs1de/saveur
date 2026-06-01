import type { ReactNode } from 'react';
import type {
  Control,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';

export type FormControllerRenderParams<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = {
  field: ControllerRenderProps<TFieldValues, TName>;
  hasError: boolean;
};

export type FormControllerProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = {
  name: TName;
  control: Control<TFieldValues>;
  label: string;
  rules?: RegisterOptions<TFieldValues, TName>;
  render: (params: FormControllerRenderParams<TFieldValues, TName>) => ReactNode;
};
