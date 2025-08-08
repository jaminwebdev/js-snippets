// write a function that accepts an array and a target number
// it should return the two numbers and their indices
// if not, return an empty array

export const twoSum = (nums, target) => {
  const numMap = {}; // Initialize an empty object to act as a hash map

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const complement = target - currentNum;

    // Check if the complement exists in the hash map
    if (complement in numMap) {
      // If found, return the index of the complement and the current index
      return [[complement, numMap[complement]], [currentNum, i]];
    }

    // If the complement is not found, add the current number and its index to the map
    numMap[currentNum] = i;
  }

  // If no solution is found (though the problem usually guarantees one)
  return [];
}

const sampleArray = [1, 4, 6, 6, 8, 12, 4];
console.log(twoSum(sampleArray, 8))