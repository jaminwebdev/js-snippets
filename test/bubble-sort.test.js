import { describe, it, expect } from 'vitest';
import { bblSort } from '../bubble-sort';

describe('bblSort', () => {
  it('should sort the array in ascending order', () => {
    expect(bblSort([23, 1, 54, 3, 32, 6, 9, 15, 23])).toEqual([1, 3, 6, 9, 15, 23, 23, 32, 54]);
  });
});
