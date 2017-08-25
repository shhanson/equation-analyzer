'use strict';

const Node = require('./node');
const OPS = ['-', '+', '*', '/'];

class Bst {

  constructor(){
    this.root = null;
  }

  insert(value){

    let newNode = new Node(value);

    if(!this.root){
      this.root = newNode;
      return this;
    }

    // If the value is an operator
    if(OPS.includes(newNode.value)){
      if(newNode.value === "+" || newNode.value === "-"){
        newNode.left = this.root;
        this.root = newNode;
      } else {
        if(this.root.right){
          newNode.left = this.root.right;
          this.root.right = newNode;
        } else {
          newNode.left = this.root;
          this.root = newNode;
        }

      }

    } else {
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
