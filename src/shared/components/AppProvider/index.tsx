import { THEME_CONFIG } from './constants';
import { AppProviderProps } from './types';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/locale/ru_RU';

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <AntdRegistry>
      <ConfigProvider locale={ruRU} theme={THEME_CONFIG}>
        {children}
      </ConfigProvider>
    </AntdRegistry>
  );
};
