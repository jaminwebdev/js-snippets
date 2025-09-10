// given an array
// find the kth largest element
// 2, 3, 4, 4, 5, 10, 12, 20
// 3rd largest is 10

// O(nlogn) assuming sorting function is O(nlogn)
export const kthLargestSort = (arr, k) => {
    const sortedArray = [...arr.sort((a,b) => b - a)];
    return sortedArray[k - 1]
}