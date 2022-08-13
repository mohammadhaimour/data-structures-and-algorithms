'use strict';
function merge(left, right) {
    let sortedArr = []
    //console.log('gg', left.length && right.length);
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }

    return [...sortedArr, ...left, ...right];
    //return sortedArr;
}

function mergeSort(arr) {
    // Base case
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    // Recursive calls
    //console.log('11', arr.slice(0, mid));
    //console.log('22', arr.slice(mid));
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    console.log('left', left);
    console.log('right', right);
    // console.log(merge(left, right));
    return merge(left, right)
}

//console.log(mergeSort([3, 5, 8, 5, 99, 1]));
console.log(mergeSort([4, 3, 2, 1]));
//console.log(mergeSort([2, 1]));
























