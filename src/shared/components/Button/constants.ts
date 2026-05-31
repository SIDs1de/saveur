import type { MotionProps } from 'framer-motion';

export const LOADER_MOTION_PROPS: MotionProps = {
  initial: {
    width: 0,
    opacity: 0,
    marginRight: -8,
  },
  animate: {
    width: 16,
    opacity: 1,
    marginRight: 0,
  },
  exit: {
    width: 0,
    opacity: 0,
    marginRight: -8,
  },
  transition: { duration: 0.3 },
};
