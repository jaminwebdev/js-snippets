import { describe, it, expect } from 'vitest';
import { arraySquareEquivalents, arraySquareEquivalents2 } from '../problems/array-square-equivalent';

describe('arraySquareEquivalents', () => {
  it('should return true if arrays are equivalent', () => {
    expect(arraySquareEquivalents([1, 2, 4, 4], [1, 4, 16, 16])).toBe(true);
  });

  it('should return false if arrays are not equivalent', () => {
    expect(arraySquareEquivalents([1, 2, 3], [1, 4, 8])).toBe(false);
  });
});

describe('arraySquareEquivalents2', () => {
  it('should return true if arrays are equivalent', () => {
    expect(arraySquareEquivalents2([1, 2, 4, 6, 4], [1, 16, 4, 36, 16])).toBe(true);
  });

  it('should return false if arrays are not equivalent', () => {
    expect(arraySquareEquivalents2([1, 2, 4, 6, 4], [1, 16, 4, 16, 16])).toBe(false);
  });
});
