const shuffle = array => {
    let oldElement;
    for (let index = array.length - 1; index > 0; index--) {
      let randomIndex = Math.floor(Math.random() * (index + 1));
      // swap
      oldElement = array[index];
      array[index] = array[randomIndex];
      array[randomIndex] = oldElement;
    }
    return array;
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(shuffle(myArray));