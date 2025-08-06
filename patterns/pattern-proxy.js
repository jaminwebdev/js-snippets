// https://www.patterns.dev/posts/proxy-pattern/
// a proxy object allows us to add extra functionality when accessing an underlying object
// Instead of working with said object directly, we interact with the proxy
// this keeps the underyling object's original logic is unchanged
// thereby reducing the chance to break its base/core logic in the future
// proxies can help with validation, formatting, notifications, or debugging

// extra functionality example ----
const person = {
    firstName: 'Lena',
    lastName: 'Smith',
  };
  
// use proxy add logic on person
const personProxy = new Proxy(person, {
    get: (target, prop) => {
        if(prop === 'fullName') {
            return `${target.firstName} ${target.lastName}`;
        }
            return target[prop];
    },
});
  
personProxy.fullName; // "Lena Smith"
// this arbitrary example isn't much different from basic inheritance functionally

// private properties and/or validation
const person2 = {
    firstName: 'Lena',
    lastName: 'Smith',
    _age: 26, // Yes, the age is secret, right? :)
};

const person2Proxy = new Proxy(person, {
    get: (target, prop) => {
        if(prop[0] === '_') {
            return undefined;
        }
            return target[prop];
    },
});

person2Proxy._age; // undefined
// this logic can assist with any similar logic of gating property access
// with either getting or setting
// equivalent to privacy as well as validation

const person3Proxy = new Proxy(person2, {
    get: (obj, prop) => {
        console.log(`The value of ${prop} is ${obj[prop]}`);
    },
    set: (obj, prop, value) => {
        console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
        obj[prop] = value;
    }
});

// setting and getting can be made easier via Reflect
const person4Proxy = new Proxy(person2, {
    get: (obj, prop) => {
        console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`); //Reflect.get
    },
    set: (obj, prop, value) => {
        console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
        Reflect.set(obj, prop, value); // Reflect.set
    }
});
// Reflect has the same signature as the handler passed to the Proxy constructor
