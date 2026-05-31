'use client';
import { LOADER_MOTION_PROPS } from '../constants';
import { TransitionLayerProps } from './types';
import { motion } from 'framer-motion';

export const TransitionLayer = ({ children }: TransitionLayerProps) => {
  return <motion.div {...LOADER_MOTION_PROPS}>{children}</motion.div>;
};
