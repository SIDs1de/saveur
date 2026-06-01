import styles from './index.module.scss';
import { RowProps } from './types';

export const Row = ({ children }: RowProps) => {
  return <div className={styles.root}>{children}</div>;
};
