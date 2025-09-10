import { describe, it, expect } from 'vitest';
import { 
    fibonacciRecursive,
    fibonacciRecursiveCached,
    fibonacciIterative,
    fibonacciIterativeReduce
} from '../problems/fibonacci.js';

describe('fibonacciRecursive', () => {
  it('should return the correct fibonacci number', () => {
    expect(fibonacciRecursive(0)).toBe(0);
    expect(fibonacciRecursive(1)).toBe(1);
    expect(fibonacciRecursive(2)).toBe(1);
    expect(fibonacciRecursive(5)).toBe(5);
    expect(fibonacciRecursive(10)).toBe(55);
  });
});

describe('fibonacciRecursiveCached', () => {
  it('should return the correct fibonacci number', () => {
    const fib = fibonacciRecursiveCached();
    expect(fib(0)).toBe(0);
    expect(fib(1)).toBe(1);
    expect(fib(2)).toBe(1);
    expect(fib(5)).toBe(5);
    expect(fib(10)).toBe(55);
  });
});

describe('fibonacciIterative', () => {
  it('should return the correct fibonacci number', () => {
    expect(fibonacciIterative(0)).toBe(0);
    expect(fibonacciIterative(1)).toBe(1);
    expect(fibonacciIterative(2)).toBe(1);
    expect(fibonacciIterative(5)).toBe(5);
    expect(fibonacciIterative(10)).toBe(55);
  });
});

describe('fibonacciIterativeReduce', () => {
  it('should return the correct fibonacci number', () => {
    expect(fibonacciIterativeReduce(0)).toBe(0);
    expect(fibonacciIterativeReduce(1)).toBe(1);
    expect(fibonacciIterativeReduce(2)).toBe(1);
    expect(fibonacciIterativeReduce(5)).toBe(5);
    expect(fibonacciIterativeReduce(10)).toBe(55);
  });
});
