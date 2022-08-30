const Hashing = require("./hashTable");
function leftjoin(table1, table2) {
    const finalresult = [];
    const resultofConnectionKey = [];
    let keytable1 = table1.keys();
    keytable1.forEach(element => {
        //console.log('element', element.pop());
        let x = element.pop();
        if (table2.contains(x)) {
            resultofConnectionKey.push(x);
        }
        console.log('result', resultofConnectionKey);

        resultofConnectionKey.forEach(ele => {
            const element = [];
            element.push(ele);
            element.push(table1.get(ele))
            element.push(table2.get(ele))
            finalresult.push(element);
        })
        //console.log('finalresult', finalresult);
        return finalresult;
    });






}


const myhasharray2 = new Hashing(10);
myhasharray2.set('samah', 'sss');//samah :8
myhasharray2.set('shihab', 'ccc');//shihab:7

//----------
const myhasharray = new Hashing(10);
console.log('myhasharray', myhasharray.array);
// myhasharray.set('esam', '401d15 student');//esam:8
myhasharray.set('ahmad', '401d15 student');//ahmad:3
myhasharray.set('mohamad', '401d15 student');//mohammad:3
myhasharray.set('samah', '401d15 student');//samah :8
myhasharray.set('laith', '401d15 student');//laith:0
myhasharray.set('shihab', ' student');//shihab:7

leftjoin(myhasharray, myhasharray);