import { describe, it, expect } from 'vitest';
import { doArraysContainCommon } from '../algorithms_and_solutions/arrays-common-items';

describe('doArraysContainCommon', () => {
  it('should return true if arrays have a common item', () => {
    expect(doArraysContainCommon([1, 2, 3, 4], [4, 5, 6])).toBe(true);
  });

  it('should return false if arrays have no common items', () => {
    expect(doArraysContainCommon([1, 2, 3], [4, 5, 6])).toBe(false);
  });

  it('should handle empty arrays', () => {
    expect(doArraysContainCommon([], [1, 2, 3])).toBe(false);
    expect(doArraysContainCommon([1, 2, 3], [])).toBe(false);
    expect(doArraysContainCommon([], [])).toBe(false);
  });

  it('should work with different data types', () => {
    expect(doArraysContainCommon(['a', 'b', 'c'], ['d', 'e', 'f'])).toBe(false);
    expect(doArraysContainCommon(['a', 'b', 'c'], ['x', 'y', 'c'])).toBe(true);
  });

  it('should handle arrays with multiple common items', () => {
    expect(doArraysContainCommon([1, 2, 3], [3, 4, 1])).toBe(true);
  });
});
