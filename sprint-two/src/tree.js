var Tree = function(value){
  var newTree = {};
  newTree.value = value;

    // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var newChildren = [];
  this.children.push({value: value});
  //value is an object

};

treeMethods.contains = function(target){
  var childNodes = this.children;
  for (var i = 0; i < childNodes.length; i++){
      if (childNodes[i].value === target){
        return true;
      } else {
        return false;
      }
    }      
};

// jvTree = Tree(1);
// jvTree.addChild(5);

// console.dir(jvTree);
/*
 * Complexity: What is the time complexity of the above functions?
 */

/* CHILD NODE
{ addChild: function(){},
  children: [],
  contains: function(){},
  value: 

} 

*/

// a newTree is an {} with a key and a value
//every parent of each tree node {} is an []
//the last tree {} of every parent node, has a key of 0, to maintain possible array-like-index-key-names that might be used for all key-value pairs for parent children collections


// [ {key,value}, [children] ]
                      // |
       //      [ {key, value}, [children] ]
       //                            /   \
       // [  [ {key,value}, [children]] ,  [{key:value}, [children]] ]