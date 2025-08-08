export class queueArray {
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
    array.push(val)
    return publicAPI
  }
  
  const dequeue = () => {
    array.shift();
    return publicAPI;
  }

  const peek = ()  => array[array.length - 1];

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

// like with stacks, we're removing/adding to/from the beginning to keep O(1)
// arrays shifting requires O(n) for re-indexing remaining indexes
// FIFO
export class queueLinkedList {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        const newNode = new Node(val);

        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
            this.size++;
            return this.size;
        }

        this.last.next = newNode;
        this.last = newNode;
        this.size++;
        return this.size;
    }

    dequeue() {
        if(!this.first) {
            return;
        }
        if(this.first === this.last) {
            this.last = null;
        }

        // save old first ref
        let oldFirst = this.first;
        // set queue's first to OG first's next prop
        this.first = oldFirst.next;
        // sever ties with pointer to the rest of the list (& new first)
        oldFirst.next = null;
        this.size--;
        return oldFirst.value;
    }
}

export const createNode = (value) => 
  ({
    value: value,
    next: null
  })


export const createQueueLinkedList = () => {
    // Private variables
    let first = null;
    let last = null;
    let size = 0;
    
    // Public methods using arrow functions
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
        
        if (first === last) {
            last = null;
        }
        
        // Save old first ref
        const oldFirst = first;
        // Set queue's first to original first's next prop
        first = oldFirst.next;
        // Sever ties with pointer to the rest of the list
        oldFirst.next = null;
        size--;
        return oldFirst.value;
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