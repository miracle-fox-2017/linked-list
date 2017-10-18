class LinkedList {
    constructor(data = 1) {
        this.data = data
        this.next = null
    }

    add(data) {
        let node = new LinkedList(data)
        let thisNext = this

        while (thisNext.next) {
            thisNext = thisNext.next
        }
        thisNext.next = node
    }
    pop() {

        let thisNext = this
        let prev
        while (thisNext.next) {
            prev = thisNext
            thisNext = thisNext.next
        }

        prev.next = null
    }
    remove(angka) {
        let thisNext = this
        let prev
        let count = 0;
        while (count < angka) {
            prev = thisNext
            thisNext = thisNext.next
            count++
        }
        prev.next = prev.next.next
    }
    print() {
        return this
    }
}

let link = new LinkedList()

for (let i = 2; i <= 10; i++) {
    link.add(i)
}
console.log(JSON.stringify(link.print(), null, 10));
link.pop()
console.log(JSON.stringify(link.print(), null, 10));
link.pop()
console.log(JSON.stringify(link.print(), null, 10));
link.remove(4)
console.log(JSON.stringify(link.print(), null, 10));
