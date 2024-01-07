// Important rules
// each node can only have 0, 1, or 2 children
// each child can only have 1 parent

// Binary Tree example
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//Binary search big O
// Insertion - O(log n)
// Searching - O(log n)

// Height of a tree
// Level 0: 2^0 = 1
// Level 1: 2^1 = 2
// Level 2: 2^2 = 4

// Number of nodes = 2^h - 1
// example:
// 2^3 = 8 -1 = 7

// Binary Search Tree
// Every parent node has at most two children
// Every node to the left of a parent node is always less than the parent
// Every node to the right of a parent node is always greater than the parent

// Example
//                  100
//                 /   \
//               50    150
//              / \    / \
//             25 75  125 170
// In the following example to the right of the binary tree, the number is increasing and to the left, the number is decreasing


// Binary Search Tree Big O
// Insertion - O(log n)
// Searching - O(log n)
// lookup - O(log n)


// Types of Tree Traversal
// Balanced Tree = O(log n)
// Unbalanced Tree = O(n), because it could uses a lineked list type of dsa, thats the big problem
// For example

//                  100
//                 /   \
//               50    150
//                       \
//                      170

// NB: the nodes to the right are looking more like a linked list