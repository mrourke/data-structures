var Queue = function(){
  var object = {
    first: 0,
    lastEmpty: 0,
    storage: {}
  };

  _.extend(object, queueMethods);

  return object;
};

var queueMethods = {

  enqueue: function(value) {
    this.storage[this.lastEmpty] = value;
    this.lastEmpty += 1;
  },

  dequeue: function() {
    var temp = this.storage[this.first];
    delete this.storage[this.first];
    if (this.lastEmpty-this.first) {
      this.first ++;
    }
    return temp;
  },

  size: function() {
    return this.lastEmpty-this.first;
  }
};



