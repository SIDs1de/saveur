const FORMAT_LOCALE = 'ru';
const DEFAULT_FRACTION_DIGITS = 0;

export const formatDecimal = (num: number, fractionDigits: number = DEFAULT_FRACTION_DIGITS) =>
  new Intl.NumberFormat(FORMAT_LOCALE, {
    style: 'decimal',
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  })
    .format(num)
    .replace('.', ',');
