'use strict';
function validatebrackets(str) {
    let arr = str.split('');
    let arr2 = [];

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === '{' || arr[i] === '}' || arr[i] === '(' || arr[i] === ')' || arr[i] === '[' || arr[i] === ']')
            arr2.push(arr[i]);
    }
    //console.log(arr2);

    let OpenRoundBrackets = 0;//(
    let ClosetRoundBrackets = 0;//)

    let OpenSquareBrackets = 0;//[
    let ClosetSquareBrackets = 0;//]


    let OpenCurlyBrackets = 0;//{
    let ClosepenCurlyBrackets = 0;//{


    arr2.forEach((bra) => {
        if (bra === '(')
            OpenRoundBrackets++;

        else if (bra === ')')
            ClosetRoundBrackets++;

        else if (bra === '[')
            OpenSquareBrackets++;

        else if (bra === ']')
            ClosetSquareBrackets++;

        else if (bra === '{')
            OpenCurlyBrackets++;

        else if (bra === '}')
            ClosepenCurlyBrackets++;


    });

    if (OpenRoundBrackets === ClosetRoundBrackets &&
        OpenSquareBrackets === ClosetSquareBrackets &&
        OpenCurlyBrackets === ClosepenCurlyBrackets)
        return true;

    else
        return false;

}
module.exports = validatebrackets;
// console.log(brackets('{}'));//TRUE
// console.log(brackets('{}[][]'));//TRUE
// console.log(brackets('()[[Extra Characters]]'));//TRUE
// console.log(brackets('(){}[[]]'));//TRUE
// console.log(brackets('[({}]'));//false
// console.log(brackets('(]('));//false





