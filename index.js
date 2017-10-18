class LinkedList {
  constructor(){
    this.head = null;
    this.length = 0;
  }

  //push
  push(val){
    //bikin node isinya value=value, next=null
    var node = {
       value: val,
       next: null
    }

    //if this head kosong, isi node
    if(this.head == null){
      this.head = node;
      this.length += 1;
    }

    //else set current = head
    //cari sampai head yang kosong, kalo udah ketemu isi node
    //while masih ada current.next, looping, set current = current.next / pencarian akhir?
    else{
      var current = this.head;
      while(current.next){
        current = current.next;
      }
      //current.next adalah node(value baru)
      current.next = node;
      this.length += 1;
    }
  }

  //tampilkan yang berada dalam posisi ....
  get(num){
    //yang dicek headnya, set counter
    var nodeToCheck = this.head;
    let count = 0;

    //kalo posisi yang dicari lebih dari panjang list tsb, return does not exist
    if(num > this.length){
      return {value: 'does not exist'};
    }

    //berhitung sampai dengan num mulai dari count=0, dan replace node to check
    while(count < num) {
      nodeToCheck = nodeToCheck.next;
      count++;
    }

    return nodeToCheck;
  }

  //pop
  pop(){
    //identify head
    var nodeToPop = this.head;
    var count = 0;

    //cari yang terakhir
    //yang terakhir == jumlah length
    var terakhir = this.length
    //console.log(terakhir);

    //yang terakhir itu siapa?
    //dan hapus, set next sebelum terakhir = null
    while(count < terakhir-1){
      nodeToPop = nodeToPop.next;
      count++;
    }

    //set next = null
    nodeToPop.next = null;

    //kurang counter -1
    this.length -= 1;

  }

  //cek list kosong/isi
  check(num){
    //set yang mau di check dimulai dari 0
    var check = this.head;
    var count = 0;

    //if num yang diminta lebih dari panjang list return does not exist
    if(num > this.length){
      return 'ga ada isinya';
    }

    //count sampai dengan num yang diminta
    while(count < num){
      check = check.next;
      count += 1;
    }

    //if yang dicek tidak sama dengan null
    if(check!=null){
      return "ada isinya";
    } else {
      return "ga ada isinya";
    }

  }

  //convert to array
  toArray(){
    //set head
    var head = this.head;
    var count = 0;
    var result = [];

    //if head == null return kosong
    if(head==null){
      return kosong;
    }

    while(count < this.length){
      result.push(head.value);
      head = head.next;
      count += 1;
    }

    return result;

  }

  //length
  length(){
    return this.length;
  }

  //hapus semuanya
  del(){
    this.head = null;

    //reset counter
    this.length = 0;
  }

  //shift delete yang pertama
  shift(){
    var next = this.head.next;
    this.head = null;
    this.head = next;
    this.length -= 1;
  }

}
//new class sll = single linked list
var sll = new LinkedList();

//push node
sll.push("macan");
console.log(sll.head); //Object {data: 2, next: Object}
sll.push("maung");
console.log(sll.head); //Object {data: 2, next: Object}
sll.push("singa");
console.log(sll.head); //Object {data: 2, next: Object}

//check values by traversing LinkedList
console.log(sll.head); //Object {data: 2, next: Object}
console.log(sll.head.next); //Object {data: 3, next: Object}
console.log(sll.head.next.next); //Object {data: 4, next: null}

//get value number 2
console.log(sll.get(2).value);

//print panjang Object
console.log(sll.length);

//hapus yang terakhir (singa dihapus)
sll.pop();

//print panjang Object setelah dihapus
console.log(sll.length);

//check ada isinya apa ngga
console.log(sll.check(0)); //ada isinya
console.log(sll.check(2)); //ga ada isinya

//jadi array
console.log(sll.toArray()); //[ macan , maung ]

//delete semuanya
sll.del();

//push baru
sll.push("macan");
sll.push("maung");
sll.push("cheetah");
sll.push("harimaw");
sll.push("harimooo");

console.log(sll.head); //Object {data: 2, next: Object}

sll.shift();

console.log(sll.head); //Object {data: 2, next: Object}
