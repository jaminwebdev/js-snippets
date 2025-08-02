export const twoSum = (nums, target) => {
  const numMap = {}; // Initialize an empty object to act as a hash map

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const complement = target - currentNum;

    // Check if the complement exists in the hash map
    if (complement in numMap) {
      // If found, return the index of the complement and the current index
      return [numMap[complement], i];
    }

    // If the complement is not found, add the current number and its index to the map
    numMap[currentNum] = i;
  }

  // If no solution is found (though the problem usually guarantees one)
  return [];
}