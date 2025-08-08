import { describe, it, expect } from 'vitest';
import { stackArray, createStack, StackLinkedList, createStackLinkedList } from '../data_structures/stack.js';

describe('stackArray', () => {
    it('should push a value to the stack', () => {
        const stack = new stackArray();
        stack.push(10);
        expect(stack.peek()).toBe(10);
    });

    it('should pop a value from the stack', () => {
        const stack = new stackArray();
        stack.push(10);
        stack.push(20);
        stack.pop();
        expect(stack.peek()).toBe(10);
    });

    it('should peek at the top value of the stack', () => {
        const stack = new stackArray();
        stack.push(10);
        stack.push(20);
        expect(stack.peek()).toBe(20);
    });

    it('should be chainable', () => {
        const stack = new stackArray();
        stack.push(10).push(20).pop();
        expect(stack.peek()).toBe(10);
    });
});

describe('createStack', () => {
    it('should push a value to the stack', () => {
        const stack = createStack();
        stack.push(10);
        expect(stack.peek()).toBe(10);
    });

    it('should pop a value from the stack', () => {
        const stack = createStack();
        stack.push(10);
        stack.push(20);
        stack.pop();
        expect(stack.peek()).toBe(10);
    });

    it('should peek at the top value of the stack', () => {
        const stack = createStack();
        stack.push(10);
        stack.push(20);
        expect(stack.peek()).toBe(20);
    });

    it('should return the correct size', () => {
        const stack = createStack();
        stack.push(10);
        stack.push(20);
        expect(stack.getSize()).toBe(2);
    });

    it('should check if the stack is empty', () => {
        const stack = createStack();
        expect(stack.isEmpty()).toBe(true);
        stack.push(10);
        expect(stack.isEmpty()).toBe(false);
    });
});

describe('StackLinkedList', () => {
    it('should push a value to the stack', () => {
        const stack = new StackLinkedList();
        stack.push(10);
        expect(stack.first.value).toBe(10);
    });

    it('should pop a value from the stack', () => {
        const stack = new StackLinkedList();
        stack.push(10);
        stack.push(20);
        const popped = stack.pop();
        expect(popped).toBe(20);
        expect(stack.first.value).toBe(10);
    });

    it('should handle popping from an empty stack', () => {
        const stack = new StackLinkedList();
        expect(stack.pop()).toBe(undefined);
    });
});

describe('createStackLinkedList', () => {
    it('should push a value to the stack', () => {
        const stack = createStackLinkedList();
        stack.push(10);
        expect(stack.peek()).toBe(10);
    });

    it('should pop a value from the stack', () => {
        const stack = createStackLinkedList();
        stack.push(10);
        stack.push(20);
        const popped = stack.pop();
        expect(popped).toBe(20);
        expect(stack.peek()).toBe(10);
    });

    it('should peek at the top value of the stack', () => {
        const stack = createStackLinkedList();
        stack.push(10);
        stack.push(20);
        expect(stack.peek()).toBe(20);
    });

    it('should return the correct size', () => {
        const stack = createStackLinkedList();
        stack.push(10);
        stack.push(20);
        expect(stack.getSize()).toBe(2);
    });

    it('should check if the stack is empty', () => {
        const stack = createStackLinkedList();
        expect(stack.isEmpty()).toBe(true);
        stack.push(10);
        expect(stack.isEmpty()).toBe(false);
    });

    it('should handle popping from an empty stack', () => {
        const stack = createStackLinkedList();
        expect(stack.pop()).toBe(undefined);
    });
});
