// write a function that accepts a number and returns whether it's an integer or not
export const isInt = (num) => num % 1 === 0;
  
  console.log(isInt(4)); // true
  console.log(isInt(12.2)); // false
  console.log(isInt(0.3)); // false