const Bst = require('./src/tree');
const Node = require('./src/node');


const eq = [1, "+", 1, "-", 4];

let tree = new Bst();

for(let i = 0; i < eq.length; i++){
  tree.insert(eq[i]);
}

console.log(tree);
