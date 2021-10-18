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

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    let node = this.rootNode;

    while (node) {
      if (node.data === data) return node; 
      else if (node.data > data) node = node.left;
      else if (node.data < data) node = node.right;
    }

    return null;
  }

  remove(data) {
    if (this.has(data)) {
      this.rootNode = this.removeNode(this.rootNode, data);
    }
   }

  removeNode(node, data) {
    if (!node) {
      return null;
    }

    if (node.data < data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } 
    else if (node.data > data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } 
    else if (node.data === data){
      if (!node.left && !node.right) {
        return null
      } 
      else if (!node.left) {
        node = node.right;
        return node;
      } 
      else if (!node.right) {
        node = node.left;
        return node;
      } 
      else {

      let minFromRightBranch = this.findMinNode(node.right);

      node.data = minFromRightBranch.data;
      node.right = this.removeNode(node.right, minFromRightBranch.data);
      return node;
      }
    }
  }
  
  min() {
    if(!this.rootNode) return null;
    return this.findMinNode(this.rootNode).data;
  }

  max() {
    if(!this.rootNode) return null;
    return this.findMaxNode(this.rootNode).data;
  }

  findMinNode(startNode) {
    if(!startNode){
      return null;
    }
    if(startNode.left === null)
      return startNode;
    else
      return this.findMinNode(startNode.left);
  }

  findMaxNode(startNode) {
    if(!startNode){
      return null;
    }
    if(startNode.right === null)
      return startNode;
    else
      return this.findMaxNode(startNode.right);
  }

}