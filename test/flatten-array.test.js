import { describe, it, expect } from 'vitest';
import { flatten } from '../problems/flatten-array.js';

describe('flatten', () => {
  it('should return an already flat array as is', () => {
    expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should flatten a simple nested array', () => {
    expect(flatten([1, [2, 3]])).toEqual([1, 2, 3]);
  });

  it('should flatten a deeply nested array', () => {
    expect(flatten([1, [2, [3, 4], 5]])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle arrays with mixed data types', () => {
    expect(flatten([1, 'a', [2, true, [null]]])).toEqual([1, 'a', 2, true, null]);
  });

  it('should return an empty array for an empty input array', () => {
    expect(flatten([])).toEqual([]);
  });

  it('should handle empty nested arrays', () => {
    expect(flatten([[]])).toEqual([]);
    expect(flatten([1, [], [2, 3]])).toEqual([1, 2, 3]);
  });

  it('should handle multiple levels of nesting', () => {
    const nested = [1, [2, [3, [4, [5]]]]];
    expect(flatten(nested)).toEqual([1, 2, 3, 4, 5]);
  });
});
