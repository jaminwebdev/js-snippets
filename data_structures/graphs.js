// adjacency list graph
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertext(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            return this;
        }
    }

    addEdge(vertex1, vertex2) {

        // if either doesn't exist
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            return;
        }

        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);

        return this;
    }

    removeEdge(vertex1, vertex2) {
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            return;
        }

        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter( v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter( v => v !== vertex1);
        return this;
    }

    removeVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            return;
        }

        // pop off end and call remove edge to both empty array and remove edges from other vertices
        while(this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }

        // delete the prop/adjacency list (now empty) itself
        delete this.addVertext[vertex];

    }

    depthFirstRecursive(start) {
        const result = [];
        const visited = {};

        const dfs = (vertex) => {
            if(!vertex) {
                return;
            }

            visited[vertex] = true;
            result.push(vertex);

            this.adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    return dfs(neighbor);
                }
            })
        }

        dfs(start);

        return result;
    }

    depthFirstIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex

        visited[start] = true;

        while(stack.length) {
            currentVertex = stack.pop();

            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            })
        }

        return result;
    }

    breadthFirstSearch(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        
        while(queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor] ) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }

        return result;
    }
}

const myGraph = new Graph();

myGraph.addVertext('A');
myGraph.addVertext('B');
myGraph.addVertext('C');
myGraph.addVertext('D');
myGraph.addVertext('E');
myGraph.addVertext('F');

myGraph.addEdge("A", "B");
myGraph.addEdge("A", "C");
myGraph.addEdge("B", "D");
myGraph.addEdge("C", "E");
myGraph.addEdge("D", "E");
myGraph.addEdge("D", "F");
myGraph.addEdge("E", "F");

//        A
//      /   \
//     B     C
//     |     | 
//     D-----E
//     \    /
//        F


console.log(myGraph.depthFirstRecursive("A"));
