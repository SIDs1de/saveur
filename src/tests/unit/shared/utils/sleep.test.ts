import { sleep } from '@/shared/utils/sleep';
import { afterEach, describe, expect, it, vi } from 'vitest';

describe('sleep', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('resolves after the specified delay', async () => {
    vi.useFakeTimers();

    const promise = sleep(1500);

    await vi.advanceTimersByTimeAsync(1499);
    expect(vi.getTimerCount()).toBe(1);

    await vi.advanceTimersByTimeAsync(1);
    await expect(promise).resolves.toBeUndefined();
  });
});
