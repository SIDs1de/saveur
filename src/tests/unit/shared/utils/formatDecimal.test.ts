import { formatDecimal } from '@/shared/utils/formatDecimal';
import { describe, expect, it } from 'vitest';

describe('formatDecimal', () => {
  it('formats an integer without a fractional part by default', () => {
    expect(formatDecimal(12)).toBe('12');
  });

  it('formats a decimal with the requested number of fraction digits', () => {
    expect(formatDecimal(12.5, 2)).toBe('12,50');
  });
});
