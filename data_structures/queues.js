export class QueueArray {
    constructor() {
        this.array = []
    }

    push(val) {
        this.array.push(val);
        return this;
    }

    shift() {
        this.array.shift();
        return this;
    }
}

export const createQueue = () => {
  let array = [];
  
  const push = val =>  {
    return array.push(val)
  }
  
  const dequeue = () => {
    return array.shift();
  }

  const peek = ()  => array[0];

  const getSize = () => array.length;

  const isEmpty = () => array.length === 0;
  
  const publicAPI = {
      peek,
      push,
      dequeue,
      getSize,
      isEmpty
  };
  
  return publicAPI;
}

export class Node {
  constructor(val) {
      this.value = val;
      this.next = null;
  }
}

// Queue implementation using a linked list
// FIFO (First In, First Out) - add to end, remove from beginning for O(1) operations
export class QueueLinkedList {
  constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
  }

  enqueue(val) {
      const newNode = new Node(val);

      if (!this.first) {
          this.first = newNode;
          this.last = newNode;
      } else {
          this.last.next = newNode;
          this.last = newNode;
      }

      this.size++;
      return this.size;
  }

  dequeue() {
      if (!this.first) {
          return undefined;
      }

      const temp = this.first;
      this.first = this.first.next;
      
      if (!this.first) {  // Queue is now empty
          this.last = null;
      }

      this.size--;
      return temp.value;
  }

  peek() {
      return this.first ? this.first.value : undefined;
  }

  isEmpty() {
      return this.size === 0;
  }
}

export const createNode = (value) => 
  ({
    value: value,
    next: null
  })


export const createQueueLinkedList = () => {
  let first = null;
  let last = null;
  let size = 0;
  
  const enqueue = (val) => {
      const newNode = createNode(val);
      
      if (!first) {
          first = newNode;
          last = newNode;
      } else {
          last.next = newNode;
          last = newNode;
      }
      
      size++;
      return size;
  };
  
  const dequeue = () => {
      if (!first) {
          return undefined;
      }
      
      const temp = first;
      first = first.next;
      
      if (!first) {  // Queue is now empty
          last = null;
      }
      
      size--;
      return temp.value;
  };
  
  const peek = () => first ? first.value : undefined;
  
  const getSize = () => size;
  
  const isEmpty = () => size === 0;
  
  // Revealing module pattern - expose only what should be public
  return {
      enqueue,
      dequeue,
      peek,
      getSize,
      isEmpty
  };
};