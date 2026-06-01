export const isValidRuPhone = (value: string) => {
  const digits = value.replace(/\D/g, '');

  if (digits.startsWith('8')) {
    return digits.length === 11;
  }

  if (digits.startsWith('7')) {
    return digits.length === 11;
  }

  return digits.length === 10;
};
