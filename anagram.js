// similar to arraySquareEquivalent snippet
function validAnagram(firstWord, secondWord) {
    if(firstWord.length !== secondWord.length) {
        return false;
    }

    // using graph/hashmap to keep track of letters and frequency
    let lookup = {};

    for(let char of firstWord) {
        lookup[char] ? lookup[char]++ : lookup[char] = 1;
    }

    for (let char of secondWord) {
        if(!lookup[char]) { // doubles as prop check & falsy check if count === 0
            return false;
        }

        lookup[char]--; // if successive values in secondWord are reached but lookup[char] === 0, if check will fail & frequency is off
    }
    
    return true;
}

console.log(validAnagram('racecar', 'carrace'))
console.log(validAnagram('wiwy', 'broomstick'))
console.log(validAnagram('wiwy', 'wiw'))
console.log(validAnagram('wawwoo', 'owowaw'))