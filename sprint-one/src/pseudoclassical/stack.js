var Stack = function() {
  this.storage = {};
  this.index = 0;
};

Stack.prototype.push = function (value){
    this.storage[this.index] = value;
    this.index++;
  };

Stack.prototype.pop = function (){
    if (this.index > 0){
      var lastVal = this.storage[this.index - 1];
      delete this.storage[this.index - 1];
      this.index--;
    }
    return lastVal;
  };

Stack.prototype.size = function (){
    return this.index;
  };

var stackInstance = new Stack();

/*
Stack.prototype = {

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
*/

