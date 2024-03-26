class Graph {
  constructor() {
    this.adjencylist = {};
  }

  addvertex(vertex) {
    if (!this.adjencylist[vertex]) {
      this.adjencylist[vertex] = new Set();
    }
  }

  addedges(vertex1, vertex2) {
    this.addvertex(vertex1);
    this.addvertex(vertex2);

    this.adjencylist[vertex1].add(vertex2);
    this.adjencylist[vertex2].add(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjencylist[vertex1].delete(vertex2);
    this.adjencylist[vertex2].delete(vertex1);
  }
  removeVertex(vertex) {
    for (let x of this.adjencylist[vertex]) {
      this.removeEdge(vertex, x);
    }
    delete this.adjencylist[vertex];
  }

  print() {
    for (let i in this.adjencylist) {
      console.log(i + "->" + [...this.adjencylist[i]]);
    }
  }
}

const graph = new Graph();
graph.addvertex("A");
graph.addvertex("B");
graph.addvertex("C");
graph.addedges("A", "B");
graph.addedges("B", "C");
graph.removeEdge("A", "B");
graph.removeVertex("C");
graph.print();
