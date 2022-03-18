class maxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);
        this.bubbleUp(value);
    }

    bubbleUp(element) {
        // index of recently pushed value
        let index = this.values.length - 1;
        while(index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];

            // break loop if parent value is greater than the value being bubbled up
            if( element <= parent) break;

            // if element > parent, swap
            this.values[parentIndex] = element;
            this.values[index] = parent;
            // update the index to its new place in the heap after swap
            index = parentIndex;
        }
    }

    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
          this.values[0] = end;
          this.sinkDown();
        }
        return max;
      }

      sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while (true) {
          let leftChildIdx = 2 * idx + 1;
          let rightChildIdx = 2 * idx + 2;
          let leftChild, rightChild;
          let swap = null;
     
          // if left > element
          if (leftChildIdx < length) {
            leftChild = this.values[leftChildIdx]
            if (leftChild > element) {
              swap = leftChildIdx
            }
          }
          // if right > element & left
          if (rightChildIdx < length) {
            rightChild = this.values[rightChildIdx]
            if ( rightChild > element && rightChild > leftChild) {
              swap = rightChildIdx
            }
          }
          
          // if no swaps needed, we're in order and break the loop
          if (swap === null) break;

          // swap logic
          this.values[idx] = this.values[swap];
          this.values[swap] = element;
          // update the index for the next iteration
          idx = swap;
        }
      }
}

let heap = new maxBinaryHeap();
heap.insert(55);

class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority
    }
}

class PriorityQueue {
    constructor(){
        this.values = [];
    }
    
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }

    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }

            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if( rightChild.priority < element.priority && rightChild.priority < leftChild.priority ) {
                   swap = rightChildIdx;
                }
            }

            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

let ER = new PriorityQueue();
ER.enqueue("common cold",5)
ER.enqueue("gunshot wound", 1)
ER.enqueue("high fever",4)
ER.enqueue("broken arm",2)
ER.enqueue("glass in foot",3)
ER.enqueue("broken face", 2);
ER.enqueue("broken brain", 1);

ER.dequeue();
ER.dequeue();

console.log(ER);