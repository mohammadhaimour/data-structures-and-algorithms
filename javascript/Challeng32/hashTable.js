const LinkedList = require("./linkedList");

class Hashmap {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    set(key, value) {
        let index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = new LinkedList();
        }
        this.table[index].append({
            [key]: value
        });
    }
    contains(key) {
        const hash = this.hash(key);
        if (this.table[hash]) {
            let currentNode = this.table[hash].head;
            while (currentNode) {
                if (currentNode.value[key]) {
                    return true;
                }
                currentNode = currentNode.next;
            }
        } else {
            return false;
        }
    }


    hash(key) {
        if (typeof (key) === 'string') {
            const asciicodeSum = key.split('').reduce((acc, cur) => {
                return acc + cur.charCodeAt(0);
            }, 0);
            const multiPrime = asciicodeSum * 599;
            const index = multiPrime % this.size;
            return index;
        } else if (typeof (key) === 'number') {
            const index = key;
            return index;
        }
    }
}

module.exports = Hashmap;