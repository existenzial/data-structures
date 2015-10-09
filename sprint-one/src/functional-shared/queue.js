var Queue = function(){
  var queueInstance = {
      storage: {},
      index: 0
  };

  _.extend(queueInstance,queueMethods);
  return queueInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
   enqueue: function (value){
var firstInLine = Object.keys(this.storage)[0];
    this.storage[this.index] = value;
    this.index++;
  },

   
   dequeue: function (){
    if (this.index > 0){
      console.log('firstinline',Object.keys(this.storage)[0]);
      var firstInLine = Object.keys(this.storage)[0];
      var firstVal = this.storage[firstInLine];
      delete this.storage[firstInLine];
      
      this.index--;
      console.log('storage',this.storage);
    }
    return firstVal;
  },
  
   size: function (){
    return this.index;
  }
};
