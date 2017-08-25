const Bst = require('./tree');
const Node = require('./node');
const COUNT = 10; //Arbitrary number of spaces for printing tree

const str = " 2 * 1 + 5 * 8 - 2";
const array = str.trim().split(' ');

let tree = new Bst();

for(let i = 0; i < array.length; i++){
  tree.insert(array[i]);
}

console.log(tree);
console.log(calculate(tree.root));
printTree(tree.root);

function calculate(node){

  if(!node.right && !node.left){
    return node.value;
  }
  return eval(`${calculate(node.left)} ${node.value} ${calculate(node.right)}`);

}

function printTree(node){
  printTreeUtil(node, 0);
}

function printTreeUtil(node, space){
  if(!node){
    return;
  }

  space += COUNT;

  printTreeUtil(node.right, space);
  console.log();

  for(let i = COUNT; i < space; i++){
    process.stdout.write(" ");
  }
  console.log(node.value);

  printTreeUtil(node.left, space);

}
