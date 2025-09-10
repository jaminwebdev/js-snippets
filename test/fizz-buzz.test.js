import { describe, it, expect } from 'vitest';
import { fizzBuzz, fizzBuzzNormal } from '../problems/fizz-buzz.js';

describe('fizzBuzz', () => {
  it('should produce correct fizzbuzz sequence up to 15 with default numbers', () => {
    const expected = [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz'];
    expect(fizzBuzz(3, 5, 15)).toEqual(expected);
  });

  it('should produce correct fizzbuzz sequence with different numbers', () => {
    const expected = [1, 'fizz', 3, 'fizz', 'buzz', 'fizz', 7, 'fizz', 9, 'fizzbuzz'];
    expect(fizzBuzz(2, 5, 10)).toEqual(expected);
  });
});

describe('fizzBuzzNormal', () => {
  it('should produce correct fizzbuzz sequence up to 15 with default numbers', () => {
    const expected = [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz'];
    expect(fizzBuzzNormal(3, 5, 15)).toEqual(expected);
  });

  it('should produce correct fizzbuzz sequence with different numbers', () => {
    const expected = [1, 'fizz', 3, 'fizz', 'buzz', 'fizz', 7, 'fizz', 9, 'fizzbuzz'];
    expect(fizzBuzzNormal(2, 5, 10)).toEqual(expected);
  });
});
