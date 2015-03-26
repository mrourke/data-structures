var Stack = function() {
  var object = {
    size: 0,
    storage: {}
  };
  _.extend(object, stackMethods);
  return object;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {
  pop: function() {
    if (this.size) {
      this.size -= 1;
    }
    var currentSize = this.storage[this.size]
    delete this.storage[this.size];
    return currentSize;
  },
  push: function(value) {
    this.storage[this.size] = value;
    this.size += 1;
  },
  size: function() {
    return this.size;
  }
};


// var newStack = Stack();
// newStack.push('a');