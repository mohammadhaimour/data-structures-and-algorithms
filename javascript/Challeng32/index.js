const Node = require('./node');
const BinaryTree = require("./binaryTree");
const TreeIntersection = require("./tree-intersection");

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);

one.left = two;
one.right = three;

two.left = four;
two.right = five;

three.left = six;
three.right = seven;

four.left = eight;


let tree = new BinaryTree(one);

let s_One = new Node(2);
let s_Two = new Node(60);
let s_Three = new Node(20);
let s_Four = new Node(4);
let s_Five = new Node(0);
let s_Six = new Node(6);
let s_Seven = new Node(9);
let s_Eight = new Node(8);

s_One.left = s_Two;
s_One.right = s_Three;

s_Two.left = s_Four;

s_Three.left = s_Five;
s_Three.right = s_Six;

s_Five.left = s_Seven;
s_Five.right = s_Eight;

let tree2 = new BinaryTree(s_One);

let treeOne = tree.PreOrder();
let treeTwo = tree2.PreOrder();



// console.log('treeOne >>>>>>>>>>> ', treeOne);
// console.log('treeTwo >>>>>>>>>>>>>> ', treeTwo);

console.log('result >>>>>>>>>>>>>>>', TreeIntersection(treeOne, treeTwo));