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

    // FAILED: This code is too complex to try and create an insert function

    // insert(index, value) {
    //     //Step 1: create a while loop going through the this.head object, this while loop should run as long as the this.head.next != null
    //     while (this.head.next != null) {
    //         //Step 2: create a variable for housing the new Node
    //         const newNode = {
    //             value: value,
    //             next: null
    //         }
    //         //if this.head.next == null then insert the newNode
    //         if (this.head.next === null) {
    //             this.head.next = newNode
    //             console.log("This is at the tail")
    //         }
    //         else {
    //             //Step 3: if index is found, insert the newNode
    //             if (index) {
    //                 //insert the newNode and point to the next index
    //                 this.head = newNode
    //                 this.head.next = this.head
    //             }
    //         }
    //         index++
    //     }
    // }
    // Approach it by first creating an array of the numbers pointing to each other

    // END OF FAILED CODE

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

