const Bst = require('./src/tree');
const Node = require('./src/node');

const str = " 2 * 1 + 5 * 8 - 2";
const array = str.trim().split(' ');

let tree = new Bst();

for(let i = 0; i < array.length; i++){
  tree.insert(array[i]);
}

console.log(tree);
console.log(calculate(tree.root));

function calculate(node){

  if(!node.right && !node.left){
    return node.value;
  }
  return eval(`${calculate(node.left)} ${node.value} ${calculate(node.right)}`);

}
