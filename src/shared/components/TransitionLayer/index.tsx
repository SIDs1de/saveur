'use client';

import { TRANSITION_LAYER_MOTION_PROPS } from './constants';
import { TransitionLayerProps } from './types';
import { AnimatePresence, motion } from 'framer-motion';

export const TransitionLayer = ({
  children,
  className,
  motionProps: customMotionProps,
  condition = true,
  mode,
  motionKey,
}: TransitionLayerProps) => {
  const motionProps = customMotionProps ?? TRANSITION_LAYER_MOTION_PROPS;

  return (
    <AnimatePresence mode={mode}>
      {condition && (
        <motion.div {...motionProps} className={className} key={motionKey}>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
