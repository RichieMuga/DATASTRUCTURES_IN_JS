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
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
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
    insert(index, value) {
        const newNode = {
            value,
            next:null
        }
        // This is the index before the index that was being pointed in the params
        const indexBeforeTheActualIndex = this.transverseToIndex(index-1)
        // This is the index on the params, we need it to point to the next, leaving a blank space
        const indexOnTheActualIndex = indexBeforeTheActualIndex.next

        indexBeforeTheActualIndex.next = newNode
        newNode.next = indexOnTheActualIndex

    }
    remove(index){
        // I need to get the index before the actual index being mentioned i.e index-1
        const indexBefoeActualIndex = this.transverseToIndex(index-1)
        // I need to get the index after the actual index being mentioned i.e the currentNode.next
        const indexAfterActualIndex = this.transverseToIndex(index + 1)
        // I need to remove the actual index
        indexBefoeActualIndex.next = indexAfterActualIndex
    }
    transverseToIndex(index){
        let counter = 0
        let currentNode = this.head

        while (counter !==index ) {
            currentNode = currentNode.next
            counter++
        }

        return currentNode
    }
}

const myLinkedList = new MyLinkedList(12)
myLinkedList.prepend(23)
myLinkedList.append(19)


console.log("THIS IS THE NEXT LINE")
myLinkedList.insert(1, 2)
myLinkedList.remove(2)
myLinkedList.printList()




