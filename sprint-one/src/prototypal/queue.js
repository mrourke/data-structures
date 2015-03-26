var Queue = function() {
  var object = Object.create(queueMethods);
  object.first = 0;
  object.firstEmpty = 0;
  object.storage = {};
  return object;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {

  size: function() {
    return this.firstEmpty - this.first;
  },

  enqueue: function(value) {
    this.storage[this.firstEmpty] = value;
    this.firstEmpty ++;
  },

  dequeue: function() {
    if (this.firstEmpty - this.first) {
      var temp = this.storage[this.first]
      delete this.storage[this.first]
      this.first ++;
      return temp;
    }
  }


};


