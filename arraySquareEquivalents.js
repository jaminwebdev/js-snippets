// similar to anagram snippet

// Given 2 arrays containing integers 
// write a function that will return true/fast depeneding on if the square of each item in the first array
// exists in the second array, and with the same frequency
function arraySquareEquivalents(arr1, arr2) {
    if(arr1.length !== arr2.length) {
      return false;
    }
    
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    
    arr1.forEach( (val) => {
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
      // frequencyCounter1[val] ? frequencyCounter1[val]++ : frequencyCounter1[val] = 1;
    })
    
      arr2.forEach( (val) => {
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    })
    
    for(let key in frequencyCounter1) {
      if( !frequencyCounter2[key ** 2]) {
        return false;
      }
      if(frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
        return false;
      }
    }


    
    return true;
  }
  
  const array1=[1,2,4, 4];
  const array2=[1,4,16, 16];
  
  // console.log(arraySquareEquivalents(array1, array2))

  //alternative is to use a single dictionary/hashmap like in the anagram snippet
  function arraySquareEquivalents2(arr1, arr2) {
    if(arr1.length !== arr2.length) {
      return false;
    }
    
    let firstArraySquares = {};
    
    arr1.forEach( (val) => {
      firstArraySquares[val ** 2] = (firstArraySquares[val ** 2] || 0) + 1;
    })
    
    for(let number of arr2) {
      if(!firstArraySquares[number]) { // doubles as property existence & falsy check if count === 0
        return false;
      }
      firstArraySquares[number]--; // if successive values in arr2 are reached but firstArraySquares[number] === 0, if check will fail & frequency is off
    }
    
    return true;
  }

  const firstArray=[1, 2, 4, 6, 4];
    
  const secondArray=[1, 16, 4, 16, 16];
  
  console.log(arraySquareEquivalents2(firstArray, secondArray))
