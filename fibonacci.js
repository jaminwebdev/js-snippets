// O(2^n) - terrible
const fibonacciRecursive = (number) => {
    if(number < 2) {
        return number;
    }

    return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);
}

// O(n)
const fibonacciRecursiveCached = () => {
    let cache = {};

    const fib = (number) => {
        if(cache[number]) return cache[number]

        if(number < 2) return number; 

        return cache[number] = fib(number - 1) + fib(number - 2);
    }

    return fib;
}

// O(n) - tabulated
const fibonacciIterative = (number) => {
    let arr = [0, 1];
    for(i = 2; i <= number; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
    }
    return arr[number];
}

// O(n)
const fibonacciIterativeReduce = (number) => {
    return  [...Array(number + 1)].reduce( (acc, _, index) => {
        acc.push(index > 1 ? acc[index - 1] + acc[index - 2] : index);
        return acc;
    },[])[number]
}

//
console.time('fibRecursive');
console.log(fibonacciRecursive(30));
console.timeEnd('fibRecursive');

console.time('fibRecursiveCached');
console.log(fibonacciRecursiveCached()(30));
console.timeEnd('fibRecursiveCached');

console.time('fibIterative');
console.log(fibonacciIterative(30));
console.timeEnd('fibIterative');1

console.time('fibIterativeReduce');
console.log(fibonacciIterativeReduce(30));
console.timeEnd('fibIterativeReduce');