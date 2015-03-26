var Stack = function() {
  var object = {
    counter: 0,
    storage: {}
  };
  _.extend(object, stackMethods);
  return object;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {
  pop: function() {
    if (this.counter) {
      this.counter -= 1;
    }
    var currentSize = this.storage[this.counter]
    delete this.storage[this.counter];
    return currentSize;
  },
  push: function(value) {
    this.storage[this.counter] = value;
    this.counter += 1;
  },
  size: function() {
    return this.counter;
  }
};


// var newStack = Stack();
// newStack.push('a');