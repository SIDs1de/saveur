import { MotionProps } from 'framer-motion';

export const TRANSITION_LAYER_MOTION_PROPS: MotionProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
};
