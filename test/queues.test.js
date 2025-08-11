import { describe, it, expect } from 'vitest';
import { QueueArray, createQueue, QueueLinkedList, createQueueLinkedList } from '../data_structures/queues';

describe('QueueArray', () => {
    it('should create an empty queue', () => {
        const queue = new QueueArray();
        expect(queue.array).toEqual([]);
    });

    it('should push items to the queue', () => {
        const queue = new QueueArray();
        queue.push(1);
        queue.push(2);
        expect(queue.array).toEqual([1, 2]);
    });

    it('should shift items from the queue', () => {
        const queue = new QueueArray();
        queue.push(1);
        queue.push(2);
        queue.shift();
        expect(queue.array).toEqual([2]);
    });

    it('should allow chaining', () => {
        const queue = new QueueArray();
        queue.push(1).push(2).shift();
        expect(queue.array).toEqual([2]);
    });
});

describe('createQueue', () => {
    it('should create an empty queue', () => {
        const queue = createQueue();
        expect(queue.isEmpty()).toBe(true);
        expect(queue.getSize()).toBe(0);
    });

    it('should push items and update size', () => {
        const queue = createQueue();
        queue.push(1);
        queue.push(2);
        expect(queue.isEmpty()).toBe(false);
        expect(queue.getSize()).toBe(2);
    });

    it('should dequeue items', () => {
        const queue = createQueue();
        queue.push(1);
        queue.push(2);
        queue.dequeue();
        expect(queue.getSize()).toBe(1);
        expect(queue.peek()).toBe(2);
    });

    it('should peek at the first item', () => {
        const queue = createQueue();
        queue.push(1);
        queue.push(2);
        expect(queue.peek()).toBe(1);
    });

    it('should be empty after all items are dequeued', () => {
        const queue = createQueue();
        queue.push(1);
        queue.push(2);
        queue.dequeue();
        queue.dequeue();
        expect(queue.isEmpty()).toBe(true);
        expect(queue.getSize()).toBe(0);
    });
});

describe('QueueLinkedList', () => {
    it('should create an empty queue', () => {
        const queue = new QueueLinkedList();
        expect(queue.isEmpty()).toBe(true);
        expect(queue.size).toBe(0);
        expect(queue.first).toBe(null);
        expect(queue.last).toBe(null);
    });

    it('should enqueue items', () => {
        const queue = new QueueLinkedList();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.size).toBe(2);
        expect(queue.first.value).toBe(1);
        expect(queue.last.value).toBe(2);
    });

    it('should dequeue items', () => {
        const queue = new QueueLinkedList();
        queue.enqueue(1);
        queue.enqueue(2);
        const dequeued = queue.dequeue();
        expect(dequeued).toBe(1);
        expect(queue.size).toBe(1);
        expect(queue.first.value).toBe(2);
    });

    it('should peek at the first item', () => {
        const queue = new QueueLinkedList();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.peek()).toBe(1);
    });

    it('should handle dequeueing from an empty queue', () => {
        const queue = new QueueLinkedList();
        expect(queue.dequeue()).toBe(undefined);
    });

    it('should be empty after all items are dequeued', () => {
        const queue = new QueueLinkedList();
        queue.enqueue(1);
        queue.dequeue();
        expect(queue.isEmpty()).toBe(true);
        expect(queue.first).toBe(null);
        expect(queue.last).toBe(null);
    });
});

describe('createQueueLinkedList', () => {
    it('should create an empty queue', () => {
        const queue = createQueueLinkedList();
        expect(queue.isEmpty()).toBe(true);
        expect(queue.getSize()).toBe(0);
    });

    it('should enqueue items', () => {
        const queue = createQueueLinkedList();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.getSize()).toBe(2);
        expect(queue.peek()).toBe(1);
    });

    it('should dequeue items', () => {
        const queue = createQueueLinkedList();
        queue.enqueue(1);
        queue.enqueue(2);
        const dequeued = queue.dequeue();
        expect(dequeued).toBe(1);
        expect(queue.getSize()).toBe(1);
        expect(queue.peek()).toBe(2);
    });

    it('should peek at the first item', () => {
        const queue = createQueueLinkedList();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.peek()).toBe(1);
    });

    it('should handle dequeueing from an empty queue', () => {
        const queue = createQueueLinkedList();
        expect(queue.dequeue()).toBe(undefined);
    });

    it('should be empty after all items are dequeued', () => {
        const queue = createQueueLinkedList();
        queue.enqueue(1);
        queue.dequeue();
        expect(queue.isEmpty()).toBe(true);
        expect(queue.getSize()).toBe(0);
    });
});
