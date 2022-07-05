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
        let currentNode = this.head;
        let string = "";
        while (currentNode) {
            string += currentNode.value + " -> ";
            currentNode = currentNode.next;
        }
        return string;
    }

}
module.exports = LinkedList;

let l1 = new LinkedList();
l1.Insert(1);
l1.Insert(2);
l1.Insert(3);
console.log(l1.include(3));
console.log(l1.toString());