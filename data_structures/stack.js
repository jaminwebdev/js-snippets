export class StackArray {
    constructor() {
        this.array = [];
    }

    peek() {
        return this.array[this.array.length - 1];
    }

    push(val) {
        this.array.push(val);
        return this;
    }

    pop() {
        this.array.pop();
        return this;
    }
}

export const createStack = () => {
  let array = [];
  
  const push = val =>  {
    array.push(val)
    return publicAPI
  }
  
  const pop = () => {
    array.pop();
    return publicAPI;
  }

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
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let node = new Node(val);
        if(!this.first) {
            this.first = node;
            this.last = node;
            return this;
        }

        let temp = this.first;
        this.first = node;
        this.first.next = temp;
        this.size++;
        return this.size;
    }

    pop() {
        if(!this.first) {
            return;
        }

        if(this.first === this.last) {
            this.last = null; 
        }

        let temp = this.first;
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }

}

export const createNode = (value) => 
  ({
    value: value,
    next: null
  })


export const createStackLinkedList = () => {
  let first = null;
  let last = null;
  let size = 0;
  
  const push = val => {
      const node = createNode(val);
      
      if (!first) {
          first = node;
          last = node;
      } else {
          const temp = first;
          first = node;
          first.next = temp;
      }
      
      size++;
      return size;
  }
  
  const pop = () => {
      if (!first) {
          return undefined;
      }
      
      if (first === last) {
          last = null;
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
  const publicAPI = {
      push,
      pop,
      peek,
      getSize,
      isEmpty
  };
  
  return publicAPI;
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