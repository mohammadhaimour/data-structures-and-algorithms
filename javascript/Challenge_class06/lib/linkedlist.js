'use strict';
const Node = require('./node');
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
        this.tail = null;

    }


    append(value) {
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


    insertBefore(value, newValue) {
        const newNode = new Node(newValue);
        if (this.head.value === value) {
            this.head = newNode;
            this.length++;
            return this;
        }
        else {
            let currentNode = this.head;
            while (currentNode.next) {
                if (currentNode.next.value === value) {
                    newNode.next = currentNode.next;
                    currentNode.next = newNode;
                    this.length++;
                    return this;
                }
                currentNode = currentNode.next;
            }
            return this;
        }
    }


    insertAfter(value, newValue) {
        const node = new Node(newValue);
        let current = this.head;
        while (current.next) {
            if (current.value === value) {
                node.next = current.next;
                current.next = node;
                this.length++;
                return this;
            }
            current = current.next;
        }
        if (current.value === value) {
            current.next = node;
            this.length++;
            return this;
        } return this;
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