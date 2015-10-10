var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value){
    //if there is no value for the Head(null) create it, then set the value to the tail
    //once the head exists, the next node will get added to the tail

    if(list.head === null){
      list.tail = new Node(value);
      list.head = list.tail;
    } else {
      list.head.next = 
    }
    
    

  };

  list.removeHead = function(){
    //will remove the first node
    //then will make the nextNode the value of the Head to give us a new Head
    //if one Node left, the Head is = Tail, and if it is removed return an empty node object
    

  };

  list.contains = function(target){
    //if target node or value exists in the list, return it
    //else add the target node to the tail
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  //node.next refers to what comes after the target node that we searched the list for with .contains

  return node;
};
var jvList = new LinkedList();
jvList.addToTail(1);
jvList.addToTail(2);
jvList.addToTail(3);
jvList.removeHead();
console.log('list',jvList);
console.log('tail ',jvList.tail);
console.log('head ',jvList.head);


/*
 * Complexity: What is the time complexity of the above functions?
 Linear!
 */
