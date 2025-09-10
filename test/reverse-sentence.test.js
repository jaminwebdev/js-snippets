import { describe, it, expect } from 'vitest';
import { reverseBySeparator } from '../problems/reverse-sentence.js';

describe('reverseBySeparator', () => {
  it('should reverse the characters of a string when the separator is an empty string', () => {
    const str = 'Hello World';
    const expected = 'dlroW olleH';
    expect(reverseBySeparator(str, '')).toBe(expected);
  });

  it('should reverse the words in a sentence when the separator is a space', () => {
    const str = 'Welcome to this Javascript Guide!';
    const expected = 'Guide! Javascript this to Welcome';
    expect(reverseBySeparator(str, ' ')).toBe(expected);
  });

  it('should reverse segments of a string based on a custom separator', () => {
    const str = 'one,two,three,four';
    const expected = 'four,three,two,one';
    expect(reverseBySeparator(str, ',')).toBe(expected);
  });

  it('should return an empty string if the input is an empty string', () => {
    expect(reverseBySeparator('', ' ')).toBe('');
    expect(reverseBySeparator('', '')).toBe('');
  });

  it('should return the original string if it does not contain the separator', () => {
    const str = 'onelongword';
    expect(reverseBySeparator(str, ' ')).toBe(str);
  });

  it('should preserve multiple separators between segments', () => {
    const str = 'one  two';
    const expected = 'two  one';
    expect(reverseBySeparator(str, ' ')).toBe(expected);
  });

  it('should preserve leading and trailing separators', () => {
    const str = ' one two ';
    const expected = ' two one ';
    expect(reverseBySeparator(str, ' ')).toBe(expected);
  });
});
