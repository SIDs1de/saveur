import { isValidRuPhone } from '@/shared/utils/isValidRuPhone';
import { describe, expect, it } from 'vitest';

describe('isValidRuPhone', () => {
  it.each(['+7 (999) 123-45-67', '8-999-123-45-67'])('accepts "%s"', (phone) => {
    expect(isValidRuPhone(phone)).toBe(true);
  });

  it.each(['', '+1 (999) 123-45-67', '+7 (999) 123-45', '9991234567'])('rejects "%s"', (phone) => {
    expect(isValidRuPhone(phone)).toBe(false);
  });
});
