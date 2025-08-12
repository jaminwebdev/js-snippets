import { describe, it, expect } from 'vitest';
import { isBalanced } from '../problems/balanced-parentheses.js';

describe('isBalanced', () => {
  it('should return true for balanced parentheses', () => {
    expect(isBalanced('()')).toBe(true);
    expect(isBalanced('[]')).toBe(true);
    expect(isBalanced('{}')).toBe(true);
    expect(isBalanced('()[]{}')).toBe(true);
    expect(isBalanced('([{}])')).toBe(true);
  });

  it('should return false for unbalanced parentheses', () => {
    expect(isBalanced('({[)')).toBe(false);
    expect(isBalanced('(()')).toBe(false);
    expect(isBalanced('())')).toBe(false);
    expect(isBalanced('((')).toBe(false);
    expect(isBalanced('}}')).toBe(false);
  });

  it('should return true for an empty string', () => {
    expect(isBalanced('')).toBe(true);
  });

});
