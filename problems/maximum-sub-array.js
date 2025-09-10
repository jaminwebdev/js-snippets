// "https://javascript.info/task/maximal-subarray";
// no limit
export const getMaxSubSum = (arr) => {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { 
      partialSum += item;
      maxSum = Math.max(maxSum, partialSum);
      // zero if negative - counters first element being negative
      // large negatives negate subsequent potentially larger sums
      // [1, 3, -7, 5, 1] -> -7 disproportionally effects the outcome of sums to follow
      // making it appear 1 & 3 (4) are the largest sum when it's actually 5, 1 (6)
      if (partialSum < 0) partialSum = 0; 
    }
  
    return maxSum;
  }

  /**
 * Maximum Sum Subarray of Size K (Fixed Window)
 * given a length for the sub array, find the largest sum
 * ex: [1, 2, 3, 4] & length = 2 -> 3 & 4 are the largest making 7
 * ex: [2, 5, 1, 6, 3] & length = 4 -> 5, 1, 6, and 3 are largest making 15
 * 
 * Time Complexity: O(n) where n is array length
 * Space Complexity: O(1) - only using a few variables
 */
 export const getMaxSubSumByWindowSize = (numbers, windowSize) => {
    if (!numbers.length || windowSize > numbers.length || windowSize <= 0) {
        return 0;
    }
    
    // Step 1: Calculate sum of first window
    let currentWindowSum = 0;
    for (let i = 0; i < windowSize; i++) {
        currentWindowSum += numbers[i];
    }
    
    let maxSumFound = currentWindowSum;
    
    // Step 2: Slide the window - remove leftmost, add rightmost
    for (let windowEndIndex = windowSize; windowEndIndex < numbers.length; windowEndIndex++) {
        const windowStartIndex = windowEndIndex - windowSize;
        
        // Remove the element that's leaving the window (left side)
        currentWindowSum -= numbers[windowStartIndex];
        
        // Add the element that's entering the window (right side)
        currentWindowSum += numbers[windowEndIndex];
        
        // Update maximum if current window sum is larger
        maxSumFound = Math.max(maxSumFound, currentWindowSum);
    }
    
    return maxSumFound;
}
