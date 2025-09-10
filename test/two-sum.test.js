import { describe, it, expect } from 'vitest';
import { twoSum, twoSumSorted } from '../problems/two-sum';

describe('twoSum', () => {
  it('should return the numbers and their indices for a valid pair', () => {
    expect(twoSum([1, 4, 6, 8, 12], 10)).toEqual([4, 6]);
  });

  it('should handle arrays with duplicate numbers', () => {
    expect(twoSum([1, 4, 6, 6, 8, 12, 4], 8)).toEqual([4, 4]);
  });

  it('should return an empty array if no pair is found', () => {
    expect(twoSum([1, 2, 3, 9], 15)).toEqual([]);
  });

  it('should return an empty array for an empty input array', () => {
    expect(twoSum([], 10)).toEqual([]);
  });
});

describe('twoSumSorted', () => {
  it('should return the pair that sums to the target', () => {
    expect(twoSumSorted([1, 2, 3, 9], 5)).toEqual([2, 3]);
  });

  it('should handle arrays with duplicate numbers', () => {
    expect(twoSumSorted([1, 2, 4, 4], 8)).toEqual([4, 4]);
  });

  it('should return null if no pair is found', () => {
    expect(twoSumSorted([1, 2, 3, 9], 15)).toBe(null);
  });

  it('should handle negative numbers', () => {
    expect(twoSumSorted([-2, 0, 1, 3], 1)).toEqual([-2, 3]);
  });

  it('should return null for an empty input array', () => {
    expect(twoSumSorted([], 10)).toBe(null);
  });
});
