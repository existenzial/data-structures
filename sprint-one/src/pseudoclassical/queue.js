var Queue = function() {

  this.storage = {};
  this.queuedIndex = 0;
  this.lastIndex = 0;

};

Queue.prototype.enqueue = function (value){
    this.storage[this.queuedIndex + this.lastIndex] = value;
    this.queuedIndex++;
};

Queue.prototype.dequeue = function (){
  if (this.queuedIndex > 0){
    var firstInLine = this.storage[this.lastIndex];
    delete this.storage[this.lastIndex];
    this.queuedIndex--;
    this.lastIndex++;
  }
  return firstInLine;
};

Queue.prototype.size = function (){
  return this.queuedIndex;
};

var queueInstance = new Queue();


