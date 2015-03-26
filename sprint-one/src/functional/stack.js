var Stack = function(){
  var size = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[size] = value;
    size += 1;
  };

  someInstance.pop = function(){
    if (size) {
      size -= 1;
    }
    var element = storage[size];
    delete element;
    return element;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
// var papers = Stack();