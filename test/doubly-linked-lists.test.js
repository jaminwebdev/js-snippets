import { describe, it, expect } from 'vitest';
import { Node, DoublyLinkedList } from '../data_structures/doubly-linked-lists';

describe('Node', () => {
  it('should create a node with a value', () => {
    const node = new Node(10);
    expect(node.val).toBe(10);
    expect(node.next).toBeNull();
    expect(node.prev).toBeNull();
  });
});

describe('DoublyLinkedList', () => {
  it('should initialize an empty list', () => {
    const list = new DoublyLinkedList();
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.length).toBe(0);
  });

  it('should push a node to an empty list', () => {
    const list = new DoublyLinkedList();
    list.push(10);
    expect(list.head.val).toBe(10);
    expect(list.tail.val).toBe(10);
    expect(list.length).toBe(1);
  });

  it('should push multiple nodes to the list', () => {
    const list = new DoublyLinkedList();
    list.push(10);
    list.push(20);
    list.push(30);
    expect(list.head.val).toBe(10);
    expect(list.tail.val).toBe(30);
    expect(list.tail.prev.val).toBe(20);
    expect(list.length).toBe(3);
  });

  it('should pop a node from the list', () => {
    const list = new DoublyLinkedList();
    list.push(10);
    list.push(20);
    const poppedNode = list.pop();
    expect(poppedNode.val).toBe(20);
    expect(list.tail.val).toBe(10);
    expect(list.length).toBe(1);
  });

  it('should return undefined when popping from an empty list', () => {
    const list = new DoublyLinkedList();
    const poppedNode = list.pop();
    expect(poppedNode).toBeUndefined();
  });

  it('should shift a node from the list', () => {
    const list = new DoublyLinkedList();
    list.push(10);
    list.push(20);
    const shiftedNode = list.shift();
    expect(shiftedNode.val).toBe(10);
    expect(list.head.val).toBe(20);
    expect(list.length).toBe(1);
  });

  it('should return undefined when shifting from an empty list', () => {
    const list = new DoublyLinkedList();
    const shiftedNode = list.shift();
    expect(shiftedNode).toBeUndefined();
  });

  it('should unshift a node to an empty list', () => {
    const list = new DoublyLinkedList();
    list.unshift(10);
    expect(list.head.val).toBe(10);
    expect(list.tail.val).toBe(10);
    expect(list.length).toBe(1);
  });

  it('should unshift a node to the beginning of the list', () => {
    const list = new DoublyLinkedList();
    list.push(20);
    list.unshift(10);
    expect(list.head.val).toBe(10);
    expect(list.head.next.val).toBe(20);
    expect(list.length).toBe(2);
  });

  it('should set the value of a node at a specific index', () => {
    const list = new DoublyLinkedList();
    list.push(10);
    list.push(20);
    list.push(30);
    list.set(1, 25);
    expect(list.traverseToIndex(1).value).toBe(25);
  });

  it('should insert a node at a specific index', () => {
    const list = new DoublyLinkedList();
    list.push(10);
    list.push(30);
    list.insert(1, 20);
    expect(list.head.next.val).toBe(20);
    expect(list.tail.prev.val).toBe(20);
    expect(list.length).toBe(3);
  });

  it('should remove a node from a specific index', () => {
    const list = new DoublyLinkedList();
    list.push(10);
    list.push(20);
    list.push(30);
    const removedNode = list.remove(1);
    expect(removedNode.val).toBe(20);
    expect(list.head.next.val).toBe(30);
    expect(list.length).toBe(2);
  });

  it('should traverse to the correct node', () => {
    const list = new DoublyLinkedList();
    list.push(10);
    list.push(20);
    list.push(30);
    list.push(40);
    list.push(50);
    const node = list.traverseToIndex(3);
    expect(node.val).toBe(40);
  });
});
