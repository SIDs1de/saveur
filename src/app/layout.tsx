import 'normalize.css';
import '@/styles/globals.scss';
import styles from './layout.module.scss';
import { cormorantGaramond, inter } from '@/shared/config';
import { clsx } from 'clsx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SAVEUR – бронирование столика',
  description: 'Онлайн-бронирование столика в ресторане SAVEUR',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={clsx(inter.variable, cormorantGaramond.variable)}>
        <div className={styles.container}>{children}</div>
      </body>
    </html>
  );
}
