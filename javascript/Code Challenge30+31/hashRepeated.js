
'use strict';

const repeatedWord = (str) => {

    const splittedStr = str.toLowerCase().split(/[, ]+/);
    let array = [];
    //console.log('splittedStr', splittedStr);
    for (let i = 0; i < splittedStr.length; i++) {

        let word = splittedStr[i];
        const includingReapeted = array.includes(word);

        if (includingReapeted) return word;
        array.push(word);

    }
    return " the string not have a repeasted word ";
};


module.exports = repeatedWord;

// let s1 = "Once upon a time, there was a brave princess who...";
// let s2 = "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...";
// console.log(repeatedWord(s2));
