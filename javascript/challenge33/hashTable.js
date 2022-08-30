const LinkedList = require("./linkedList");
class Hashing {
    constructor(size) {
        this.size = size;
        this.array = new Array(size);

    }
    hash(key) {

        const asciicodeSum = key.split("").reduce((acc, cur) => {
            return acc + cur.charCodeAt(0);
        }, 0);

        const multiPrime = asciicodeSum * 599;
        const theIndex = multiPrime % this.size;
        return theIndex;

    }

    set(key, value) {

        const hashKey = this.hash(key);
        console.log(key, hashKey);
        if (!this.array[hashKey]) {
            this.array[hashKey] = new LinkedList();
        }
        this.array[hashKey].append({ [key]: value });
        //console.log(this.array[hashKey].head.value);


    }

    get(key) {
        let hashIndex = this.hash(key);
        let bucket = this.array[hashIndex];
        if (bucket) {
            let current = bucket.head;
            while (current) {
                if (current.value[key]) {
                    return current.value[key];
                } else {
                    current = current.next;
                }
            }
        }
        return null;
    }

    contains(key) {
        let index = this.hash(key);
        if (!this.array[index])
            return false;
        else
            return true;
    }
    keys() {
        let collectionkeys = [];
        this.array.map((e) => {
            let current = e.head;
            while (current) {
                collectionkeys.push(Object.keys(current.value));
                current = current.next;
            }
        });
        return collectionkeys;
    }


}
module.exports = Hashing;








