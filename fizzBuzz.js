

  const fizzBuzz = (num1 = 3, num2 = 5) => {
    for (let i = 1; i <= 100; i++) {
        console.log((i++ % num1 ? '' : 'fizz') + (i % num2 ? '' : 'buzz') || i)
      }
  }

  fizzBuzz();