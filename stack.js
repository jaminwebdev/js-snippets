class stackArray {
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

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// since we're using a linked list, to keep constant time
// pop will remove from the beginning of the linked list instead of popping from the end
// FILO
class StackLinkedList {
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