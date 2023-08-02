// this is a datastructure that has a headend and a tailend
// they contain nodes in that each node has a head and tail
// they are null terminated, meaning that the tail at the end of the linked list is null

// some pseudo code for a linked list

// [apples,oranges, avocado] this is an array, lets convert it to a linked list
//  apples --> oranges -->avodado -->null
class MyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }
    append(value) {
        const newNode = {
            value: value,
            next: null
        }
        this.tail = newNode
        this.length++
    }
    prepend(value) {
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }
    printList(){
        // Create an empty array
        const array = []
        // Create a current node to measure the node we currently are in since we need to track it
        let currentNode = this.head
        // Create a loop where the value in the this.head is known and the next is what we change the current node to
        while (currentNode !== null){
            console.log(array);
            // keep pushing the value of the node to it until we go the next and onwards
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
    }
}

const myLinkedList = new MyLinkedList(12)
myLinkedList.prepend(19)
myLinkedList.prepend(198)
console.log(myLinkedList)
console.log("THIS IS THE NEXT LINE")
myLinkedList.printList()

