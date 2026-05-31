import 'normalize.css';

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
      <body>{children}</body>
    </html>
  );
}
