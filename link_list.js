// var arr = [1,2,3,4,5];

// function linklist (arr){
//
// }
class Node  {
  constructor(data) {
    this.data = data;
    this.next = null;
    // this.buntut = null;
  }
}

class Linklist {
  constructor() {
    this.head = null;
    // this.panjang = 0
    // this.prev = null;

  }

  getpush(newdata){
    // var node = new Node()
    let currentNode = this.head;

    // this.data = newdata
    if (this.head === null){
      // this.data = newdata
      this.head = newdata
      // this.= { value : this.data , Next : this.next}

    }
    else {
      if (currentNode.Next === null){
      currentNode.next = newdata
      }
      else {
        while (currentNode.next) {
            currentNode = currentNode.next;
            }

              currentNode.next = newdata;

      }
      // currentNode = this.head.Next
      // while (this.next !== null){
      // this.data.Next = { value : newdata , Next : this.next }
      // }
    }

  }

  // getData(){
  //   return getpush()
  // }

}

let asd = new Node('coba');
let sdf = new Node('sdf');
let saf = new Node('saf');
let lkj = new Node('lkj');

let baru = new Linklist();
baru.getpush(asd)
// console.log(baru)
baru.getpush(sdf)
baru.getpush(saf)
baru.getpush(lkj)
console.log(JSON.stringify(baru))
// baru.getpush('baru2')
// // console.log(baru.getData())
