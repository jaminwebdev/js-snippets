export class StackArray {
    constructor() {
        this.array = [];
    }

    peek() {
        return this.array[this.array.length - 1];
    }

    push(val) {
        this.array.push(val);
        return this.array.length;
    }

    pop() {
        return this.array.pop();
    }
}

export const createStack = () => {
  let array = [];
  
  const push = val =>  {
    array.push(val);
    return array.length;
  }
  
  const pop = () => array.pop();
  
  const peek = ()  => array[array.length - 1];

  const getSize = () => array.length;

  const isEmpty = () => array.length === 0;
  
  const publicAPI = {
      peek,
      push,
      pop,
      getSize,
      isEmpty
  };
  
  return publicAPI;
}


export class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// since we're using a linked list, to keep constant time
// pop will remove from the beginning of the linked list instead of popping from the end
// FILO
export class StackLinkedList {
  constructor() {
      this.first = null;
      this.size = 0;
  }

  push(val) {
      let node = new Node(val);
      node.next = this.first;
      this.first = node;
      this.size++;
      return this.size;
  }

  pop() {
      if (!this.first) {
          return undefined;
      }

      let temp = this.first;
      this.first = this.first.next;
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

export const createStackLinkedList = () => {
  let first = null;
  let size = 0;
  
  const push = val => {
      const node = createNode(val);
      node.next = first;
      first = node;
      size++;
      return size;
  }
  
  const pop = () => {
      if (!first) {
          return undefined;
      }
      
      const temp = first;
      first = first.next;
      size--;
      return temp.value;
  }
  
  const peek = () => first ? first.value : undefined;
  
  const getSize = () => size;

  const isEmpty = () => size === 0;
  
  // Revealing module pattern - expose only what should be public
  return {
      push,
      pop,
      peek,
      getSize,
      isEmpty
  };
}

// Usage example:
const stack = createStackLinkedList();
console.log(stack.push(10)); // 1
console.log(stack.push(20)); // 2
console.log(stack.push(30)); // 3
console.log(stack.peek());   // 30
console.log(stack.pop());    // 30
console.log(stack.pop());    // 20
console.log(stack.getSize()); // 1
console.log(stack.isEmpty()); // false