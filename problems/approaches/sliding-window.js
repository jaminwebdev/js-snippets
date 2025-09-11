// ==================== FIXED SLIDING WINDOW ====================

/**
 * Maximum Sum Subarray of Size K (Fixed Window)
 * given a length for the sub array, find the largest sum
 * ex: [1, 2, 3, 4] & length = 2 -> 3 & 4 are the largest making 7
 * ex: [2, 5, 1, 6, 3] & length = 4 -> 5, 1, 6, and 3 are largest making 15
 * 
 * Time Complexity: O(n) where n is array length
 * Space Complexity: O(1) - only using a few variables
 */

 export const findMaxSumOfFixedWindow = (numbers, windowSize) => {
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

/**
 * Given an array of integers and a target number
 * Return a minimal length subset of items that totals to that number
 * ex: [2, 3, 1, 2, 4, 3] and 7 -> [4, 3] is the smallest subset
 * Sliding window
 * Fill window until sum is reached
 * slide to right
 * remove items until condition that > target is still maintained
 */
export const minSubArrayLen = (nums, target) => {
  let prevTotal = 0;
  let lowestRunCount = 0;

  // find initial window where subset is >= to target
  for (let i = 0; i < nums.length; i++) {
    prevTotal += nums[i]
    lowestRunCount++;
    if (prevTotal >= target) {
      break
    }
  }

  if (prevTotal < target) {
    return 0;
  }

  // 
  for (let i = 1; i < nums.length; i++) {
    const currentTotal = prevTotal - nums[i - 1]; // remove from the left
    if (currentTotal >= target) { // check condition & update counts if true
      lowestRunCount--;
      prevTotal = currentTotal;
    } else {
      prevTotal = currentTotal + nums[i + lowestRunCount - 1]; // otherwise, add one from the right to reach total
    }
  }

  return lowestRunCount;
}

/**
 * Average of All Subarrays of Size K (Fixed Window)
 * Find the average of every contiguous subarray of size k
 * 
 * Time Complexity: O(n) where n is array length
 * Space Complexity: O(n) for storing results
 */
export const findAveragesOfFixedWindows = (numbers, windowSize) => {
    if (!numbers.length || windowSize > numbers.length || windowSize <= 0) {
        return [];
    }
    
    const averages = [];
    
    // Calculate sum of first window
    let currentWindowSum = 0;
    for (let i = 0; i < windowSize; i++) {
        currentWindowSum += numbers[i];
    }
    
    // Store first average
    averages.push(currentWindowSum / windowSize);
    
    // Slide window and calculate remaining averages
    for (let windowEndIndex = windowSize; windowEndIndex < numbers.length; windowEndIndex++) {
        const elementLeavingWindow = numbers[windowEndIndex - windowSize];
        const elementEnteringWindow = numbers[windowEndIndex];
        
        // Update sum: remove old, add new
        currentWindowSum = currentWindowSum - elementLeavingWindow + elementEnteringWindow;
        
        // Calculate and store average
        averages.push(currentWindowSum / windowSize);
    }
    
    return averages;
}


// ==================== DYNAMIC SLIDING WINDOW ====================

/**
 * Longest Substring Without Repeating Characters (Dynamic Window)
 * Find the length of the longest substring with all unique characters
 * 
 * Time Complexity: O(n) where n is string length
 * Space Complexity: O(min(m,n)) where m is charset size
 */
export const findLongestSubstringWithoutRepeats = (inputString) => {
    if (!inputString.length) {
        return 0;
    }
    
    // Track characters in current window and their positions
    const characterPositions = new Map();
    
    let windowStartIndex = 0;      // Left boundary of sliding window
    let maxLengthFound = 0;        // Longest valid substring length
    
    // Expand window by moving right boundary
    for (let windowEndIndex = 0; windowEndIndex < inputString.length; windowEndIndex++) {
        const currentCharacter = inputString[windowEndIndex];
        
        // If character is already in window, we found a repeat
        if (characterPositions.has(currentCharacter) && 
            characterPositions.get(currentCharacter) >= windowStartIndex) {
            
            // Move window start to just after the repeated character
            windowStartIndex = characterPositions.get(currentCharacter) + 1;
        }
        
        // Update character's position in our tracking map
        characterPositions.set(currentCharacter, windowEndIndex);
        
        // Calculate current window length and update maximum
        const currentWindowLength = windowEndIndex - windowStartIndex + 1;
        maxLengthFound = Math.max(maxLengthFound, currentWindowLength);
    }
    
    return maxLengthFound;
}

/**
 * Maximum Profit from Stock Trading (Dynamic Window - Modified)
 * Buy stock once and sell once for maximum profit
 * 
 * Time Complexity: O(n) where n is number of days
 * Space Complexity: O(1) - only using a few variables
 */
export const findMaxStockProfit = (stockPrices) => {
    if (stockPrices.length < 2) {
        return 0; // Need at least 2 days to buy and sell
    }
    
    let minPriceSoFar = stockPrices[0];  // Lowest price we've seen (best buy point)
    let maxProfitPossible = 0;           // Best profit we can achieve
    
    // Consider each day as a potential sell day
    for (let currentDay = 1; currentDay < stockPrices.length; currentDay++) {
        const todayPrice = stockPrices[currentDay];
        
        // Calculate profit if we sell today (having bought at minimum price)
        const profitIfSellToday = todayPrice - minPriceSoFar;
        
        // Update maximum profit if today's profit is better
        maxProfitPossible = Math.max(maxProfitPossible, profitIfSellToday);
        
        // Update minimum price if today's price is lower (better buy opportunity)
        minPriceSoFar = Math.min(minPriceSoFar, todayPrice);
    }
    
    return maxProfitPossible;
}

/**
 * Longest Subarray with Sum Less Than or Equal to Target (Dynamic Window)
 * Find the longest contiguous subarray where sum ≤ target
 * 
 * Time Complexity: O(n) where n is array length
 * Space Complexity: O(1) - only using a few variables
 */
export const findLongestSubarrayWithSumLimit = (numbers, targetSum) => {
    if (!numbers.length || targetSum < 0) {
        return 0;
    }
    
    let windowStartIndex = 0;       // Left boundary of sliding window
    let currentWindowSum = 0;       // Sum of elements in current window
    let maxLengthFound = 0;         // Length of longest valid subarray
    
    // Expand window by moving right boundary
    for (let windowEndIndex = 0; windowEndIndex < numbers.length; windowEndIndex++) {
        // Add new element to window
        currentWindowSum += numbers[windowEndIndex];
        
        // Shrink window from left while sum exceeds target
        while (currentWindowSum > targetSum && windowStartIndex <= windowEndIndex) {
            currentWindowSum -= numbers[windowStartIndex];
            windowStartIndex++;
        }
        
        // Update maximum length if current window is valid and longer
        const currentWindowLength = windowEndIndex - windowStartIndex + 1;
        maxLengthFound = Math.max(maxLengthFound, currentWindowLength);
    }
    
    return maxLengthFound;
}

/**
 * Minimum Window Substring (Advanced Dynamic Window)
 * Find the smallest substring that contains all characters from target string
 * 
 * Time Complexity: O(n + m) where n is source length, m is target length
 * Space Complexity: O(m) for character frequency maps
 */
export const findMinimumWindowSubstring = (sourceString, targetString) => {
    if (!sourceString.length || !targetString.length || targetString.length > sourceString.length) {
        return "";
    }
    
    // Count frequency of each character in target
    const targetCharCounts = new Map();
    for (const char of targetString) {
        targetCharCounts.set(char, (targetCharCounts.get(char) || 0) + 1);
    }
    
    const totalUniqueCharsNeeded = targetCharCounts.size;
    let uniqueCharsFormed = 0;  // How many unique chars have required frequency
    
    // Track characters in current window
    const windowCharCounts = new Map();
    
    let windowStartIndex = 0;
    let smallestWindowStart = 0;
    let smallestWindowLength = Infinity;
    
    // Expand window with right pointer
    for (let windowEndIndex = 0; windowEndIndex < sourceString.length; windowEndIndex++) {
        const rightChar = sourceString[windowEndIndex];
        
        // Add character to window
        windowCharCounts.set(rightChar, (windowCharCounts.get(rightChar) || 0) + 1);
        
        // Check if this character's frequency matches what we need
        if (targetCharCounts.has(rightChar) && 
            windowCharCounts.get(rightChar) === targetCharCounts.get(rightChar)) {
            uniqueCharsFormed++;
        }
        
        // Try to shrink window from left while it's still valid
        while (uniqueCharsFormed === totalUniqueCharsNeeded && windowStartIndex <= windowEndIndex) {
            const currentWindowLength = windowEndIndex - windowStartIndex + 1;
            
            // Update smallest window if current is smaller
            if (currentWindowLength < smallestWindowLength) {
                smallestWindowLength = currentWindowLength;
                smallestWindowStart = windowStartIndex;
            }
            
            // Remove leftmost character from window
            const leftChar = sourceString[windowStartIndex];
            windowCharCounts.set(leftChar, windowCharCounts.get(leftChar) - 1);
            
            // Check if removing this character breaks our requirement
            if (targetCharCounts.has(leftChar) && 
                windowCharCounts.get(leftChar) < targetCharCounts.get(leftChar)) {
                uniqueCharsFormed--;
            }
            
            windowStartIndex++;
        }
    }
    
    // Return smallest window found, or empty string if none exists
    return smallestWindowLength === Infinity ? "" : 
           sourceString.substring(smallestWindowStart, smallestWindowStart + smallestWindowLength);
}