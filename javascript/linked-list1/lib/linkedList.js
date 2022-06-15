'use strict';
const Node = require('./node');
class LinkedList {
    constructor() {
        this.head = null;
    }

    Insert(value) {
        const newNode = new Node(value);

        //if it is empty
        if (!this.head) {
            this.head = newNode;
            return this;
        }
        else {
            // if the LL is not empty
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
            return this;
        }
    }

    include(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }


    toString() {
        let nodeInclud = this.head;
        let string = "";
        while (nodeInclud) {
            string += nodeInclud.value + " -> ";
            nodeInclud = nodeInclud.next;
        }
        return string;
    }

}
module.exports = LinkedList;