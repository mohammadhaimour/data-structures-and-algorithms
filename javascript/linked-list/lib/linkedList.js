'use strict';
const Node = require('./node');
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
        this.tail = null;
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

// let l1 = new LinkedList();
// l1.Insert(1);
// l1.Insert(2);
// l1.Insert(3);
// console.log(l1.include(3));
// console.log(l1.toString());

let l2 = new LinkedList();
l2.append(1);
l2.append(3);
l2.append(2);
//l2.insertBefore(3, 5);
l2.insertAfter(3, 5);
console.log(l2.include(3));
console.log(l2.toString());