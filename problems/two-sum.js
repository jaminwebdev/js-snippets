// write a function that accepts an array and a target number
// it should return the two numbers
// if not, return an empty array
export const twoSum = (nums, target) => {
  const numMap = {};

  for (let value of nums) {
    const complement = target - value

    if (complement in numMap) {
      return [complement, value]
    }

    numMap[value] = true;
  }

  return [];
}

/**
 * More optimal approach if array is sorted
 * Two Sum - Find two numbers in a sorted array that add up to target
 * Uses two pointers starting from opposite ends moving towards each other
 * 
 * Time Complexity: O(n) where n is array length
 * Space Complexity: O(1) - only using two pointers
 */
export const twoSumSorted = (sortedNumbers, targetSum) => {
    let leftPointer = 0;
    let rightPointer = sortedNumbers.length - 1;
    
    // Continue until pointers meet in the middle
    while (leftPointer < rightPointer) {
        const currentSum = sortedNumbers[leftPointer] + sortedNumbers[rightPointer];
        
        if (currentSum === targetSum) {
            // Found the pair! Return the actual values
            return [sortedNumbers[leftPointer], sortedNumbers[rightPointer]];
        }
        else if (currentSum < targetSum) {
            // Sum is too small, we need a larger number
            // Move left pointer right to get a larger left value
            leftPointer++;
        }
        else {
            // Sum is too large, we need a smaller number
            // Move right pointer left to get a smaller right value
            rightPointer--;
        }
    }
    
    // No valid pair found
    return null;
}