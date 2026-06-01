import type { MotionProps } from 'framer-motion';

export const LOADER_MOTION_PROPS: MotionProps = {
  initial: {
    width: 0,
    opacity: 0,
    x: 8,
  },
  animate: {
    width: 16,
    opacity: 1,
    x: 0,
  },
  exit: {
    width: 0,
    opacity: 0,
    x: 8,
  },
  transition: { duration: 0.3 },
};
