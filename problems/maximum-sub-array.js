// "https://javascript.info/task/maximal-subarray";
// no limit
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { 
      partialSum += item;
      maxSum = Math.max(maxSum, partialSum);
      // zero if negative - counters first element being negative & large negatives negating subsequent potentially larger sums
      // [1, 3, -7, 5, 1] -> -7 disproportionally effects the outcome of sums to follow
      // making it appear 1 & 3 (4) are the largest sum when it's actually 5, 1 (6)
      if (partialSum < 0) partialSum = 0; 
    }
  
    return maxSum;
  }
  
//  console.log( getMaxSubSum([-1, 2, 3, -9]) ); 
//  console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); 
//  console.log( getMaxSubSum([-2, -1, 1, 2]) );
//  console.log( getMaxSubSum([100, -9, 2, -3, 5]) );
//  console.log( getMaxSubSum([1, 2, 3]) ); 
//  console.log( getMaxSubSum([-1, -2, -3]) );

 // given a length for the sub array, find the largest sum
 // ex: [1, 2, 3, 4] & length = 2 -> 3 & 4 are the largest making 7
 // ex: [2, 5, 1, 6, 3] & length = 4 -> 5, 1, 6, and 3 are largest making 15
 const getMaxSubSumByNum = (array, number) => {
    if(array.length < number) return null;
    let maxSum = 0;
    let subSum = 0;
    // max sum for first num elements
    array.slice(0, number).forEach( value => maxSum += value);

    subSum = maxSum;

    // starting at num, 'slide' the window
    // on each iteration, subtract the previous item from the temp/sub sum 
    // but also add the current item & compare to max
    // no need to recalculate ranges of indexes with nested loops
    for(let index = number; index < array.length; index++) {
        subSum = subSum - array[index - number] + array[index];
        maxSum = Math.max(maxSum, subSum);
    }

    return maxSum;
 }

 console.log(getMaxSubSumByNum([2, 1, 5, 1, 6, 2], 3)); //12