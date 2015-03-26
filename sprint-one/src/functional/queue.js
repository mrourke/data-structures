var Queue = function(){
  var someInstance = {};
  var first = 0,
      firstEmpty = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[firstEmpty]=value;
    firstEmpty += 1;
  };

  someInstance.dequeue = function(){
    var value = storage[first];
    if(first<firstEmpty) {
      first++;
    }
    return value;
  };

  someInstance.size = function(){
    return firstEmpty-first;
  };

  return someInstance;
};
