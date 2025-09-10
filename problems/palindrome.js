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