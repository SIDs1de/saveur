import { AppProviderProps } from './types';
import { AntdRegistry } from '@ant-design/nextjs-registry';

export const AppProvider = ({ children }: AppProviderProps) => {
  return <AntdRegistry>{children}</AntdRegistry>;
};
