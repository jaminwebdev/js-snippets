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

const mergedArrays = merge([1, 5, 7], [2, 3, 9]);

// also sorts
const lookupMerge = (array1, array2) => {
    return Object.values([...array1, ...array2].reduce((accum, item) => 
        ({...accum, [item]:item }), 
    {}))
}
const now = performance.now()
const lookupMergedArray = lookupMerge([1, 3, 4, 44, 32], [2, 5, 6, 20, 304])
console.log(performance.now() - now)