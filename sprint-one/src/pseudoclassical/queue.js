var Queue = function() {
  this.storage = {};
  this.first = 0;
  this.firstEmpty = 0;
};

Queue.prototype.size = function() {
  return this.firstEmpty - this.first;
}

Queue.prototype.enqueue = function (value) {
  this.storage[this.firstEmpty] = value;
  this.firstEmpty ++;
}

Queue.prototype.dequeue = function () {
  if (this.firstEmpty - this.first) {
    var temp = this.storage[this.first];
    delete this.storage[this.first];
    this.first ++;
    return temp;
  }
}
