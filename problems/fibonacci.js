// O(2^n) - terrible
export const fibonacciRecursive = (number) => {
    if(number < 2) {
        return number;
    }

    return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);
}

// O(n)
export const fibonacciRecursiveCached = () => {
    let cache = {};

    const fib = (number) => {
        if(cache[number]) return cache[number]

        if(number < 2) return number; 

        return cache[number] = fib(number - 1) + fib(number - 2);
    }

    return fib;
}

// O(n) - tabulated
export const fibonacciIterative = (number) => {
    let arr = [0, 1];
    for(let i = 2; i <= number; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
    }
    return arr[number];
}

// O(n)
export const fibonacciIterativeReduce = (number) => {
    return  [...Array(number + 1)].reduce( (acc, _, index) => {
        acc.push(index > 1 ? acc[index - 1] + acc[index - 2] : index);
        return acc;
    },[])[number]
}
