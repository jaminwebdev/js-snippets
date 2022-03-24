// adjacency list graph
class Graph {
    constructor() {
        this.adjacencyList = {};
        this.numberOfNodes = 0;
    }

    addVertext(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            this.numberOfNodes++;
            return this;
        }

        return;
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
}