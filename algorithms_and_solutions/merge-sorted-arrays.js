export const merge = (left, right) => {
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

// also sorts
export const lookupMerge = (array1, array2) => {
    return Object.values([...array1, ...array2].reduce((accum, item) => 
        ({...accum, [item]:item }), 
    {}))
}

export const spreadSortMerge = (array1, array2) => [...array1, ...array2].sort((a, b) => a - b)

const array1 = [2, 5, 6, 9, 22, 25, 54, 75, 78, 90, 92, 95, 102]
const array2 = [3, 4, 6, 7, 13, 24, 35, 46, 68, 88, 89, 104]

let now = performance.now()
const mergedArray = merge(array1, array2)
console.log('Original merge: ' + (performance.now() - now))

now = performance.now()
const lookupMergedArray = lookupMerge(array1, array2)
console.log('Lookup Merge: ' + (performance.now() - now))

now = performance.now()
const spreadSortArray = spreadSortMerge(array1, array2)
console.log('Spread and sort: ' + (performance.now() - now))