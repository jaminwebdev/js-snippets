import { describe, it, expect } from 'vitest';
import { WeightedGraph } from '../dijkstra';

describe('WeightedGraph', () => {
  it('should find the shortest path using Dijkstra\'s algorithm', () => {
    const graph = new WeightedGraph();
    graph.addVertext('A');
    graph.addVertext('B');
    graph.addVertext('C');
    graph.addVertext('D');
    graph.addVertext('E');
    graph.addVertext('F');
    graph.addEdge('A', 'B', 4);
    graph.addEdge('A', 'C', 2);
    graph.addEdge('B', 'E', 3);
    graph.addEdge('C', 'D', 2);
    graph.addEdge('D', 'E', 3);
    graph.addEdge('D', 'F', 1);
    graph.addEdge('E', 'F', 1);
    graph.addEdge('C', 'F', 4);
    expect(graph.dijkstra('A', 'E')).toEqual(['A', 'C', 'D', 'F', 'E']);
  });
});
