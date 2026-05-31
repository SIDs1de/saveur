import { MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

export type TransitionLayerProps = {
  children: ReactNode;
  className?: string;
  motionProps?: MotionProps;
  condition?: boolean;
};
