import { MotionProps } from 'framer-motion';

export const LABEL_MOTION_PROPS: MotionProps = {
  initial: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: 'auto' },
  exit: { opacity: 0, height: 0 },
  transition: { duration: 0.2 },
};
