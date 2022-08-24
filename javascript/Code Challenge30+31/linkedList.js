class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        }
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }
    values() {
        let values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
}
module.exports = LinkedList;

// const ll = new LinkedList();
// ll.append(1);
// ll.append(2);
// ll.append(3);
// ll.append(4);
// ll.append(5);
// ll.append(6);
// ll.append(7);
// ll.append(8);

// console.log(ll.values());