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

const lookupMerge = (array1, array2) => {
    return Object.values([...array1, ...array2].reduce((accum, item) => 
        ({...accum, [item]:item }), 
    {}))
}

const lookupMergedArray = lookupMerge([1, 3, 4], [2, 5, 6])
console.log(lookupMergedArray)