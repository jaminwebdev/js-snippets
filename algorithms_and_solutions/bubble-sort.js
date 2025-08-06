// swap via destructuring
const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

// unfortunately this is a nested solution - big O(n^2)
// on sub-iteration, if current value is greater than the value at current index + 1, swap

export const bblSort = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        // arr.length - i - 1 because we've already sorted those higher value elements at the end
        for(let j = 0; j < ( arr.length - i -1 ); j++) {
           if(arr[j] > arr[j + 1]) {
               swap(arr, j, j +1);
           }
        }
    }
    return arr;
}
// big O(n^2)

const unorderedArray = [23, 1, 54, 3, 32, 6, 9, 15, 23];

console.log(bblSort(unorderedArray));

// alternative swap
// let temp = arr[j]
// arr[j] = arr[j + 1]
// arr[j+1] = temp