class SimplePriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({val, priority});
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

export class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertext(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            return this;
        }
    }

    addEdge(vertex1, vertex2, weight) {

        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            return;
        }

        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });

        return this;
    }

    dijkstra(start, end) {
        const nodes = new SimplePriorityQueue();
        const distances = {};
        const previous = {};
        let smallest;
        let path = [];

        // build initial state/distances
        for(let vertex in this.adjacencyList) {
            if(vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }

            previous[vertex] = null;
        }
        
        // as long as there's something to visit
        while(nodes.values.length) {
            // dequeue/shift first element (lowest priority) - just the vertex value, though
            smallest = nodes.dequeue().val;
            
            if(smallest === end) {
                // we're done - build the path & return said path
                while(previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if(smallest || distances[smallest] !== Infinity) {
                for ( let neighbor in this.adjacencyList[smallest] ) {
                    // find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];

                    // calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;

                    if (candidate < distances[nextNeighbor]) {
                        // updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        // updating previous - how we got to neighbor
                        previous[nextNeighbor] = smallest;
                        // enqueue in priority queue with new value
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }

        return [...path, smallest].reverse();

    }
}

const myGraph = new WeightedGraph();

myGraph.addVertext('A');
myGraph.addVertext('B');
myGraph.addVertext('C');
myGraph.addVertext('D');
myGraph.addVertext('E');
myGraph.addVertext('F');

myGraph.addEdge("A", "B", 4);
myGraph.addEdge("A", "C", 2);
myGraph.addEdge("B", "E", 3);
myGraph.addEdge("C", "D", 2);
myGraph.addEdge("D", "E", 3);
myGraph.addEdge("D", "F", 1);
myGraph.addEdge("E", "F", 1);
myGraph.addEdge("C", "F", 4);

myGraph.dijkstra("A", "E");


