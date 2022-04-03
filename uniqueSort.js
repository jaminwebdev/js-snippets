// write a function that accepts an array
// and returns an array with unique sorted values

const myArray = [2, 4, 1, 3, 2, 3, 5, 2, 1];

const uniqSort = (arr) => {

    let breadcrumbs = {};

    let uniques = arr.filter(element => {
        if(!breadcrumbs[element]) {
            breadcrumbs[element] = true;
            return element;
        }
    })

    return uniques.sort( (a, b) => a - b );
}

console.log(`Unique sort with filter - [ ${uniqSort(myArray)} ]`);

const uniqSortSet = (arr) => {
    const uniques = [...new Set([arr])];

    return uniques.sort( (a, b) => a - b);

}

console.log(`Unique sort with set - [ ${uniqSortSet(myArray)} ]`);
