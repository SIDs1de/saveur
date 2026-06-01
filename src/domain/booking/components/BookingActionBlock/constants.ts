import { MotionProps } from 'framer-motion';

export const BOOKING_FORM_BLOCK_MOTION_PROPS: MotionProps = {
  initial: { opacity: 0, y: 7 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 7 },
  transition: { duration: 0.3 },
};
