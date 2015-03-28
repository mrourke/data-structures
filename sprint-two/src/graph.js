

var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(node){
  var temp = Node(node);
  this.nodes[node] = temp;
};

Graph.prototype.contains = function(node){
  if (this.nodes.hasOwnProperty(node)) {
      return true;
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){

  if (this.nodes[fromNode].edges.hasOwnProperty(toNode)) {
    return true;
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode].edges[toNode] = toNode;
  this.nodes[toNode].edges[fromNode] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.nodes[fromNode].edges[toNode];
  delete this.nodes[toNode].edges[fromNode];
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.nodes, cb);
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.edges = {};

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



