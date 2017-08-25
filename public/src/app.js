
  const Bst = require('./tree');
  const Node = require('./node');
  const COUNT = 10; //Arbitrary number of spaces for printing tree




  let args = process.argv.slice(2);
  console.log(process.argv);

  const input = args.filter((item) => {

  });

  args = "2 + .55";

  const array = args.trim().split(' ');

  const tree = new Bst();

  for (let i = 0; i < array.length; i++) {
    tree.insert(array[i]);
  }


  console.log("RESULT: " + calculate(tree.root));
  printTree(tree.root);


  function calculate(node) {

    if (!node.right && !node.left) {
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
