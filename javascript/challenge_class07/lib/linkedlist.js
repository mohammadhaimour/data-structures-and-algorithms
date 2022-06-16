
'use strict';
const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
        this.tail = null;
    }


    insert(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this;
        }
        else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
            this.length++;
            return this;
        }
    }

    includes(value) {
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

    kthFromEnd(k) {
        let currentNode = this.head;
        while (!currentNode) {
            currentNode = currentNode.next;
            this.length++;
        }
        if (this.length < k || k < 0)
            return 'Exception';
        for (let i = 0; i < this.length - k - 1; i++) {
            currentNode = currentNode.next;
        }
        return currentNode.value;
    }

}

module.exports = LinkedList; 
