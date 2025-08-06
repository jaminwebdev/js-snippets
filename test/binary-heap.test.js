import { describe, it, expect } from 'vitest';
import { maxBinaryHeap, PriorityQueue } from '../data_structures/binary-heap';

describe('maxBinaryHeap', () => {
  it('should insert values and maintain the heap property', () => {
    const heap = new maxBinaryHeap();
    heap.insert(41);
    heap.insert(39);
    heap.insert(33);
    heap.insert(18);
    heap.insert(27);
    heap.insert(12);
    heap.insert(55);
    expect(heap.values).toEqual([55, 39, 41, 18, 27, 12, 33]);
  });

  it('should extract the max value and maintain the heap property', () => {
    const heap = new maxBinaryHeap();
    heap.insert(41);
    heap.insert(39);
    heap.insert(33);
    heap.insert(18);
    heap.insert(27);
    heap.insert(12);
    heap.insert(55);
    expect(heap.extractMax()).toBe(55);
    expect(heap.values).toEqual([41, 39, 33, 18, 27, 12]);
  });
});

describe('PriorityQueue', () => {
  it('should enqueue and dequeue elements based on priority', () => {
    const pq = new PriorityQueue();
    pq.enqueue('common cold', 5);
    pq.enqueue('gunshot wound', 1);
    pq.enqueue('high fever', 4);
    pq.enqueue('broken arm', 2);
    pq.enqueue('glass in foot', 3);
    expect(pq.dequeue().priority).toBe(1);
    expect(pq.dequeue().priority).toBe(2);
    expect(pq.dequeue().priority).toBe(3);
  });
});
