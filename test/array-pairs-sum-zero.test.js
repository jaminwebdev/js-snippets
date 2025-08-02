import { describe, it, expect } from 'vitest';
import { arrayPairsSumZero, arrayPairsSumZero2 } from '../array-pairs-sum-zero';

describe('arrayPairsSumZero', () => {
  it('should return the pair that sums to zero', () => {
    expect(arrayPairsSumZero([-7, -3, -2, -1, 0, 2, 5])).toEqual([-2, 2]);
  });

  it('should return false if no pair sums to zero', () => {
    expect(arrayPairsSumZero([1, 2, 3])).toBe(false);
  });
});

describe('arrayPairsSumZero2', () => {
  it('should return the pair that sums to zero', () => {
    expect(arrayPairsSumZero2([-7, -3, -2, -1, 0, 2, 5])).toEqual([-2, 2]);
  });

  it('should return undefined if no pair sums to zero', () => {
    expect(arrayPairsSumZero2([1, 2, 3])).toBe(undefined);
  });
});
