const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

module.exports = class BinarySearchTree {

  constructor()
  {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    let newNode = new Node(data);
    if(this.rootNode === null) this.rootNode = newNode;
    else {
      let node = this.rootNode;
      outer: while (true) {
        if(newNode.data < node.data) {
          if(node.left === null) {
            node.left = newNode;
            break outer;
          }
          else node = node.left;
        } 
        else 
        if(newNode.data > node.data) {
          if(node.right === null) {
            node.right = newNode;
            break outer;
          }
          else node = node.right;
        }
        else break outer;
      }
    }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    //  returns true if node with the data exists in the tree and false otherwise
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // returns node with the data if node with the data exists in the tree and null otherwise
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // removes node with the data from the tree if node with the data exists
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // returns minimal value stored in the tree (or null if tree has no nodes)
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // returns maximal value stored in the tree (or null if tree has no nodes)
  }

}