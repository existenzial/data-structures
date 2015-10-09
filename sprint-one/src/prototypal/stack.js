var Stack = function() {

  var stackInstance = Object.create(stackMethods);

  stackInstance.storage = {};      
  stackInstance.index = 0;
  
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


