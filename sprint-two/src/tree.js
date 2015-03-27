var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var newTree = Tree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(target){
  var found = false;
  var recursiveContains = function(tree, target) {
    if(tree.value === target) {
      found = true;
    }
    if(tree.children.length > 0) {
      for(var i = 0; i < tree.children.length; i++) {
        recursiveContains(tree.children[i], target);
      }
    }
  };
  recursiveContains(this, target);
  return found;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */