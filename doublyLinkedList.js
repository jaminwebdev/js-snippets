class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // O(1)
    push(val) {
        let newNode = new Node(val);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // node currently at tail needs to point to new node
            this.tail.next = newNode;
            // set the prev property on the new node to current tail
            newNode.prev = this.tail;
            // update tail to be the new node
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    // O(1)
    pop() {
        if(!this.head) {
            return;
        }

        if(this.length === 1) {
            let removedNode = this.tail;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return removedNode;
        }

        // save reference to soon to be popped tail
        // get second to last node - tail.prev
        // disconnect by setting secondToLast.next to null
        // move tail to secondToLast
        // decrement length
        let currentTail = this.tail;
        let secondToLastNode = currentTail.prev;
        secondToLastNode.next = null;
        // disconnecting old tail's prev
        currentTail.prev = null;
        this.tail = secondToLastNode;
        this.length--;
        return currentTail;
    }

    // O(1)
    shift() {
        if(!this.head) {
            return;
        }

        if(this.length === 1) {
            let removedNode = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return removedNode;
        }

        let oldHead = this.head;
        this.head = oldHead.next;
        // sever the prev & next pointers
        this.head.prev = null;
        oldHead.next = null;
        this.length--;
        return oldHead;
    }

    // O(1)
    unshift(val) {
        const newNode = new Node(val);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // point to each other
            this.head.prev = newNode;
            newNode.next = this.head;
            // shift head pointer to new node
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // O(n)
    set(index, value) {
        let foundNode = this.traverseToIndex(index);
        if(!foundNode) return;

        foundNode.value = value;
        return this;
    }

    // O(n)
    insert(index,value) {
        if(index < 0 || index >= this.length) {
            return;
        }

        // if at beginning, we have a method already
        // unshift returns 'this' & increments length
        if(index === 0) {
            return this.unshift(value);
        }

        // if desired at the end, we have a method already
        // current length === to the newly desired index
        // push returns 'this' & increments length
        if(index === this.length) {
            return this.push(value);
        }

        const newNode = new Node(value);

        let oldNode = this.traverseToIndex(index);
        let previousNode = oldNode.prev;

        // set prev and next pointers on new node
        newNode.next = oldNode;
        newNode.prev = previousNode;

        // update prev and next on oldNode & previous node
        oldNode.prev = newNode;
        previousNode.next = newNode;

        this.length++;
        return this;
        
    }

    // O(n)
    remove(index) {
        if (index < 0 || index >= this.length) {
            return;
        }
        // if beginning, we have a method already
        // shift returns the removed head & decrements
        // returning the removed node
        if (index === 0) {
            return this.shift();
        }
        // if end, we have a method already
        // pop returns the removed tail & decrements
        // returning the removed tail
        if (index === this.length - 1) {
            return this.pop();
        }

        let nodeToRemove = this.traverseToIndex(index);
        let prevNode = nodeToRemove.prev;
        let nextNode = nodeToRemove.next;
        prevNode.next = nodeToRemove.next;
        nextNode.prev = nodeToRemove.prev;
        // clear pointers/connections
        nodeToRemove.prev = null;
        nodeToRemove.next = null;
        this.length--;
        return nodeToRemove;
    }

    // O(n)
    traverseToIndex(index) {
        if(index < 0 || index >= this.length) {
            return;
        }

        let start = index <= this.length / 2 ? 'head' : 'tail';
        let counter = start === 'head' ? 0 : (this.length - 1);
        let node = start === 'head' ? this.head : this.tail;

        while (counter !== index) {
            node = start === 'head' ? node.next : node.prev;
            start === 'head' ? counter++ : counter--;
        }
        return node;


        // // if index < median - start at head
        // if(index <= this.lenght / 2) {
        //     let counter = 0;
        //     let currentNode = this.head;
        //     while (counter !== index) {
        //         currentNode = currentNode.next;
        //         counter++;
        //     }
        //     return currentNode;
        // }

        // // else start at tail
        // let counter = this.length - 1;
        // let currentNode = this.tail;
        // while(counter !== index) {
        //     currentNode = currentNode.prev;
        //     counter--;
        // }
        // return currentNode;

    }

    //O(n) - iteration over entire list
    arrayPrint() {
        let array = [];
        let current = this.head;
        while(current) {
            array.push(current);
            current = current.next;
        }
        console.log(array);
    }
}

const myDoublyLinkedlist = new DoublyLinkedList();

myDoublyLinkedlist.push(1);
myDoublyLinkedlist.push(5);
myDoublyLinkedlist.push(10);
myDoublyLinkedlist.push(11);
myDoublyLinkedlist.push(15);
myDoublyLinkedlist.push(17);


// myDoublyLinkedlist.arrayPrint();

// myDoublyLinkedlist.pop();
// myDoublyLinkedlist.shift();
// myDoublyLinkedlist.unshift(0);
// console.log(myDoublyLinkedlist.traverseToIndex(4));
// myDoublyLinkedlist.insert(2, 16);

myDoublyLinkedlist.arrayPrint();
