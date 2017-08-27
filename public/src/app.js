  const Bst = require('./tree');
  const Node = require('./node');
  const COUNT = 10; //Arbitrary number of spaces for printing tree

  // Capture the command line args, exclude "node" and "app.js"
  let args = process.argv.slice(2);

  // Initialize a new tree
  const tree = new Bst();

  // Insert each operand and operator from args into the tree
  for (let i = 0; i < args.length; i++) {
    tree.insert(args[i]);
  }

  // Print expression result and a visualization of the tree to the console
  console.log(`RESULT (NOW WITH LESS EVAL()): ${calculate(tree.root)}`)
  printTree(tree.root);


  // Recursive function to calculate the result of the expression
  function calculate(node) {
    if (!node.right && !node.left) {
      return node.value;
    }

    return evaluate(calculate(node.left), calculate(node.right), node.value);
  }

  // Helper function to evaluate expressions
  function evaluate(op1, op2, operator){
    op1 = Number(op1);
    op2 = Number(op2);
    let result;
    switch(operator){
      case '+':
        result = op1+op2;
        break;
      case '-':
        result = op1-op2;
        break;
      case 'x':
        result = op1*op2;
        break;
      case '/':
        result = op1/op2;
        break;
      default:
        result = "ERROR!";
    }
    return result;
  }

  // Helper function for printTreeUtil
  function printTree(node){
    printTreeUtil(node, 0);
  }

  // Recursive function to print a tree representation to the console
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
