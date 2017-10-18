class LinkedList {
	constructor(){
		this.head = null
		this.length = null
	}

	addNode(data){
		const nodeToAdd = {data : data, next : null}
		let checkPoint = this.head

		if(!checkPoint){
			this.head = nodeToAdd
			this.length++

			return this
		}
		//console.log(checkPoint.next);
		while(checkPoint.next){
			checkPoint = checkPoint.next
		}

		checkPoint.next = nodeToAdd
		this.length++
		return this
	}

	removeNode(num) {

    let CheckPoint = this.head
    let count       = 0
    let prevNode    = null
    
    if(num > this.length) return "Index yang dimasukin kagak ada bang"
    
    if(num === 0) {
      this.head = CheckPoint.next;
      this.length--;
      
      return this.head;
    }
    
    while(count < num) {
      prevNode = CheckPoint;
      CheckPoint = CheckPoint.next;
      count++;
    }
    
    prevNode.next = CheckPoint.next;
    CheckPoint = null;
    this.length--;
    
    return this
  }

  popNode(){

  	let CheckPoint = this.head
    let count       = 0
    let prevNode    = null

  	while(count < this.length-1){
  		prevNode = CheckPoint
  		CheckPoint = CheckPoint.next
  		count++
  	}

  	prevNode.next = null
  }

}

let link = new LinkedList()
link.addNode(2)
link.addNode(4)
link.addNode(5)
link.addNode(7)

console.log(JSON.stringify(link.head, null, 2));
link.removeNode(1)
//console.log(link.removeNode(0));
console.log(link.head);
link.popNode()
console.log(link.head);