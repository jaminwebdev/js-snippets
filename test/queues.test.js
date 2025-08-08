import { describe, it, expect } from 'vitest';
import { queueArray, createQueue, queueLinkedList, createQueueLinkedList } from '../data_structures/queues.js';

describe('queueArray', () => {
    it('should push a value to the queue', () => {
        const queue = new queueArray();
        queue.push(10);
        expect(queue.array[0]).toBe(10);
    });

    it('should shift a value from the queue', () => {
        const queue = new queueArray();
        queue.push(10);
        queue.push(20);
        queue.shift();
        expect(queue.array[0]).toBe(20);
    });

    it('should be chainable', () => {
        const queue = new queueArray();
        queue.push(10).push(20).shift();
        expect(queue.array[0]).toBe(20);
    });
});

describe('createQueue', () => {
    it('should push a value to the queue', () => {
        const queue = createQueue();
        queue.push(10);
        expect(queue.peek()).toBe(10);
    });

    it('should dequeue a value from the queue', () => {
        const queue = createQueue();
        queue.push(10);
        queue.push(20);
        queue.dequeue();
        expect(queue.peek()).toBe(20);
    });

    it('should peek at the last value of the queue', () => {
        const queue = createQueue();
        queue.push(10);
        queue.push(20);
        expect(queue.peek()).toBe(20);
    });

    it('should return the correct size', () => {
        const queue = createQueue();
        queue.push(10);
        queue.push(20);
        expect(queue.getSize()).toBe(2);
    });

    it('should check if the queue is empty', () => {
        const queue = createQueue();
        expect(queue.isEmpty()).toBe(true);
        queue.push(10);
        expect(queue.isEmpty()).toBe(false);
    });
});

describe('queueLinkedList', () => {
    it('should push a value to the queue', () => {
        const queue = new queueLinkedList();
        queue.push(10);
        expect(queue.first.value).toBe(10);
        expect(queue.last.value).toBe(10);
        queue.push(20);
        expect(queue.first.value).toBe(10);
        expect(queue.last.value).toBe(20);
    });

    it('should dequeue a value from the queue', () => {
        const queue = new queueLinkedList();
        queue.push(10);
        queue.push(20);
        const dequeued = queue.dequeue();
        expect(dequeued).toBe(10);
        expect(queue.first.value).toBe(20);
    });

    it('should handle dequeueing from an empty queue', () => {
        const queue = new queueLinkedList();
        expect(queue.dequeue()).toBe(undefined);
    });
});

describe('createQueueLinkedList', () => {
    it('should enqueue a value to the queue', () => {
        const queue = createQueueLinkedList();
        queue.enqueue(10);
        expect(queue.peek()).toBe(10);
    });

    it('should dequeue a value from the queue', () => {
        const queue = createQueueLinkedList();
        queue.enqueue(10);
        queue.enqueue(20);
        const dequeued = queue.dequeue();
        expect(dequeued).toBe(10);
        expect(queue.peek()).toBe(20);
    });

    it('should peek at the first value of the queue', () => {
        const queue = createQueueLinkedList();
        queue.enqueue(10);
        queue.enqueue(20);
        expect(queue.peek()).toBe(10);
    });

    it('should return the correct size', () => {
        const queue = createQueueLinkedList();
        queue.enqueue(10);
        queue.enqueue(20);
        expect(queue.getSize()).toBe(2);
    });

    it('should check if the queue is empty', () => {
        const queue = createQueueLinkedList();
        expect(queue.isEmpty()).toBe(true);
        queue.enqueue(10);
        expect(queue.isEmpty()).toBe(false);
    });

    it('should handle dequeueing from an empty queue', () => {
        const queue = createQueueLinkedList();
        expect(queue.dequeue()).toBe(undefined);
    });
});
