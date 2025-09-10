// given an array
// find the kth largest element
// 2, 3, 4, 4, 5, 10, 12, 20
// 3rd largest is 10

// O(nlogn) assuming sorting function is O(nlogn)
const kthLargestSort = (arr, k) => {
    const sortedArray = [...arr.sort((a,b) => a - b)];
    return sortedArray[sortedArray.length - k]
}

console.log(kthLargestSort(myArray, 3))