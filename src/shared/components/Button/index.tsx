import styles from './index.module.scss';
import { TransitionLayer } from './TransitionLayer';
import { ButtonProps } from './types';
import { buttonVariants } from './variants';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { Loader } from 'lucide-react';

export const Button = ({
  children,
  onClick,
  size,
  variant,
  isFullWidth = true,
  isLoading,
  disabled,
}: ButtonProps) => {
  const isDisabled = disabled || isLoading;

  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={clsx(buttonVariants({ size, variant }), isFullWidth && styles.fullWidth)}
    >
      <AnimatePresence>
        {isLoading && (
          <TransitionLayer>
            <Loader className={styles.loader} />
          </TransitionLayer>
        )}
      </AnimatePresence>
      {children}
    </button>
  );
};
