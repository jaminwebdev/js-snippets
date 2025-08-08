

  const fizzBuzz = (num1 = 3, num2 = 5) => {
    for (let i = 1; i <= 100; i++) {
        console.log((i % num1 ? '' : 'fizz') + (i % num2 ? '' : 'buzz') || i)
      }
  }

  fizzBuzz();

  const fizzBuzzNorma = (num1 = 3, num2 = 5) => {
    for (let i = 1; i <= 100; i++) {
      if (i % (num1 * num2) === 0) {
        console.log("fizzbuzz")
      } else if (i % num1 === 0) {
        console.log("fizz")
      } else if (i % num2 === 0) {
        console.log("buzz")
      }
    }
  }