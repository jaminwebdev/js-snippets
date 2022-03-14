class queueArray {
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

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

// like with stacks, we're removing/adding to/from the beginning to keep O(1)
// arrays shifting requires O(n) for re-indexing remaining indexes
// FIFO
class queueLinkedList {
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

    pop() {
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