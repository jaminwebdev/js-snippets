class Node {
    constructor(value) {
        this.value = value;
        this.next= null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // O(1)
    push(val) {
        const newNode = new Node(val);
        if(!this.head) {
            // head and tail are one in the same
            this.head = newNode;
            this.tail = this.head;
        } else {
            // node currently at tail point to new node
            this.tail.next = newNode;
            // move the tail to the newNode, who's next is null (obvi)
            this.tail = newNode;
        }

        this.length++;
         return this;
    }

    // O(n) - traversal
    pop() {
 
        if(!this.head) {
            return;
        }

        if(this.length === 1) {
            let removedNode = this.head;
            this.head = null;
            this.tail = this.head;
            this.length = 0;
            return removedNode;
        }
        // save reference to current tail
        // iterate to second to last node
        // set secondToLast node's next to nul
        // set tail to new secondLotLast node
        // decrement length
        let currentTail = this.tail;
        let secondToLastNode = this.traverseToIndex(this.length - 2);
        secondToLastNode.next = null;
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
            this.tail = this.head;
            this.length = 0;
            return removedNode;
        }
        // set this.head to the current head's next pointer
        // decrement length
        let oldHead = this.head;
        this.head = oldHead.next;
        // sever the old head's pointer to the list
        oldHead.next = null;
        this.length--;
        return oldHead;
    }

    // O(1) - traversal
    unshift(val) {
        const newNode = new Node(val);
        if(!this.head) {
            // make new node head & tail
            this.head = newNode;
            this.tail = this.head;
        } else {
            // set new node's next to current head & set head to current node
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    // O(n) - traversal
    set(index, value) {
        let foundNode = this.traverseToIndex(index);

        if(!foundNode) return;

        foundNode.value = value;
        return this;
    }

    // O(n) - traversal
    insert(index, value) {
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
        // else somewhere in the middle
        //traverse to node before desired insertion
        let previousNode = this.traverseToIndex(index - 1);
        // set the new node's next to the previous node's next
        newNode.next = previousNode.next;
        // set the previous node's next to the new node
        previousNode.next = newNode;
        this.length++;
        return this;
    }

    // O(n) - traversal
    remove(index) {
        if(index < 0 || index >= this.length) {
            return;
        }

        // if beginning, we have a method already
        // shift returns the removed head & decrements
        // returning the removed node
        if(index === 0) {
            return this.shift();
        }

        // if end, we have a method already
        // pop returns the removed tail & decrements
        // returning the removed tail
        if(index === this.length - 1) {
            return this.pop();
        }

        // else somewhere beteween
        let previousNode = this.traverseToIndex(index - 1);
        let removedNode = previousNode.next;
        previousNode.next = removedNode.next;
        this.length--;
        return removedNode;

    }

    // reverse in place
    // big O(n) - iteration of entire list
    reverse() {
        // swap head and tail
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        // initialize prev & next to null
        let prev = null;
        let next = null;
        while( current !== null) {
            // initializing next based on current
            next = current.next;
            // setting current's next to previous node (flipping pointer)
            current.next = prev;
            // advancing prev
            prev = current;
            // advancing current
            current = next;
        }
        return this;
    }

    //O(n) - traversal
    traverseToIndex(index) {
        if(index < 0 || index >= this.length) {
            return;
        }

        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
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

const myLinkedList = new SinglyLinkedList();

myLinkedList.push(1);
myLinkedList.push(3);
myLinkedList.push(24);
myLinkedList.push(30);
myLinkedList.push(32);

// myLinkedList.pop();
// myLinkedList.shift();
// myLinkedList.unshift(1);
// myLinkedList.insert(3, 10);
// myLinkedList.remove(2);
// myLinkedList.reverse();

myLinkedList.arrayPrint();
