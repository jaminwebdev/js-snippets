import { describe, it, expect } from 'vitest';
import {
    findMaxSumOfFixedWindow,
    findAveragesOfFixedWindows,
    findLongestSubstringWithoutRepeats,
    findMaxStockProfit,
    findLongestSubarrayWithSumLimit,
    findMinimumWindowSubstring,
    minSubArrayLen
} from '../problems/approaches/sliding-window.js';

describe('Sliding Window Approaches', () => {

    describe('findMaxSumOfFixedWindow', () => {
        it('should find the max sum of a subarray for a given fixed window size', () => {
            expect(findMaxSumOfFixedWindow([2, 1, 5, 1, 3, 2], 3)).toBe(9);
        });

        it('should return 0 if the window size is invalid or the array is empty', () => {
            expect(findMaxSumOfFixedWindow([1, 2, 3], 4)).toBe(0);
            expect(findMaxSumOfFixedWindow([], 2)).toBe(0);
            expect(findMaxSumOfFixedWindow([1, 2, 3], 0)).toBe(0);
        });

        it('should correctly handle negative numbers', () => {
            expect(findMaxSumOfFixedWindow([-1, -2, 5, -4, 3], 2)).toBe(3);
        });
    });

    describe('findAveragesOfFixedWindows', () => {
        it('should find the average of all subarrays of a given size', () => {
            const result = findAveragesOfFixedWindows([1, 3, 2, 6, -1, 4, 1, 8, 2], 5);
            expect(result).toEqual([2.2, 2.8, 2.4, 3.6, 2.8]);
        });

        it('should return an empty array for an invalid window size or empty array', () => {
            expect(findAveragesOfFixedWindows([1, 2, 3], 4)).toEqual([]);
            expect(findAveragesOfFixedWindows([], 2)).toEqual([]);
        });

        it('should work correctly for a window size of 1', () => {
            expect(findAveragesOfFixedWindows([1, 2, 3], 1)).toEqual([1, 2, 3]);
        });
    });

    describe('findLongestSubstringWithoutRepeats', () => {
        it('should find the length of the longest substring without repeating characters', () => {
            expect(findLongestSubstringWithoutRepeats("abcabcbb")).toBe(3);
        });

        it('should return 1 for a string of all the same characters', () => {
            expect(findLongestSubstringWithoutRepeats("bbbbb")).toBe(1);
        });

        it('should handle the longest substring being at the end', () => {
            expect(findLongestSubstringWithoutRepeats("pwwkew")).toBe(3);
        });

        it('should return 0 for an empty string', () => {
            expect(findLongestSubstringWithoutRepeats("")).toBe(0);
        });

        it('should return the string length if no characters repeat', () => {
            expect(findLongestSubstringWithoutRepeats("abcdefg")).toBe(7);
        });
    });

    describe('findMaxStockProfit', () => {
        it('should find the max profit in a typical case', () => {
            expect(findMaxStockProfit([7, 1, 5, 3, 6, 4])).toBe(5);
        });

        it('should return 0 if prices are always decreasing', () => {
            expect(findMaxStockProfit([7, 6, 4, 3, 1])).toBe(0);
        });

        it('should return 0 for empty or single-element arrays', () => {
            expect(findMaxStockProfit([])).toBe(0);
            expect(findMaxStockProfit([5])).toBe(0);
        });
    });

    describe('findLongestSubarrayWithSumLimit', () => {
        it('should find the length of the longest subarray with sum less than or equal to target', () => {
            expect(findLongestSubarrayWithSumLimit([2, 1, 5, 1, 3, 2], 7)).toBe(3);
        });

        it('should return 0 if all elements are larger than the target', () => {
            expect(findLongestSubarrayWithSumLimit([8, 9, 10], 7)).toBe(0);
        });

        it('should return 0 for an empty array or negative target', () => {
            expect(findLongestSubarrayWithSumLimit([], 5)).toBe(0);
            expect(findLongestSubarrayWithSumLimit([1, 2], -1)).toBe(0);
        });
    });

    describe('findMinimumWindowSubstring', () => {
        it('should find the minimum window substring in a simple case', () => {
            expect(findMinimumWindowSubstring("ADOBECODEBANC", "ABC")).toBe("BANC");
        });

        it('should work when the window is the character itself', () => {
            expect(findMinimumWindowSubstring("a", "a")).toBe("a");
        });

        it('should return an empty string if the target is not in the source', () => {
            expect(findMinimumWindowSubstring("a", "aa")).toBe("");
        });

        it('should return an empty string if the source is shorter than the target', () => {
            expect(findMinimumWindowSubstring("a", "b")).toBe("");
        });

        it('should handle complex cases with repeated characters', () => {
            expect(findMinimumWindowSubstring("acbbaca", "aba")).toBe("baca");
        });

        it('should return an empty string for empty inputs', () => {
            expect(findMinimumWindowSubstring("", "a")).toBe("");
            expect(findMinimumWindowSubstring("a", "")).toBe("");
        });
    });

    describe('minSubArrayLen', () => {
        it('should find the minimal length of a subarray that sums to the target', () => {
            expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toBe(2);
        });

        it('should return 0 if no subarray sums to the target', () => {
            expect(minSubArrayLen([1, 1, 1, 1], 5)).toBe(0);
        });

        it('should return the correct length when the subarray is at the beginning', () => {
            expect(minSubArrayLen([3, 4, 1, 1, 6], 8)).toBe(3);
        });

        it('should handle cases where a single element meets the target', () => {
            expect(minSubArrayLen([1, 4, 4], 4)).toBe(1);
        });

        it('should work for longer arrays', () => {
            expect(minSubArrayLen([1, 2, 3, 4, 5], 11)).toBe(3);
        });

        it('should return 0 for an empty array', () => {
            expect(minSubArrayLen([], 7)).toBe(0);
        });
    });
});
