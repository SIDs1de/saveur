import styles from './index.module.scss';
import { cva, VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(styles.button, {
  variants: {
    variant: {
      filled: styles.filled,
      outlined: styles.outlined,
    },
    size: {
      md: styles.md,
      sm: styles.sm,
    },
  },
  defaultVariants: {
    variant: 'filled',
    size: 'md',
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
