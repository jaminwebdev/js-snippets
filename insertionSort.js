const insertionSort = (arr) => {
    let arrLength = arr.length;
        for (let i = 1; i < arrLength; i++) {
            // Choosing the first element in our unsorted subarray
            let current = arr[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < arr[j])) {
                arr[j+1] = arr[j];
                j--;
                console.log(arr);
            }
            arr[j+1] = current;
        }
    return arr;
}
// big O(n^2)


const unorderedArray = [23, 1, 54, 3, 32, 6, 9, 15, 23];
//                      j   current
//                          23
//                      1
//                      [1, 23, 54, 3]
// in the while loop, if the current value is smaller than its predecessor, the predecessor is put in its place
// the while loop 'walks' the smaller value down 
// after either condition fails (current isn't smaller or j isn't greater than -1) the loop is terminated
// wherever j landed in that iteration, the current value is then placed to its right

console.log(insertionSort(unorderedArray));
// insertionSort(unorderedArray);