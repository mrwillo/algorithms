
/**
    print root -> left -right
**/
function printPreorder(node) {
    if (node == null)
        return;

    //print the value
    console.log(node.data);

    // recur on the left
    printPreorder(node.left);

    //recur on the right
    printPreorder(node.right);
}

/**
print left root right
**/
function printInOrder(node) {
    if (node == null) return;
    printInOrder(node.left);
    console.log(node.data);
    printInOrder(node.right);
}

function printPostOrder(node) {
    if(node == null) return;
    printPostOrder(node.left);
    printPostOrder(node.right);
    console.log(node.data);
}

function generateTree() {

    let tree = {
        data: 0
    };
    let head = tree;
    for(let i=1; i< 100; i++) {
        if (i%2 === 0) {
            tree['left'] = {
                data: i
            }
            tree = tree['left']
        } else {
            tree['right'] = {
                data: i
            }
            tree = tree['right'];
        }

    }
    return head;
}

function testPrintPreorder() {
    console.log('printing the tree in Pre order tranversal, print from  ROOT -> LEFT -> RIGHT')
    let tree = generateTree();
    printPreorder(tree);
}

function testPrintInOrder() {
    console.log('printing the tree in In order tranversal, print from  LEFT -> ROOT -> RIGHT')
    let tree = generateTree();
    printInOrder(tree);
}

function testPrintPostOrder() {
    console.log('printing the tree in In order tranversal, print from  LEFT -> RIGHT -> ROOT')
    let tree = generateTree();
    printPostOrder(tree);
}

testPrintPreorder();

testPrintInOrder();

testPrintPostOrder();