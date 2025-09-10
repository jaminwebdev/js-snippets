import { describe, it, expect } from 'vitest';
import { isValidPalindrome } from '../problems/palindrome';

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

  it('should handle palindromes with numbers', () => {
    expect(isValidPalindrome('12321')).toBe(true);
  });

  it('should return false for a non-palindrome with mixed characters', () => {
    expect(isValidPalindrome('A man, a plan, a canal: Panana')).toBe(false);
  });
});
