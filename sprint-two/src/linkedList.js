var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (list.tail === null) {
      list.tail = Node(value);
    } else {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }

    if (list.head === null) {
      list.head = list.tail;
    }
  };

  list.removeHead = function(){
    var temp = list.head.value;
    list.head = list.head.next;
    return temp;
  };

  list.contains = function(target){
    var node = list.head;
    var loop = true;
    while (loop) {  
      if (node.value === target){
        return true;
      }
      if (node !== list.tail) {
        node = node.next;  
      } else {
        loop = false;
      }      
    }
    return false;
    // var containsRecursive = function(node, target) {
    //   if (node.value === target) {
    //     return true;
    //   }
    //   if (node === list.tail) {
    //     return false;
    //   }
    //   return containsRecursive(node.next, target);
    // }
    // return containsRecursive(list.head, target);
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
