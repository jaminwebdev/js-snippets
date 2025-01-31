// similar to arraySquareEquivalent snippet
export const validAnagram = (firstWord, secondWord) => {
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

export const sortAnagram = (firstWord, secondWord) => {
    // For case insensitivity, change both words to lowercase.
    var a = firstWord.toLowerCase();
    var b = secondWord.toLowerCase();

    // Sort the strings, and join the resulting array to a string. Compare the results
    a = a.split("").sort().join("");
    b = b.split("").sort().join("");

    return a === b;
}
