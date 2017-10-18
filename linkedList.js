class Node
{
  constructor(obj = null, next = null)
  {
    this.obj = obj;
    this.next = next;
  }

  getNext()
  {
    return this.next;
  }
  getObject()
  {
    return this.obj;
  }
  setNext(next)
  {
    this.next = next;
  }
}

class LinkedList
{
  constructor()
  {
    this.head = null;
  }

  addNode(nodeObj)
  {
    // console.log(nodeObj);
    if (this.head === null)
    {
      this.head = nodeObj;
    }
    else
    {
      let temp = this.head;
      while (temp.getNext() !== null)
      {
        // console.log(temp.getNext());
        temp = temp.getNext();
      }
      temp.setNext(nodeObj);
    }
  }
}

let dummy = {
  name : "1"
}

let dummy2 = {
  name : "2"
}

let linkedList = new LinkedList();
let dummyObj = new Node(dummy);
let dummyObj2 = new Node(dummy2);
let dummyObj3 = new Node(dummy2);


linkedList.addNode(dummyObj);
linkedList.addNode(dummyObj2);
linkedList.addNode(dummyObj3);
// linkedList.addNode(dummyObj);


console.log(JSON.stringify(linkedList, 0, 2));
