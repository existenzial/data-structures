var Stack = function(){
    var someInstance = {};
    var index = 0;

  // Use an object with numeric keys to store values
    var storage = {};

    // Implement the methods below
    someInstance.push = function(value){
        storage[index] = value;
        index++;
    };

    someInstance.pop = function(){
        if(index > 0){
            delete storage[index - 1];
            
            index--;           
        }
        return storage[index -1];
    };

    someInstance.size = function(){
        
        return index;
    };

    return someInstance;
};
