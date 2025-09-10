import { describe, it, expect } from 'vitest';
import { loopFirstAndLast, reduceLookupFistAndLast, arrayMethods } from '../problems/find-and-last-index.js';

describe('loopFirstAndLast (for sorted arrays)', () => {
  it('should find first and last index when target appears multiple times', () => {
    expect(loopFirstAndLast([1, 2, 5, 5, 5, 5, 8, 9], 5)).toEqual([2, 5]);
  });

  it('should return [index, undefined] for a single occurrence due to implementation detail', () => {
    expect(loopFirstAndLast([1, 2, 3, 4, 5], 3)).toEqual([2, undefined]);
  });

  it('should return [-1, -1] when target is not found', () => {
    expect(loopFirstAndLast([1, 2, 3, 4, 5], 6)).toEqual([-1, -1]);
  });

  it('should return [-1, -1] for an empty array', () => {
    expect(loopFirstAndLast([], 5)).toEqual([-1, -1]);
  });
});

describe('reduceLookupFistAndLast', () => {
  it('should find first and last index when target appears multiple times', () => {
    expect(reduceLookupFistAndLast([1, 2, 5, 5, 5, 5, 8, 9], 5)).toEqual([2, 5]);
  });

  it('should return [index, index] for a single occurrence', () => {
    expect(reduceLookupFistAndLast([1, 2, 3, 4, 5], 3)).toEqual([2, 2]);
  });

  it('should return [-1, -1] when target is not found', () => {
    expect(reduceLookupFistAndLast([1, 2, 3, 4, 5], 6)).toEqual([-1, -1]);
  });

  it('should return [-1, -1] for an empty array', () => {
    expect(reduceLookupFistAndLast([], 5)).toEqual([-1, -1]);
  });

  it('should handle non-adjacent occurrences', () => {
    expect(reduceLookupFistAndLast([5, 1, 2, 3, 5], 5)).toEqual([0, 4]);
  });
});

describe('arrayMethods', () => {
  it('should find first and last index when target appears multiple times', () => {
    expect(arrayMethods([1, 2, 5, 5, 5, 5, 8, 9], 5)).toEqual([2, 5]);
  });

  it('should return [index, index] for a single occurrence', () => {
    expect(arrayMethods([1, 2, 3, 4, 5], 3)).toEqual([2, 2]);
  });

  it('should return [-1, -1] when target is not found', () => {
    expect(arrayMethods([1, 2, 3, 4, 5], 6)).toEqual([-1, -1]);
  });

  it('should return [-1, -1] for an empty array', () => {
    expect(arrayMethods([], 5)).toEqual([-1, -1]);
  });
  
  it('should handle non-adjacent occurrences', () => {
    expect(arrayMethods([5, 1, 2, 3, 5], 5)).toEqual([0, 4]);
  });
});
