import { describe, it, expect } from 'vitest';
import { findMaxProfit, findMaxProfitOneLiner, findMaxStockProfit } from '../problems/max-profit.js';

describe('findMaxProfit', () => {
  it('finds the max profit in a simple case', () => {
    expect(findMaxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  it('returns -Infinity for a consistently decreasing array due to its implementation', () => {
    expect(findMaxProfit([7, 6, 4, 3, 1])).toBe(-Infinity);
  });

  it('fails to find the correct profit when the best buy day is not the absolute minimum price', () => {
    const prices = [2, 8, 1, 3];
    const correctProfit = 6; // Buy at 2, sell at 8
    const calculatedProfit = 2; // The function buys at 1, sells at 3
    expect(findMaxProfit(prices)).toBe(calculatedProfit);
    expect(findMaxProfit(prices)).not.toBe(correctProfit);
  });
});

describe('findMaxProfitOneLiner', () => {
  it('finds the max profit in a simple case', () => {
    expect(findMaxProfitOneLiner([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  it('returns -Infinity for a consistently decreasing array due to its implementation', () => {
    expect(findMaxProfitOneLiner([7, 6, 4, 3, 1])).toBe(-Infinity);
  });

  it('fails to find the correct profit when the best buy day is not the absolute minimum price', () => {
    const prices = [2, 8, 1, 3];
    const correctProfit = 6; // Buy at 2, sell at 8
    const calculatedProfit = 2; // The function buys at 1, sells at 3
    expect(findMaxProfitOneLiner(prices)).toBe(calculatedProfit);
    expect(findMaxProfitOneLiner(prices)).not.toBe(correctProfit);
  });
});

describe('findMaxStockProfit', () => {
  it('should find the max profit in a typical case', () => {
    expect(findMaxStockProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  it('should return 0 if no profit is possible in a decreasing market', () => {
    expect(findMaxStockProfit([7, 6, 4, 3, 1])).toBe(0);
  });

  it('should return 0 for an empty or single-element array', () => {
    expect(findMaxStockProfit([])).toBe(0);
    expect(findMaxStockProfit([5])).toBe(0);
  });

  it('should find the correct profit even when the best buy day is not the absolute minimum price', () => {
    expect(findMaxStockProfit([2, 8, 1, 3])).toBe(6);
  });

  it('should handle more complex cases', () => {
    expect(findMaxStockProfit([3, 2, 6, 5, 0, 3])).toBe(4);
  });
});
