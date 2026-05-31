'use client';

import { TRANSITION_LAYER_MOTION_PROPS } from './constants';
import { TransitionLayerProps } from './types';
import { AnimatePresence, motion } from 'framer-motion';

export const TransitionLayer = ({
  children,
  className,
  motionProps: customMotionProps,
  condition = true,
}: TransitionLayerProps) => {
  const motionProps = customMotionProps ?? TRANSITION_LAYER_MOTION_PROPS;

  return (
    <AnimatePresence>
      {condition && (
        <motion.div {...motionProps} className={className}>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
