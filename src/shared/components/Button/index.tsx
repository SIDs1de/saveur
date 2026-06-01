import { LOADER_MOTION_PROPS } from './constants';
import styles from './index.module.scss';
import { ButtonProps } from './types';
import { buttonVariants } from './variants';
import { TransitionLayer } from '@/shared/components/TransitionLayer';
import clsx from 'clsx';
import { AnimatePresence } from 'framer-motion';
import { Loader } from 'lucide-react';

export const Button = ({
  children,
  onClick,
  size,
  variant,
  isFullWidth = true,
  isLoading = false,
  disabled,
  type,
  className,
}: ButtonProps) => {
  const isDisabled = disabled || isLoading;

  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={clsx(
        buttonVariants({ size, variant }),
        isFullWidth && styles.fullWidth,
        className,
      )}
      type={type}
    >
      <AnimatePresence>
        <TransitionLayer condition={isLoading} motionProps={LOADER_MOTION_PROPS}>
          <div className={styles.loaderWrapper}>
            <Loader className={styles.loader} width={16} />
          </div>
        </TransitionLayer>
      </AnimatePresence>
      {children}
    </button>
  );
};
