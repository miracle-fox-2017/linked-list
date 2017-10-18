const util = require('util')

class Node {
  constructor(data, next) {
    this.data = data
    this.next = next
  }

  tambah(data) {
    var node = new Node(data, null)
    var maju = this

    while(maju.next) {
      maju = maju.next
    }

    maju.next = node

    return this
  }

  potong() {
    var maju = this

    if(maju.next == null) {
      maju.data = null
      return this
    }

    while(maju.next.next) {
      maju = maju.next
    }
    maju.next = null

    return this

  }
}

var linkedList = new Node(1, null)
linkedList.tambah(15).tambah(90).tambah(28)


// console.log(edan);
console.log(util.inspect(linkedList.next.next.next, {showHidden: false, depth: null}))
