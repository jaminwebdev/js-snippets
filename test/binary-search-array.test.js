import { describe, it, expect } from 'vitest';
import { binarySearchArrayRecursive, binarySearchArrayIterative } from '../algorithms/binary-search-array';

describe('binarySearchArrayRecursive', () => {
  it('should return true if the value is found', () => {
    expect(binarySearchArrayRecursive([1, 3, 5, 7, 8, 9], 7)).toBe(true);
  });

  it('should return false if the value is not found', () => {
    expect(binarySearchArrayRecursive([1, 3, 5, 7, 8, 9], 6)).toBe(false);
  });
});

describe('binarySearchArrayIterative', () => {
  it('should return true if the value is found', () => {
    expect(binarySearchArrayIterative([1, 3, 5, 7, 8, 9], 7)).toBe(true);
  });

  it('should return false if the value is not found', () => {
    expect(binarySearchArrayIterative([1, 3, 5, 7, 8, 9], 6)).toBe(false);
  });
});
