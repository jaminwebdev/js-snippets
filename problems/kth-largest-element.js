// given an array
// find the kth largest element

const myArray = [2, 4, 10, 4, 5, 20, 12, 3];

// 2, 3, 4, 4, 5, 10, 12, 20
// 3rd largest is 10

// O(n)
const kthLargestIterative = (arr, k) => {
    const arrCopy = [...arr]
    let times = k - 1;
    while (times > 0) {
        let max = Math.max(...arrCopy);
        let maxIndex = arrCopy.indexOf(max)
        arrCopy.splice(maxIndex, 1)
        times--;
    }
    return Math.max(...arrCopy)
}

console.log(kthLargestIterative(myArray, 3))

// O(nlogn) assuming sorting function is O(nlogn)
const kthLargestSort = (arr, k) => {
    const sortedArray = [...arr.sort((a,b) => a - b)];
    return sortedArray[sortedArray.length - k]
}

console.log(kthLargestSort(myArray, 3))