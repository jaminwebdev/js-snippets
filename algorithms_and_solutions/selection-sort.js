const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

// iterate through the array, setting the first iteration as the smallest item
// on sub-iteration, start at i + 1
// if you come across something smaller, that's now the INDEX of the smallest item
// after you've fully iterated, compare the current minimum's INDEX to the curren iteration's INDEX
// if they're not equal, swap
// big O(n^2)

const selectionSort = (arr) => { 
    let arrayLength = arr.length;
        
    for(let i = 0; i < arrayLength; i++) {
        // Min is always set to firsrt item in iteration
        let minIndex = i;
        // sub-iteration starting at i + 1
        for(let j = i + 1; j < arrayLength; j++){
            // if smaller, new min's index
            if(arr[j] < arr[minIndex]) {
                minIndex = j; 
            }
         }
         // if index of min doesn't match current iteration, swap
         if (minIndex != i) {
             swap(arr, i, minIndex);    
        }
    }
    return arr;
}
// big O(n^2)


const unorderedArray = [23, 1, 54, 3, 32, 6, 9, 15, 23];

console.log(selectionSort(unorderedArray));