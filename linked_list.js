class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class linkedList{
  constructor(){
    this.head = null;
    this.length = 0;
  }
  //fungsi untuk mengepush data
  push(data){
    let newData = new Node(data);
    let checkData = this.head;
    if (checkData === null){
      this.head = newData;
      this.length++
      return newData;
    }
    while (checkData.next !== null){
      checkData = checkData.next;
    }
    checkData.next = newData;
      this.length++;
      return newData;
  }
  //fungsi untuk mendapatkan isi di dalam index
  get(index) {
    let checkData = this.head;
    let count = 0;
    
    if(index >= this.length) return "Not Exist!"
    
    while(count < index) {
      checkData = checkData.next;
      count++;
    }
    
    return checkData;
  } 
  //fungsi untuk menghapus berdasarkan index
  pop(index) {
    let nodeToCheck = this.head,
        count       = 0,
        prevNode    = null
    
    if(index > this.length) return "Doesn't Exist!"
    
    if(index === 0) {
      this.head = nodeToCheck.next;
      this.length--;

      return this.head;
    }
    
    while(count < index) {
      prevNode = nodeToCheck;
      nodeToCheck = nodeToCheck.next;
      count++;
    }
    
    prevNode.next = nodeToCheck.next;
    nodeToCheck = null;
    this.length--;
    
    return this.head;
  }  
  //fungsi untuk mengosongkan data
  blank() {
    this.head = null
    this.length = 0;
  };
  //fungsi untuk mendapatkan length
  length(){
    return this.length;
  }
}

var linked = new linkedList();
//Push format
linked.push("minum")
linked.push("makan")
linked.push("tidur")
console.log("Length datanya = "+linked.length)
console.log("-------------------------------")
console.log("isi Data di index 0 = "+linked.get(0).data+" 1 = "+linked.get(1).data+" dan 2 = "+linked.get(2).data)
console.log("-------------------------------")

//Pop Format
console.log("POP YANG DI FORMAT adalah Index ke 1")
console.log("-------------------------------")
linked.pop(1);
console.log("Length datanya sekarang = "+linked.length)
console.log("-------------------------------")
console.log("isi Data di index 0 = "+linked.get(0).data+" 1 = "+linked.get(1).data)
console.log("-------------------------------")

//blank format
console.log("BLANK SEMUA DATA")
console.log("-------------------------------")
linked.blank();
console.log("Length datanya sekarang = "+linked.length)
console.log("-------------------------------")
console.log(linked)
console.log("-------------------------------")