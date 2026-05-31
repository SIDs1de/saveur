import { MotionProps } from 'framer-motion';

export const TRANSITION_LAYER_MOTION_PROPS: MotionProps = {
  initial: { opacity: 0, marginTop: 5 },
  animate: { opacity: 1, marginTop: 0 },
  exit: { opacity: 0, marginTop: 5 },
  transition: { duration: 0.3 },
};
