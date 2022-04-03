// generic memoization for simple use cases
const memoize = (cb) => {
    let cache = {};

    return (item) => {
        if(cache[item]) {
            console.log('getting from cache')
            return cache[item]
        }

        console.log('not in cache - calculating');
        let result = cb(item);
        cache[item] = result;
        return result;
    }
}

const timesTen = memoize((number) => {
    return number * 10;
})

console.time('first');
console.log(timesTen(10));
console.timeEnd('first'); // 3.987ms

console.time('second');
console.log(timesTen(10));
console.timeEnd('second'); // 0.051ms




