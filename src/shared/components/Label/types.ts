import { ReactNode } from 'react';

export type LabelProps = {
  text: string;
  field: ReactNode;
  error?: string;
};
