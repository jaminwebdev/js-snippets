// write a flatten function for an array
export const flatten = array => {
    return array.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, [])
}

const myArray = [1, [2, 3], [4, [5,6]]];

console.log(flatten(myArray));