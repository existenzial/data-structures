var Queue = function(){
  var someInstance = {};
  var firstIndex = 0;
  var lastIndex = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    someInstance[lastIndex] = value;
    lastIndex++;
  };

  someInstance.dequeue = function(){
    //front of line
    var firstInLine = someInstance[firstIndex];
    delete someInstance[firstIndex];
    firstIndex++;
    return firstInLine;
  };

  someInstance.size = function(){
    return Object.keys(someInstance).length - 3;
   // var keyLength = Object.keys(someInstance);
   // return keyLength.length;
  };

  return someInstance;

};
