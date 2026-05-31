import { AppWrapperProps } from './types';
import { AntdRegistry } from '@ant-design/nextjs-registry';

export const AppWrapper = ({ children }: AppWrapperProps) => {
  return <AntdRegistry>{children}</AntdRegistry>;
};
