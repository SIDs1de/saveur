import 'normalize.css';
import '@/styles/globals.scss';
import styles from './layot.module.scss';
import { Footer } from '@/shared/components/Footer';
import { Header } from '@/shared/components/Header';
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
    <html lang="ru" className={clsx(inter.variable, cormorantGaramond.variable)}>
      <body>
        <div className={styles.layout}>
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
