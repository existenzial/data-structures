var Queue = function() {

  var queueInstance = Object.create(queueMethods);

  queueInstance.storage = {};
  queueInstance.queuedIndex = 0;
  queueInstance.lastIndex = 0;

  return  queueInstance;
};

var queueMethods = {
  enqueue: function (value){
    this.storage[this.queuedIndex + this.lastIndex] = value;
    this.queuedIndex++;
  },
   
  dequeue: function (){
    if (this.queuedIndex > 0){
      var firstInLine = this.storage[this.lastIndex];
      delete this.storage[this.lastIndex];
      this.queuedIndex--;
      this.lastIndex++;
    }
    return firstInLine;
  },
  
  size: function (){
    return this.queuedIndex;
  }
};


