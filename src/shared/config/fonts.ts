import { Cormorant_Garamond, Inter } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  weight: ['400', '700', '800'],
});

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant-garamond',
  weight: ['600'],
});
