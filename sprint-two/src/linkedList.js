var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    

    list.tail = new Node(value);
    
    if(list.head === null) {
      list.head = list.tail;
      list.head.next = list.tail;
    }

  };

  list.removeHead = function(){

    if(list.head === null) {
      console.log("list is empty");
    }
    var originalHead = list.head;
    var newHead = list.head.next;

    list.head = null;
    list.head = newHead; 

  };

  list.contains = function(target){
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
var jvList = new LinkedList();
jvList.addToTail(5);
jvList.addToTail(4);
jvList.addToTail(3);
jvList.addToTail(2);
jvList.addToTail(1);
jvList.removeHead();
console.log(jvList.list);


/*
 * Complexity: What is the time complexity of the above functions?
 Linear!
 */
