import { ButtonVariants } from './variants';
import { ReactNode } from 'react';

export type ButtonProps = ButtonVariants & {
  children: ReactNode;
  onClick?: () => void;
  isFullWidth?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};
