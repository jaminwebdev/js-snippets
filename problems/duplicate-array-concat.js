// write a function that duplicates and appends an array

const TEST_ARRAY = [1, 3, 4, 4, 5]
const TEST_ARRAY2 = [3, 1, 5, 23]

export const duplicate = arr => arr.concat(arr);

console.log(duplicate(TEST_ARRAY)); // [1,2,3,4,5,1,2,3,4,5]

export const duplicateSpread = arr => [...arr, ...arr]; 

console.log(duplicateSpread(TEST_ARRAY2))
