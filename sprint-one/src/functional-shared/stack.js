var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var stackInstance = {
      storage: {},
      index: 0
  };

  _.extend(stackInstance,stackMethods);
  
  return stackInstance;
};


var stackMethods = {
   push: function (value){
    this.storage[this.index] = value;
    this.index++;
  },


   
   pop: function (){
    if (this.index > 0){
      var lastVal = this.storage[this.index - 1];
      delete this.storage[this.index - 1];
      this.index--;
    }
    return lastVal;
  },
  
   size: function (){
    return this.index;
  }

};

   
   pop: function (){
    if (this.index > 0){
      var lastVal = this.storage[this.index - 1];
      delete this.storage[this.index - 1];
      this.index--;
    }
    return lastVal;
  },
  
   size: function (){
    return this.index;
  }

};
