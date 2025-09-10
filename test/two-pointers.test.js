import { describe, it, expect } from 'vitest';
import {
    twoSumSorted,
    isValidPalindrome
} from '../problems/approaches/two-pointers.js';

describe('Two Pointers from Opposite Ends', () => {

    describe('twoSumSorted', () => {
        it('should return the pair of numbers that sum up to the target', () => {
            expect(twoSumSorted([1, 2, 3, 9], 5)).toEqual([2, 3]);
        });

        it('should return null if no such pair is found', () => {
            expect(twoSumSorted([1, 2, 3, 9], 15)).toBe(null);
        });

        it('should handle a pair that includes the first element', () => {
            expect(twoSumSorted([2, 7, 11, 15], 9)).toEqual([2, 7]);
        });

        it('should handle a pair that includes the last element', () => {
            expect(twoSumSorted([2, 7, 11, 15], 26)).toEqual([11, 15]);
        });

        it('should work correctly with negative numbers', () => {
            expect(twoSumSorted([-2, 0, 1, 3], 1)).toEqual([-2, 3]);
        });

        it('should handle arrays with duplicate numbers', () => {
            expect(twoSumSorted([1, 2, 4, 4], 8)).toEqual([4, 4]);
        });

        it('should return null for an empty array', () => {
            expect(twoSumSorted([], 10)).toBe(null);
        });
    });

    describe('isValidPalindrome', () => {
        it('should return true for a simple palindrome', () => {
            expect(isValidPalindrome('racecar')).toBe(true);
        });

        it('should return false for a non-palindrome', () => {
            expect(isValidPalindrome('hello')).toBe(false);
        });

        it('should be case-insensitive', () => {
            expect(isValidPalindrome('RaceCar')).toBe(true);
        });

        it('should ignore non-alphanumeric characters', () => {
            expect(isValidPalindrome('A man, a plan, a canal: Panama')).toBe(true);
        });

        it('should return true for an empty string', () => {
            expect(isValidPalindrome('')).toBe(true);
        });

        it('should return true for a single-character string', () => {
            expect(isValidPalindrome('a')).toBe(true);
        });

        it('should handle palindromes that include numbers', () => {
            expect(isValidPalindrome('12321')).toBe(true);
        });
    });
});
