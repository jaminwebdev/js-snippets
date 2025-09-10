// given an array
// find the kth largest element
// 2, 3, 4, 4, 5, 10, 12, 20
// 3rd largest is 10

// 1. Sorting Approach (Simple but O(n log n))
export const kthLargestSorting = (arr, k) => {
    if (k <= 0 || k > arr.length) return undefined;
    const sortedArr = [...arr].sort((a, b) => b - a); // Sort in descending order
    return sortedArr[k - 1]; // k-1 because arrays are 0-indexed
}

// 2. Using a Min-Heap approach with array (O(n log k))
class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    parent(i) { return Math.floor((i - 1) / 2); }
    leftChild(i) { return 2 * i + 1; }
    rightChild(i) { return 2 * i + 2; }
    
    insert(val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }
    
    heapifyUp(i) {
        while (i > 0 && this.heap[this.parent(i)] > this.heap[i]) {
            [this.heap[i], this.heap[this.parent(i)]] = [this.heap[this.parent(i)], this.heap[i]];
            i = this.parent(i);
        }
    }
    
    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return min;
    }
    
    heapifyDown(i) {
        let minIdx = i;
        const left = this.leftChild(i);
        const right = this.rightChild(i);
        
        if (left < this.heap.length && this.heap[left] < this.heap[minIdx]) {
            minIdx = left;
        }
        
        if (right < this.heap.length && this.heap[right] < this.heap[minIdx]) {
            minIdx = right;
        }
        
        if (minIdx !== i) {
            [this.heap[i], this.heap[minIdx]] = [this.heap[minIdx], this.heap[i]];
            this.heapifyDown(minIdx);
        }
    }
    
    peek() { return this.heap.length > 0 ? this.heap[0] : null; }
    size() { return this.heap.length; }
}

export const kthLargestHeap = (arr, k) => {
    if (k <= 0 || k > arr.length) return undefined;
    
    const minHeap = new MinHeap();
    
    for (let i = 0; i < k; i++) {
        minHeap.insert(arr[i]);
    }
    
    for (let i = k; i < arr.length; i++) {
        if (arr[i] > minHeap.peek()) {
            minHeap.extractMin();
            minHeap.insert(arr[i]);
        }
    }
    
    const result = minHeap.peek();
    return result === null ? undefined : result;
}

// 3. Quickselect Algorithm (O(n) average, O(n²) worst case)
export function kthLargestQuickselect(arr, k) {
    if (k <= 0 || k > arr.length) return undefined;

    const nums = [...arr]; // Create a copy to avoid modifying original
    
    function partition(left, right, pivotIdx) {
        const pivot = nums[pivotIdx];
        [nums[pivotIdx], nums[right]] = [nums[right], nums[pivotIdx]];
        
        let storeIdx = left;
        for (let i = left; i < right; i++) {
            if (nums[i] > pivot) {
                [nums[storeIdx], nums[i]] = [nums[i], nums[storeIdx]];
                storeIdx++;
            }
        }
        
        [nums[right], nums[storeIdx]] = [nums[storeIdx], nums[right]];
        return storeIdx;
    }
    
    function select(left, right, k) {
        if (left === right) {
            return nums[left];
        }
        
        let pivotIdx = left + Math.floor(Math.random() * (right - left + 1));
        pivotIdx = partition(left, right, pivotIdx);
        
        if (k === pivotIdx) {
            return nums[k];
        } else if (k < pivotIdx) {
            return select(left, pivotIdx - 1, k);
        } else {
            return select(pivotIdx + 1, right, k);
        }
    }
    
    return select(0, nums.length - 1, k - 1);
}

// 4. Simpler approach using partial sorting
export function kthLargestPartialSort(arr, k) {
    if (k <= 0 || k > arr.length) return undefined;

    const result = [];
    const nums = [...arr];
    
    for (let i = 0; i < k; i++) {
        let maxIdx = 0;
        for (let j = 1; j < nums.length; j++) {
            if (nums[j] > nums[maxIdx]) {
                maxIdx = j;
            }
        }
        result.push(nums[maxIdx]);
        nums.splice(maxIdx, 1);
    }
    
    return result[k - 1];
}

// 5. Using built-in sort with slice (clean and readable)
export function kthLargestBuiltin(arr, k) {
    if (k <= 0 || k > arr.length) return undefined;
    return arr.slice().sort((a, b) => b - a)[k - 1];
}