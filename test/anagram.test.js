import { describe, it, expect } from 'vitest';
import { validAnagram, sortAnagram } from '../anagram';

describe('validAnagram', () => {
  it('should return true for valid anagrams', () => {
    expect(validAnagram('anagram', 'nagaram')).toBe(true);
    expect(validAnagram('rat', 'car')).toBe(false);
  });

  it('should return false for strings with different lengths', () => {
    expect(validAnagram('aaz', 'aa')).toBe(false);
  });

  it('should handle empty strings', () => {
    expect(validAnagram('', '')).toBe(true);
  });
});

describe('sortAnagram', () => {
  it('should return true for valid anagrams', () => {
    expect(sortAnagram('anagram', 'nagaram')).toBe(true);
    expect(sortAnagram('rat', 'car')).toBe(false);
  });

  it('should be case-insensitive', () => {
    expect(sortAnagram('Anagram', 'Nagaram')).toBe(true);
  });

  it('should handle empty strings', () => {
    expect(sortAnagram('', '')).toBe(true);
  });
});
