var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value){
    //if there is no value for the Head(null) create it, then set the value to the tail
    //once the head exists, the next node will get added to the tail
    
    var newTail = new Node(value);

    if(list.head === null){
      list.tail = newTail;
      list.head = list.tail;
    } else {
      list.tail.next = newTail; //current tail gets property next which is new Node(value) aka newTail
      list.tail = newTail; //redefine current tail to the recently added tail aka newTail
    }
    
    

  };

  list.removeHead = function(){
    var offWithYourHead = list.head.value;
    list.head = list.head.next;
    return offWithYourHead;

    //will remove the first node
    //then will make the nextNode the value of the Head to give us a new Head
    //if one Node left, the Head is = Tail, and if it is removed return an empty node object
    

  };

  list.contains = function(target){
    //if we wanted to search for the target value 3
    console.log('Recursing through ', 1);

    var currentNode = list.head;
    console.log('recursion-currentNode.value ',currentNode.value);
    // console.log('keys',Object.keys(currentNode).length);
    // console.log('currentNode.value',currentNode.value);
    if(currentNode.value === target) {
      return true;
    } else if (Object.keys(currentNode).length >= 1){
      list.head = list.head.next; 
        if(list.tail === currentNode) {
          if(list.tail.value === target) {
            return true;
          } else {
            return false;
          }          
      list.contains(target);

        }
    } 
  };

    //if target node or value exists in the list, return it
    //else add the target node to the tail

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
jvList.addToTail(4);
jvList.addToTail(5);
jvList.addToTail(6);




/*
 * Complexity: What is the time complexity of the above functions?
 Linear!
 */
