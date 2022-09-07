// the module pattern is perhaps the most important patterns in JS
// in general - it keeps portions of your application isolated from others, controlling public APIs
// link: https://www.patterns.dev/posts/classic-design-patterns/#modulepatternjavascript

// Classic Module Pattern - supported by IIFEs ----
const MyModule = (() => {
    let myArray = ['Joe', 'Amber', 'Stephen'];

    const _pushToArray = (item) => [...myArray, item];

    const _getArray = () => [...myArray];

    return {
        _pushToArray,
        _getArray
    }
})();

MyModule._getArray();
MyModule._pushToArray('Matthew');

// Thanks to closure, we can pick/choose what variables/methods are public or private
// ----

// Composition ----
// The module pattern is also important for other OOP creation patterns
// such as traditional composition via a factory function
// with help of (pure) helper functions

const barker = state => ({
    bark: () => console.log(`Bark, my name is ${state.name}`)
})

const biter = state => ({
    bite: () => console.log(`I just bit you, for I am ${state.name}`)
})

const dog = (name) => {
    const state = {
        name,
        legs: 4,
        ears: 2
    }

    return Object.assign({},
        barker(state),
        biter(state)
    )
}

const ralph = dog('Ralph')
ralph.bark(); // Bark, my name is Ralph
ralph.bite(); // I just bit you, for I am Ralph

// more can be seen at ./pattern-objectComposition.js

// Modern Modules ----
// modern bundlers allow us to create private variables/methods within a file and only export
// whatever it is we want public

const privateStuff = {
    name: 'John Doe', 
    age: 26, 
    occupation: 'Dentist'
}

export const getUserName = () => privateStuff.name
export const getUserAge = () => privateStuff.age
export const changeUserOccupation = (occupation) => privateStuff.occupation = occupation

// and elsewhere import { getUserName, getUserAge, changeUserOccupation } from ./file
// or import * as userStuff from ./file --> userStuff.getUserName
// or import { getUserName as getName } if there are local naming collisions
