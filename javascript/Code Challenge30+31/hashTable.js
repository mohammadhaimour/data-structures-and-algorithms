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
        let index = this.hash(key);
        if (!this.array[index]) {
            return null;
        }
        return this.array[index].values();
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

// const myhasharray = new Hashing(10);
// //console.log('myhasharray', myhasharray.array);
// myhasharray.set('esam', '401d15 student');//esam:8
// myhasharray.set('ahmad', '401d15 student');//ahmad:3
// myhasharray.set('mohamad', '401d15 student');//mohammad:3
// myhasharray.set('samah', '401d15 student');//samah :8
// myhasharray.set('laith', '401d15 student');//laith:0
// myhasharray.set('shihab', '401d15 student');//shihab:7
//console.log('8', myhasharray.array[8].values());
// console.log(myhasharray.get('laith'));
// console.log('myhasharray.keys()', myhasharray.keys());
// myhasharray.array.forEach((LI) => {
//     console.log(LI.values());
// })
// console.log('get', myhasharray.contains('esam'));

// console.log('jjjjjjjjjjjjj', myhasharray.keys());




