var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.storage = {};
  obj.count = 0;
  return obj;
};

var stackMethods = {};
//Stack.prototype.stackMethods = stackMethods;

  stackMethods.size = function() {
    return this.count;
  };

  stackMethods.push = function(value) {
    this.storage[this.count] = value;
    this.count += 1;
  };

  stackMethods.pop = function() {
    if(this.count) {  
      this.count -= 1;
      var temp = this.storage[this.count];
      delete this.storage[this.count];
      return temp;
    }
  };
// var newStack = stack();
