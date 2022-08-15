function partition(arr, low, high) {
    // pivot
    let pivot = arr[high];


    let i = (low - 1);

    for (let j = low; j <= high - 1; j++) {


        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return (i + 1);
}


function quickSort(arr, low, high) {
    if (low < high) {

        let pi = partition(arr, low, high);
        // console.log("pi", pi);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr = [4, 3, 2, 1];
let n = arr.length;
quickSort(arr, 0, n - 1);
console.log("array", arr);

