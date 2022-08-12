// A mixin is an object that we can use in order to add reusable functionality 
// to another object or class, without using inheritance
// their sole purpose is to add functionality

// basic mixin example
// a bare class
class Dog {
    constructor(name) {
        this.name = name;
    }
}
// functionality
const dogFunctionality = {
    bark: () => console.log("Woof!"),
    wagTail: () => console.log("Wagging my tail!"),
    play: () => console.log("Playing!")
};

Object.assign(Dog.prototype, dogFunctionality);

// mixins themselves can use inheritance
const animalFunctionality = {
    walk: () => console.log("Walking!"),
    sleep: () => console.log("Sleeping!")
};

const dogFunctionality2 = {
    bark: () => console.log("Woof!"),
    wagTail: () => console.log("Wagging my tail!"),
    play: () => console.log("Playing!"),
    walk() {
        super.walk(); //super
    },
    sleep() {
        super.sleep(); //super
    }
};

Object.assign(dogFunctionality2, animalFunctionality);
Object.assign(Dog.prototype, dogFunctionality);

// event mixin
let eventMixin = {
    /**
     * Subscribe to event, usage:
     *  menu.on('select', function(item) { ... }
    */
    on(eventName, handler) {
        if (!this._eventHandlers) this._eventHandlers = {};
        if (!this._eventHandlers[eventName]) {
        this._eventHandlers[eventName] = [];
        }
        this._eventHandlers[eventName].push(handler);
    },

    /**
     * Cancel the subscription, usage:
     *  menu.off('select', handler)
     */
    off(eventName, handler) {
        let handlers = this._eventHandlers?.[eventName];
        if (!handlers) return;
        for (let i = 0; i < handlers.length; i++) {
        if (handlers[i] === handler) {
            handlers.splice(i--, 1);
        }
        }
    },

    /**
     * Generate an event with the given name and data
     *  this.trigger('select', data1, data2);
     */
    trigger(eventName, ...args) {
        if (!this._eventHandlers?.[eventName]) {
        return; // no handlers for that event name
        }

        // call the handlers
        this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
    }
};

// Make a class
class Menu {
    choose(value) {
        this.trigger("select", value);
    }
}
// Add the mixin with event-related methods
Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();

// add a handler, to be called on selection:
menu.on("select", value => alert(`Value selected: ${value}`));

// triggers the event => the handler above runs and shows:
// Value selected: 123
menu.choose("123");

// functional mixins: https://medium.com/javascript-scene/functional-mixins-composing-software-ffb66d5e731c