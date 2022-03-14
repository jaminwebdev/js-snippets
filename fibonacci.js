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
        if(number in cache) {
            return cache[number]
        }

        if(number < 2) {
            return number;
        } else {
            cache[number] = fib(number - 1) + fib(number - 2);
            return cache[number];
        }
    }
    return fib;
}

// O(n)
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
console.log(fibonacciRecursive(20));
console.timeEnd('fibRecursive');

console.time('fibRecursiveCached');
console.log(fibonacciRecursiveCached()(20));
console.timeEnd('fibRecursiveCached');

console.time('fibIterative');
console.log(fibonacciIterative(20));
console.timeEnd('fibIterative');

console.time('fibIterativeReduce');
console.log(fibonacciIterativeReduce(20));
console.timeEnd('fibIterativeReduce');