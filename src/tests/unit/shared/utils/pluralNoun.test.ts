import { pluralNoun } from '@/shared/utils/pluralNoun';
import { describe, expect, it } from 'vitest';

describe('pluralNoun', () => {
  it.each([
    [1, '1 гость'],
    [2, '2 гостя'],
    [5, '5 гостей'],
    [11, '11 гостей'],
    [21, '21 гость'],
    [24, '24 гостя'],
  ])('uses the correct Russian plural form for %i', (count, result) => {
    expect(pluralNoun(count, '%d гость', '%d гостя', '%d гостей')).toBe(result);
  });

  it('supports a short singular/plural form pair', () => {
    expect(pluralNoun(1, '%d столик', '%d столика')).toBe('1 столик');
    expect(pluralNoun(2, '%d столик', '%d столика')).toBe('2 столика');
  });
});
