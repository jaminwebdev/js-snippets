// Given 2 arrays containing integers 
// write a function that will return true/false depending on if the square of each item in the first array
// exists in the second array, and with the same frequency
export function arraySquareEquivalents(arr1, arr2) {
    if(arr1.length !== arr2.length) {
      return false;
    }
    
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    
    arr1.forEach( val => {
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
      // frequencyCounter1[val] ? frequencyCounter1[val]++ : frequencyCounter1[val] = 1;
    })
    
    arr2.forEach( val => {
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
  

//alternative is to use a single dictionary/hashmap like in the anagram snippet
export function arraySquareEquivalents2(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  
  let firstArraySquares = {};
  
  arr1.forEach( val => {
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

