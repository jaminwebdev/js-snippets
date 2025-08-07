export const doArraysContainCommon = (arr1, arr2) => 
  new Set(arr1).intersection(new Set(arr2)).size > 0

console.log(doArraysContainCommon([1, 2, 3, 4], [43, 6, 9]))