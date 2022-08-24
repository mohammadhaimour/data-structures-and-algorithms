const HashTable = require('../hashTable');
const repeatedWord = require('../hashRepeated')

const hashTable = new HashTable(10);
describe('Hash Table Test', () => {
    it('1- Setting a key/value to your hashtable results in the value being in the data structure', () => {
        hashTable.set('mohamad', '401d15 student');
        expect(hashTable.get('mohamad')).toEqual([{ mohamad: '401d15 student' }]);
    });
    it('2- Retrieving based on a key returns the value stored', () => {
        hashTable.set('zaid', '401d15 student');
        hashTable.set('himour', '401d15 student');
        expect(hashTable.get('zaid')).toEqual([{ zaid: '401d15 student' }]);
        expect(hashTable.get('himour')).toEqual([{ himour: '401d15 student' }]);

    });
    it('3- Successfully returns null for a key that does not exist in the hashtable', () => {
        expect(hashTable.get('Qais')).toEqual(null);
    });
    it('4-Successfully returns a list of all unique keys that exist in the hashtable', () => {
        const hashTable2 = new HashTable(10);
        hashTable2.set('ahmad', '401d15 student');
        hashTable2.set('yazan', '401d15 student');
        // console.log('keys =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ', hashTable2.keys());
        expect(hashTable2.keys()).toEqual([["ahmad"], ["yazan"]]);
    });
    it('5- Successfully handle a collision within the hashtable', () => {
        const hashTable3 = new HashTable(10);
        hashTable3.set('mohamad', '401d15 student');
        hashTable3.set('ahmad', '401d15 student');
        expect(hashTable3.get('mohamad')).toEqual([{ mohamad: '401d15 student' }, { ahmad: '401d15 student' }]);
    });
    it('6 - Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
        const myhasharray = new HashTable(10);
        myhasharray.set('esam', '401d15 student');//esam:8
        myhasharray.set('samah', '401d15 student');//samah :8
        myhasharray.set('laith', '401d15 student');//laith:0
        myhasharray.set('shihab', '401d15 student');//shihab:7
        expect(myhasharray.get('esam')).toEqual([{ esam: '401d15 student' }, { samah: '401d15 student' }]);
    });
    it('7-Successfully hash a key to an in-range value', () => {
        const myhasharray2 = new HashTable(10);
        myhasharray2.set('HI', 'haimour');
        expect(myhasharray2.hash('HI')).toBeLessThan(10);
    });
    it('Test repeatedWord function', () => {
        let s1 = "Once upon a time, there was a brave princess who...";
        let s2 = "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...";

        expect(repeatedWord(s1)).toBe('a');
        expect(repeatedWord(s2)).toBe('summer');

    });
})