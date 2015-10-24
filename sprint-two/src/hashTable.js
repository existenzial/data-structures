var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
    var i = getIndexBelowMaxForKey(k, this._limit);
    var bucket = this._storage.get(i);
    //assign the value of the bucket
    var found = false;
    //assign a starting value of false for whether the tuple was found before checking
    if(!bucket){
    //if bucket doesn't exist
        bucket = [];
        //create it
        this._storage.set(i, bucket);
        //then store the value of that bucket
        
    }
    this._storage.get(i).push([k,v]);
    //then we push the key/val pair into the bucket
};

HashTable.prototype.retrieve = function(k){
    var i = getIndexBelowMaxForKey(k, this._limit);
    var bucket = this._storage.get(i);
    
    if (!bucket){
        return null;
        //return null if the bucket isn't found
    }
    for (var t = 0; t < bucket.length; t++){
        var tuple = bucket[t];
        //assign the value of a tuple to each index position of the bucket
        if(tuple[0] === k){
        //if key is found
            return tuple[1];
            //return its associated value
        }
    }
};

HashTable.prototype.remove = function(k){
    var i = getIndexBelowMaxForKey(k, this._limit);
    var bucket = this._storage.get(i);
    
    if (!bucket){
        return null;
        //return null if the bucket isn't found
    }
    for (var t = 0; t < bucket.length; t++){
        var tuple = bucket[t];
        //assign the value of a tuple to each index position of the bucket
        if(tuple[0] === k){
        //if key is found
            tuple[1] = null;
            return;
            //return its associated value
        }
    }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
