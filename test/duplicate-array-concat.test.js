import { describe, it, expect } from 'vitest';
import { duplicate, duplicateSpread } from '../problems/duplicate-array-concat';

describe('duplicate', () => {
  it('should duplicate and concatenate an array of numbers', () => {
    const arr = [1, 2, 3];
    expect(duplicate(arr)).toEqual([1, 2, 3, 1, 2, 3]);
  });

  it('should handle an empty array', () => {
    const arr = [];
    expect(duplicate(arr)).toEqual([]);
  });

  it('should duplicate and concatenate an array of strings', () => {
    const arr = ['a', 'b', 'c'];
    expect(duplicate(arr)).toEqual(['a', 'b', 'c', 'a', 'b', 'c']);
  });
});

describe('duplicateSpread', () => {
  it('should duplicate and concatenate an array of numbers using spread', () => {
    const arr = [1, 2, 3];
    expect(duplicateSpread(arr)).toEqual([1, 2, 3, 1, 2, 3]);
  });

  it('should handle an empty array with spread', () => {
    const arr = [];
    expect(duplicateSpread(arr)).toEqual([]);
  });

  it('should duplicate and concatenate an array of strings using spread', () => {
    const arr = ['a', 'b', 'c'];
    expect(duplicateSpread(arr)).toEqual(['a', 'b', 'c', 'a', 'b', 'c']);
  });
});
