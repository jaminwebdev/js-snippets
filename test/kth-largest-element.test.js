import { describe, it, expect } from 'vitest';
import { kthLargestSort } from '../problems/kth-largest-element.js';

describe('kthLargestSort', () => {
  it('should find the 2nd largest element in a simple case', () => {
    expect(kthLargestSort([3, 2, 1, 5, 6, 4], 2)).toBe(5);
  });

  it('should handle arrays with duplicate numbers', () => {
    expect(kthLargestSort([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
  });

  it('should find the largest element when k is 1', () => {
    expect(kthLargestSort([7, 6, 5, 4, 3, 2, 1], 1)).toBe(7);
  });

  it('should find the smallest element when k is the array length', () => {
    expect(kthLargestSort([7, 6, 5, 4, 3, 2, 1], 7)).toBe(1);
  });

  it('should handle arrays with negative numbers', () => {
    expect(kthLargestSort([-1, -5, 2, 0], 2)).toBe(0);
  });

  it('should return undefined for an empty array', () => {
    expect(kthLargestSort([], 1)).toBeUndefined();
  });

  it('should work for an array with a single element', () => {
    expect(kthLargestSort([1], 1)).toBe(1);
  });
});
