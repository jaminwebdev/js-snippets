function quickSort(arr) {
    if (arr.length <= 1) return arr
    
    const pivot = arr.pop()
    const leftArr = [], rightArr = [];

    for (const item of arr) {
        if (item < pivot) {
            leftArr.push(item)
            continue
        } 
        rightArr.push(item)
    }
    
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  }
  
  // Example usage:
  const arr = [5, 2, 9, 1, 7, 6, 4, 3, 8];
  const sortedArr = quickSort(arr);
  console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
  