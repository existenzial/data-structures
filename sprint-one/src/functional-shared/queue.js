var Queue = function(){
  var queueInstance = {
      storage: {},
      queuedIndex: 0,
      lastIndex:0,
  };

  _.extend(queueInstance,queueMethods);
  return queueInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
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
