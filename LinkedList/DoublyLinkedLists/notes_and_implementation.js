
//implement the doubly linked list given below. Using other methods such as append,prepend,insert,
//remove and lookup
// 10 --> 19 --> 20
//    <--    <--

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null,
            pre: null
        }
        this.tail = this.head
        this.length = 1
    }
    prepend(value) {
        //newNode should have a next and value and pre pointing to null
        const newNode = {
            value,
            next: null,
            pre: null
        }
        //STEP 1: make the newNode.next to poiint to the currentFirstNode
        newNode.next = this.head
        //STEP 2: make the currentFirstNode.pre to poin to the newNode added
        this.head.pre = newNode
        this.head = newNode

        this.length++
        return this
    }
    append(value) {
        let newNode = {
            value,
            next: null,
            pre: null
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
    insert(index, value) {
        const newNode = {
            value,
            pre: null,
            next: null
        }
        // Step 1: get the index-1 of the value before the actual index
        let valueBeforeIndex = this.transverseToIndex(index - 1)
        // Step 2: get the index+1 of the value after the index
        let valueAfterIndex = valueBeforeIndex.next
        // Step 2: change the valueBeforeIndex.next to read the new Node added
        valueBeforeIndex.next = newNode
        // Step 3: set the value of the newNode.pre to read the valueBeforeIndex
        newNode.pre = valueBeforeIndex
        // Step 4: set the newNode.next to read the new values before the valueBeforeIndex.next was changed
        newNode.next = valueAfterIndex
        // Step 5: set the valueAfterIndex.pre to equal the newNode
        valueAfterIndex.pre = newNode

        this.length++
        return this
    }
    remove(index){
        // Step 1: get the value before the index value
        const valueBeforeIndex = this.transverseToIndex(index -1)
        // Step 2: get the value after the index
        const valueAfterIndex = this.transverseToIndex(index+1)
        // Step 3: remove the value before the index
        valueBeforeIndex.next = valueAfterIndex
        valueAfterIndex.pre = valueBeforeIndex

        this.length--
        return this

    }
    transverseToIndex(index) {
        let counter = 0
        let currentNode = this.head
        while (counter < index) {
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }
    printList() {
        // Create an empty array
        const array = []
        // Create a current node to measure the node we currently are in since we need to track it
        let currentNode = this.head
        // Create a loop where the value in the this.
        // use a while loop because we do not know the length of our list
        while (currentNode !== null) {
            // push the value into the empty array
            array.push(currentNode.value)
            // update the current value to read the next value in the list
            currentNode = currentNode.next
        }
        console.log(array);
        return array
    }
}

const myDoublyLinkedList = new DoublyLinkedList(19)
myDoublyLinkedList.prepend(10)
myDoublyLinkedList.append(99999)
myDoublyLinkedList.insert(1,2)
console.log(myDoublyLinkedList);
myDoublyLinkedList.remove(1)
myDoublyLinkedList.printList()

