import 'normalize.css';
import '@/styles/globals.scss';
import { DEFAULT_METADATA, LANGUAGE } from './constants';
import styles from './layout.module.scss';
import { RootLayoutProps } from './types';
import { AppProvider } from '@/shared/components/AppProvider';
import { Footer } from '@/shared/components/Footer';
import { Header } from '@/shared/components/Header';
import { cormorantGaramond, inter } from '@/shared/config';
import { clsx } from 'clsx';
import { Metadata } from 'next';

export const metadata: Metadata = DEFAULT_METADATA;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang={LANGUAGE} className={clsx(inter.variable, cormorantGaramond.variable)}>
      <body>
        <AppProvider>
          <div className={styles.layout}>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
