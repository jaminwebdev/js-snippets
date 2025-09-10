import { describe, it, expect } from 'vitest';
import { getMaxSubSum, getMaxSubSumByWindowSize } from '../problems/maximum-sub-array.js';

describe('getMaxSubSum', () => {
  it('should find the maximal subarray sum in a mixed array', () => {
    expect(getMaxSubSum([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });

  it('should return the sum of all elements if all are positive', () => {
    expect(getMaxSubSum([1, 2, 3, 4])).toBe(10);
  });

  it('should return 0 if all elements are negative, based on its implementation', () => {
    expect(getMaxSubSum([-1, -2, -3])).toBe(0);
  });

  it('should return 0 for an empty array', () => {
    expect(getMaxSubSum([])).toBe(0);
  });

  it('should correctly calculate the sum when a negative number resets the partial sum', () => {
    expect(getMaxSubSum([1, 3, -7, 5, 1])).toBe(6);
  });
});

describe('getMaxSubSumByWindowSize', () => {
  it('should find the max subarray sum for a given window size', () => {
    expect(getMaxSubSumByWindowSize([2, 1, 5, 1, 3, 2], 3)).toBe(9);
  });

  it('should work correctly when the window size is 1', () => {
    expect(getMaxSubSumByWindowSize([2, 1, 5, 1, 3, 2], 1)).toBe(5);
  });

  it('should work when the window size is equal to the array length', () => {
    expect(getMaxSubSumByWindowSize([1, 2, 3, 4], 4)).toBe(10);
  });

  it('should return 0 for an empty array', () => {
    expect(getMaxSubSumByWindowSize([], 3)).toBe(0);
  });

  it('should return 0 if the window size is 0 or less', () => {
    expect(getMaxSubSumByWindowSize([1, 2, 3], 0)).toBe(0);
    expect(getMaxSubSumByWindowSize([1, 2, 3], -1)).toBe(0);
  });

  it('should return 0 if the window size is greater than the array length', () => {
    expect(getMaxSubSumByWindowSize([1, 2, 3], 4)).toBe(0);
  });

  it('should handle arrays containing negative numbers', () => {
    expect(getMaxSubSumByWindowSize([-1, -2, 5, -4, 3], 2)).toBe(3);
    expect(getMaxSubSumByWindowSize([1, -5, 3, -2, 4], 3)).toBe(5);
  });
});
