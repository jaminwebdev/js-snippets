const binarySearchArrayRecursive = function (arr =[], value = 0, start = 0, end = (arr.length -1)) {
      
    // Base Condition
    if (start > end) return false;
  
    let mid = Math.floor((start + end)/2);
  
    if (arr[mid]===value) return true;
         
    // If element at mid is greater than value,
    // search in the left half of the array - move end to left of current mid (mid -1)
    if(arr[mid] > value)
        return binarySearchArrayRecursive(arr, value, start, mid - 1);
    else
        // search in the right half of the array - move start to right of current mid (mid + 1)
        return binarySearchArrayRecursive(arr, value, mid + 1, end);
}
  
let arr = [1, 3, 5, 7, 8, 9];
let value = 7;
// start = 0, end = 5 -> mid = (5+0)/2 = 2.5, floor = 2, mid = 2 -> arr[2] = 5 -> 5 > value, so search in left, mid - 1 (2 -1), 1 = new end
// start = 0, end = 1 -> mid = (0+1)/2 = 0.5, floor = 0, mid = 0 -> arr[0] = 1 -> 1 < value, so search in right, mid + 1 (1 + 1), 2 = new start
// start > end (2 > 1), so base condition is true and false is returned

// console.log(binarySearchArrayRecursive(arr, value))

const binarySearchArrayIterative = function (array, value) {
  
    let start = 0;
    let end = array.length-1;
         
    while (start<=end){
 
        let mid=Math.floor((start + end)/2);

        if (array[mid] === value) return true;
 
        else if (array[mid] < value)
             start = mid + 1;
        else
             end = mid - 1;
    }
  
    return false;
}

console.time('recursive');
binarySearchArrayRecursive(arr, value);
console.timeEnd('recursive'); // 0.5ms

console.time('iterative');
binarySearchArrayIterative(arr, value);
console.timeEnd('iterative');// 0.035ms -> 14x faster than recursive