class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    PreOrder() {
        let result = [];
        let traverse = (node) => {
            result.push(node.value);
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(this.root);
        return result;
    }
}

module.exports = BinaryTree