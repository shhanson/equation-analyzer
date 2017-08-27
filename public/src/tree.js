'use strict';

const Node = require('./node');
const OPS = ['-', '+', 'x', '/']; // Changed '*' to 'x' for command line input

class Bst {
  constructor(){
    this.root = null;
  }

  insert(value){
    // Create a new node with the given value
    let newNode = new Node(value);

    // If the tree is empty, the new node becomes the root
    if(!this.root){
      this.root = newNode;
      return this;
    }

    // If the value is an operator
    if(OPS.includes(newNode.value)){
      // If the operator is a "+" or "-", everything currently in the tree becomes the
      // left operand
      if(newNode.value === "+" || newNode.value === "-"){
        newNode.left = this.root;
        this.root = newNode;
      } else {

        if(this.root.right){
          // If the operator is a "x" or "/", it replaces the right child
          // of root, and the former right child becomes the left child
          // of the new operator.
          newNode.left = this.root.right;
          this.root.right = newNode;
         }
         else {
           newNode.left = this.root;
           this.root = newNode;
         }
      }
    } else {
      // If the new value is not an operator, descend to the
      // right-most node of the tree
      let current = this.root;
      while(current.right !== null){
        current = current.right;
      }
      current.right = newNode;
    }
    return this;
  }
}

module.exports = Bst;
