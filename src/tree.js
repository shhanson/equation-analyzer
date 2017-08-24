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


      newNode.left = this.root;
      this.root = newNode;

    } else {

      this.root.right = newNode;


    }

    return this;



  }


}

module.exports = Bst;
