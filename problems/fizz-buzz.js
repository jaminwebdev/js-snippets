// classic fizzbuzz 
export const fizzBuzz = (num1 = 3, num2 = 5, limit = 100) => {
  const result = [];
  for (let i = 1; i <= limit; i++) {
      result.push((i % num1 ? '' : 'fizz') + (i % num2 ? '' : 'buzz') || i);
    }
  return result;
}

export const fizzBuzzNormal = (num1 = 3, num2 = 5, limit = 100) => {
  const result = [];
  for (let i = 1; i <= limit; i++) {
    if (i % (num1 * num2) === 0) {
      result.push("fizzbuzz");
    } else if (i % num1 === 0) {
      result.push("fizz");
    } else if (i % num2 === 0) {
      result.push("buzz");
    } else {
      result.push(i);
    }
  }
  return result;
}
