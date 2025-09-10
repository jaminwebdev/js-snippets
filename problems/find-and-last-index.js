// given a sorted array
// write a function that returns first and last position of a target
// becasue array is sorted, all items are adjacent to each other
export const loopFirstAndLast = (arr, target) => {
    let start, finish
    for (let [index, num] of arr.entries()) {
        if (!start && num === target) {
            start = index;
            continue;
        }

        if (num === target) {
            finish = index
        }
    }

    if(!start) {
        return [-1, -1]
    }

    return [start, finish]
}

// create lookup object w/target as key and array of indices as value
// ex: { 5: [2, 3, 4, 5] }
// return first and last index of lookup array
// this will work for unsorted array as well
export const reduceLookupFistAndLast = (arr, target) => {
    const targetIndexesObj = arr.reduce((lookup, num, index) => { 
        if (num === target) {
            lookup[target].push(index);
        }
        return lookup
    }, {[target]: []})

    const indices = targetIndexesObj[target]

    if (!indices.length) {
        return [-1, -1]
    }

    return [indices[0], indices[indices.length - 1]]
}

export const arrayMethods = (arr, target) => [arr.indexOf(target), arr.lastIndexOf(target)]
