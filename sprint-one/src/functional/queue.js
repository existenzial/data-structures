var Queue = function(){
  var someInstance = {};
  var queuedIndex = 0;
  var lastIndex = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    someInstance[queuedIndex + lastIndex] = value;
    queuedIndex++;
  };

  someInstance.dequeue = function(){
    if(queuedIndex > 0){
        var firstInLine = someInstance[lastIndex];
        //front of line
        delete someInstance[lastIndex];
        queuedIndex--;
        lastIndex++;
    }
    return firstInLine;
  };

  someInstance.size = function(){
    return queuedIndex;
  };

  return someInstance;

};
