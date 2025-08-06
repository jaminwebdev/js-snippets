class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
    }
}

export class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
            return this;
        }

        let currentNode = this.root;

        // loop until we eventually hit a null leaf node, assign, and return 'this'
        while(true) {
            // left
            if(value < currentNode.value) {
                if(!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left; // walk down the left
            } else { //right
                if(!currentNode.right) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right; // walk down the right
            }
        }
    }
    
    find(value) {
        if(!this.root) {
            return null;
        }

        let currentNode = this.root;
        while(currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (value === currentNode.value) {
                return currentNode;
            }
        }
        return null;
    }

    BFS() {
        let data = [];
        let queue = [];
        let currentNode = this.root;

        queue.push(currentNode);

        while(queue.length) {
            currentNode = queue.shift();
            data.push(currentNode);
            if(currentNode.left) {
                queue.push(currentNode.left);
            }
            if(currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return data;
    }

    DFSPreOrder() {
        let data = [];

        const traversePreOrder = (node) => {
            // top-down, to the left side of the tree
            data.push(node.value);

            if(node.left) {
                traversePreOrder(node.left);
            }
            if(node.right) {
                traversePreOrder(node.right);
            }
        }

        traversePreOrder(this.root);

        return data;
    }

    DFSPostOrder() {
        let data = [];

        const traversePostOrder = (node) => {

            if(node.left) {
                traversePostOrder(node.left)
            }
            if(node.right) {
                traversePostOrder(node.right);
            }

            // children first
            data.push(node.value);
        }

        traversePostOrder(this.root);

        return data;
    }

    DFSInOrder() {
        let data = [];

        const traverseInOrder = (node) => {

            if(node.left) {
                traverseInOrder(node.left)
            }
            // if no left, then we must be at the smallest value of any sub-tree
            data.push(node.value);

            if(node.right) {
                traverseInOrder(node.right);
            }
        }

        traverseInOrder(this.root);

        return data;
    }

}

const myTree = new BST();
myTree.insert(10);
myTree.insert(12);
myTree.insert(3);
myTree.insert(5);
myTree.insert(14);
myTree.insert(11);
myTree.insert(2);
myTree.insert(4);
myTree.insert(6);
myTree.insert(18);

// console.log(JSON.stringify(myTree));

const traverse = (node) => {
    const tree = { value: node.value };
    tree.left = node.left ? traverse(node.left) : null;
    tree.right = node.right ? traverse(node.right) : null;
    return tree;
}

// console.log(traverse(myTree.root));
console.log(myTree.BFS());