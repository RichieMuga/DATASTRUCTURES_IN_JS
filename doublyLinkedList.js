
//implement the doubly linked list given below. Using other methods such as append,prepend,insert,
//remove and lookup
// 10 --> 19 --> 20
//    <--    <--

class DoublyLinkedList{
    constructor(value){
        this.head = {
            value,
            next:null,
            pre:null
        }
        this.tail = this.head
        this.length = 1
    }
    prepend(value){
        //newNode should have a next and value and pre pointing to null
        const newNode = {
            value,
            next:null,
            pre:null
        }
        //STEP 1: make the newNode.next to poiint to the currentFirstNode
        newNode.next =this.head
        //STEP 2: make the currentFirstNode.pre to poin to the newNode added
        this.head.pre = newNode
        this.head = newNode

        this.length++
        return this
    }
    append(value){
        let newNode = {
            value,
            next:null,
            pre:null
        }
        // STEP 1: get the end of the linkedList
        this.tail
        // STEP 2: add the newNode to the this.tail.next
        this.tail.next = newNode
        // STEP 3: point the newNode previous value to the endOfLinkedList
        newNode.pre = this.tail
        // STEP 4: make the end of the linked list to be the Newnode
        newNode = this.tail

        this.length++
    }
}

const myDoublyLinkedList = new DoublyLinkedList(19)
myDoublyLinkedList.prepend(10)
myDoublyLinkedList.append(99999)
console.log(myDoublyLinkedList);
