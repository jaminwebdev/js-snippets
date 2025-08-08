import { describe, it, expect } from 'vitest';
import { merge, lookupMerge, spreadSortMerge } from '../algorithms/merge-sorted-arrays';

describe('merge', () => {
  it('should merge two sorted arrays', () => {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];
    expect(merge(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should handle empty arrays', () => {
    expect(merge([], [])).toEqual([]);
    expect(merge([1, 2], [])).toEqual([1, 2]);
    expect(merge([], [3, 4])).toEqual([3, 4]);
  });

  it('should handle arrays of different lengths', () => {
    const arr1 = [1, 5, 10, 15];
    const arr2 = [2, 3, 8];
    expect(merge(arr1, arr2)).toEqual([1, 2, 3, 5, 8, 10, 15]);
  });

  it('should handle arrays with duplicate values', () => {
    const arr1 = [1, 2, 2];
    const arr2 = [2, 3, 3];
    expect(merge(arr1, arr2)).toEqual([1, 2, 2, 2, 3, 3]);
  });
});

describe('lookupMerge', () => {
    it('should merge and sort two arrays, removing duplicates', () => {
        const arr1 = [5, 3, 1];
        const arr2 = [6, 4, 2];
        expect(lookupMerge(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('should handle empty arrays', () => {
        expect(lookupMerge([], [])).toEqual([]);
        expect(lookupMerge([2, 1], [])).toEqual([1, 2]);
        expect(lookupMerge([], [4, 3])).toEqual([3, 4]);
    });

    it('should handle arrays with duplicate values across both arrays', () => {
        const arr1 = [1, 5, 3];
        const arr2 = [5, 2, 1];
        expect(lookupMerge(arr1, arr2)).toEqual([1, 2, 3, 5]);
    });
});


describe('spreadSortMerge', () => {
  it('should merge and sort two arrays', () => {
    const arr1 = [5, 3, 1];
    const arr2 = [6, 4, 2];
    expect(spreadSortMerge(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should handle empty arrays', () => {
    expect(spreadSortMerge([], [])).toEqual([]);
    expect(spreadSortMerge([2, 1], [])).toEqual([1, 2]);
    expect(spreadSortMerge([], [4, 3])).toEqual([3, 4]);
  });

  it('should handle arrays with duplicate values', () => {
    const arr1 = [1, 5, 3, 5];
    const arr2 = [2, 1, 4];
    expect(spreadSortMerge(arr1, arr2)).toEqual([1, 1, 2, 3, 4, 5, 5]);
  });
});
