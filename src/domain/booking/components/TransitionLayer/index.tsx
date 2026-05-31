'use client';

import { TRANSITION_LAYER_MOTION_PROPS } from './constants';
import { TransitionLayerProps } from './types';
import { AnimatePresence, motion } from 'framer-motion';

export const TransitionLayer = ({ children, className }: TransitionLayerProps) => {
  return (
    <AnimatePresence>
      <motion.div {...TRANSITION_LAYER_MOTION_PROPS} className={className}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
