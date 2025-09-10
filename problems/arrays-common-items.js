// write a function that determines whether two arrays have at least one common item
export const doArraysContainCommon = (arr1, arr2) => 
  new Set(arr1).intersection(new Set(arr2)).size > 0
