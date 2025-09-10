
// ========= OPPOSITE ENDS =========

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


/**
 * Valid Palindrome - Check if string reads the same forwards and backwards
 * Uses two pointers moving from opposite ends towards center
 * 
 * Time Complexity: O(n) where n is string length
 * Space Complexity: O(1) - only using two pointers
 */
export const isValidPalindrome = (inputString) => {
      // Convert to lowercase and remove non-alphanumeric characters
    const cleanedString = inputString.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    let leftPointer = 0;                           // Start from beginning
    let rightPointer = cleanedString.length - 1;   // Start from end
    
    // Compare characters moving towards center
    while (leftPointer < rightPointer) {
        if (cleanedString[leftPointer] !== cleanedString[rightPointer]) {
            // Characters don't match - not a palindrome
            return false;
        }
        
        // Move pointers towards center
        leftPointer++;
        rightPointer--;
    }
    
    // All characters matched - it's a palindrome
    return true;
}