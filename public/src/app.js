  const Bst = require('./tree');
  const Node = require('./node');
  const COUNT = 10; //Arbitrary number of spaces for printing tree

  let args = process.argv.slice(2);

  const tree = new Bst();

  for (let i = 0; i < args.length; i++) {
    tree.insert(args[i]);
  }

  console.log(`RESULT: ${calculate(tree.root)}`)
  printTree(tree.root);


  function calculate(node) {

    if (!node.right && !node.left) {
      return node.value;
    }

    return evaluate(calculate(node.left), calculate(node.right), node.value);
  }

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
