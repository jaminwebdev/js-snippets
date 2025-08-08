// given an array of integers, return the pair of integers that sum to 0
// if none exist, return false

export const arrayPairsSumZero = (array) => {
    const lookup = {};

    for (let value of array) {
        lookup[value] = true;

        if(value < 0 && lookup[Math.abs(value)]) {
            return [value, Math.abs(value)];
        }
        if(value > 0 && lookup[-value]) {
            return [-value, value];
        }
    }

    return false;
}

const myArray = [-7, -3, -2, -1, 0, 2, 5];

// console.log(arrayPairsSumZero(myArray));

// an alternative
// if array is sorted, we can do a sort of binary evaluation by starting at both ends of the array 
// and moving the pointers towards the middle based on the sum
// if sum of two ends is < 0, move the left pointer towards the end (increment its index)
// if sum of two ends is > 0, move the right pointer towards the beginning (decrement its index)
export const arrayPairsSumZero2 = (array) => {
    let left = 0;
    let right = array.length - 1;
    while(left < right) {
        let sum = array[left] + array[right];
        if(sum === 0) {
            return [array[left], array[right]]
        }
        if(sum < 0) {
            left++;
        } else {
            right--;
        }
    }
}

console.log(arrayPairsSumZero2(myArray));