import { describe, it, expect } from 'vitest';
import { BST } from '../data_structures/binary-search-tree';

describe('BST', () => {
  it('should insert values correctly', () => {
    const bst = new BST();
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    expect(bst.root.value).toBe(10);
    expect(bst.root.left.value).toBe(5);
    expect(bst.root.right.value).toBe(15);
  });

  it('should find values correctly', () => {
    const bst = new BST();
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    expect(bst.find(10)).not.toBe(null);
    expect(bst.find(20)).toBe(null);
  });

  it('should perform BFS correctly', () => {
    const bst = new BST();
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    const result = bst.BFS().map(node => node.value);
    expect(result).toEqual([10, 5, 15]);
  });

  it('should perform DFS PreOrder correctly', () => {
    const bst = new BST();
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    expect(bst.DFSPreOrder()).toEqual([10, 5, 15]);
  });

  it('should perform DFS PostOrder correctly', () => {
    const bst = new BST();
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    expect(bst.DFSPostOrder()).toEqual([5, 15, 10]);
  });

  it('should perform DFS InOrder correctly', () => {
    const bst = new BST();
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    expect(bst.DFSInOrder()).toEqual([5, 10, 15]);
  });
});
