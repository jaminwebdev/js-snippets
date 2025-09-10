import { describe, it, expect } from 'vitest';
import { 
    kthLargestSorting,
    kthLargestHeap,
    kthLargestQuickselect,
    kthLargestPartialSort,
    kthLargestBuiltin
} from '../problems/kth-largest-element.js';

const functions = [
    { name: 'kthLargestSorting', fn: kthLargestSorting },
    { name: 'kthLargestHeap', fn: kthLargestHeap },
    { name: 'kthLargestQuickselect', fn: kthLargestQuickselect },
    { name: 'kthLargestPartialSort', fn: kthLargestPartialSort },
    { name: 'kthLargestBuiltin', fn: kthLargestBuiltin },
];

functions.forEach(({ name, fn }) => {
    describe(name, () => {
        it('should find the 2nd largest element in a simple case', () => {
            expect(fn([3, 2, 1, 5, 6, 4], 2)).toBe(5);
        });

        it('should handle arrays with duplicate numbers', () => {
            expect(fn([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
        });

        it('should find the largest element when k is 1', () => {
            expect(fn([7, 6, 5, 4, 3, 2, 1], 1)).toBe(7);
        });

        it('should find the smallest element when k is the array length', () => {
            expect(fn([7, 6, 5, 4, 3, 2, 1], 7)).toBe(1);
        });

        it('should handle arrays with negative numbers', () => {
            expect(fn([-1, -5, 2, 0], 2)).toBe(0);
        });

        it('should return undefined for an empty array', () => {
            expect(fn([], 1)).toBeUndefined();
        });

        it('should work for an array with a single element', () => {
            expect(fn([1], 1)).toBe(1);
        });

        it('should return undefined for k = 0', () => {
            expect(fn([1, 2, 3], 0)).toBeUndefined();
        });

        it('should return undefined for k > array length', () => {
            expect(fn([1, 2, 3], 4)).toBeUndefined();
        });

        it('should handle an array with all same elements', () => {
            expect(fn([5, 5, 5, 5, 5], 3)).toBe(5);
        });

        it('should handle a large array', () => {
            const largeArr = Array.from({ length: 1000 }, (_, i) => i + 1); // 1 to 1000
            expect(fn(largeArr, 100)).toBe(901); // 100th largest is 1000 - 100 + 1 = 901
        });
    });
});