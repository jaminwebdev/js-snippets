
const mergeSort = (array) => {
    if(array.length === 1) {
        return array;
    }

    // split array into left/right halves
    const length = array.length;
    const middle = Math.floor(length/2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

const merge = (left, right) => {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // spreading any remaining slices takes care of imbalances of above while loop
    return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];

}

const now = performance.now()
const unorderedArray = [23, 1, 54, 3, 32, 6, 9, 15, 23];
console.log(performance.now() - now);

console.log(mergeSort(unorderedArray));

// const array1 = [1, 3, 5, 7, 9];
// const array2 = [2, 4, 6, 8];
// console.log(merge(array1, array2));
