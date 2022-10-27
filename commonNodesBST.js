// Problem Description
// Given two BST's A and B, return the (sum of all common nodes in both A and B) % (109 +7) .

// In case there is no common node, return 0.

// NOTE:

// Try to do it one pass through the trees.

// Problem Constraints
// 1 <= Number of nodes in the tree A and B <= 105

// 1 <= Node values <= 106

// Input Format
// First argument represents the root of BST A.

// Second argument represents the root of BST B.

// Output Format
// Return an integer denoting the (sum of all common nodes in both BST's A and B) % (109 +7) .

// Example Input
// Input 1:

//  Tree A:
//     5
//    / \
//   2   8
//    \   \
//     3   15
//         /
//         9

//  Tree B:
//     7
//    / \
//   1  10
//    \   \
//     2  15
//        /
//       11
// Input 2:

//   Tree A:
//     7
//    / \
//   1   10
//    \   \
//     2   15
//         /
//        11

//  Tree B:
//     7
//    / \
//   1  10
//    \   \
//     2  15
//        /
//       11

// Example Output
// Output 1:

//  17
// Output 2:

//  46

// Example Explanation
// Explanation 1:

//  Common Nodes are : 2, 15
//  So answer is 2 + 15 = 17
// Explanation 2:

//  Common Nodes are : 7, 2, 1, 10, 15, 11
//  So answer is 7 + 2 + 1 + 10 + 15 + 11 = 46

// Definition for a  binary tree node
class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const commonNodesBST = (A, B) => {
  let root1 = A;
  let root2 = B;
  let stack1 = [],
    stack2 = [];
  let sum = 0;
  let m = 10 ^ (9 + 7);

  while (true) {
    // update both stacks by going left till possible
    if (root1 !== null) {
      stack1.push(root1);
      root1 = root1.left;
    } else if (root2 !== null) {
      stack2.push(root2);
      root2 = root2.left;
    }

    // Add the common value into output,
    // pop it from the stack,
    // and then do one step right
    else if (stack1.length > 0 && stack2.length > 0) {
      root1 = stack1[stack1.length - 1];
      root2 = stack2[stack2.length - 1];

      if (root1.data === root2.data) {
        sum = ((sum % m) + (root1.data % m)) % m;
        stack1.pop();
        stack2.pop();

        // move to the inorder successor
        root1 = root1.right;
        root2 = root2.right;
      } else if (root1.data < root2.data) {
        stack1.pop();
        root1 = root1.right;
        root2 = null;
      } else {
        stack2.pop();
        root2 = root2.right;
        root1 = null;
      }
    } else break;
  }

  return sum;
};

/* A utility function to insert a new Node with given key in BST */
let insert = (node, key) => {
  /* If the tree is empty, return a new Node */
  if (node === null) return new TreeNode(key);

  /* Otherwise, recur down the tree */
  if (key < node.data) node.left = insert(node.left, key);
  else if (key > node.data) node.right = insert(node.right, key);

  /* return the (unchanged) Node pointer */
  return node;
};

let inorder = (root) => {
  if (root != null) {
    inorder(root.left);
    console.log(root.data + ' ');
    inorder(root.right);
  }
};

// Create first tree as shown in example
let root1 = null;
let head = root1;
root1 = insert(root1, 5);
root1 = insert(root1, 1);
root1 = insert(root1, 10);
root1 = insert(root1, 0);
root1 = insert(root1, 4);
root1 = insert(root1, 7);
root1 = insert(root1, 9);

// Create second tree as shown in example
let root2 = null;
root2 = insert(root2, 10);
root2 = insert(root2, 7);
root2 = insert(root2, 20);
root2 = insert(root2, 4);
root2 = insert(root2, 9);

let indent = 1;
const traverse = (root) => {
  root.forEach((node) => {
    console.log('--' + Array(indent).join('--'), node.data);
    if (node.left) {
      indent++;
      traverse(node.left);
    }
    if (node.right) {
      indent++;
      traverse(node.right);
    }
    if (root.indexOf(node) === root.length - 1) {
      indent--;
    }
  });
};

console.log('Tree 1 : ' + traverse(head) + '\n');
console.log('Tree 1 : ' + '\n');
inorder(root1);
console.log();
console.log('Tree 2 : ' + '\n');
inorder(root2);
console.log();

console.log(commonNodesBST(root1, root2));
