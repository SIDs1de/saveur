import { AnimatePresenceProps, MotionProps } from 'framer-motion';
import { Key, ReactNode } from 'react';

export type TransitionLayerProps = {
  children: ReactNode;
  className?: string;
  motionProps?: MotionProps;
  condition?: boolean;
  mode?: AnimatePresenceProps['mode'];
  motionKey?: Key;
};
