// we can subscribe certain objects (observers) to another objects (observables)
// An observable contains 4 important parts
//  * Observers: an array of observers that will get notified when specific events occur
//  * subscribe(): a method to add observers to the list of observers
//  * unsubscribe(): a method to remove observers from the observer list
//  * notify(): a method to notify all observers when a specific event occurs

// simple example
class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(func) {
        this.observers.push(func);
    }

    unsubscribe(func) {
        this.observers = this.observers.filter(observer => observer !== func);
    }

    notify(data) {
        this.observers.forEach(observer => observer(data));
    }
}
const observable = new Observable();

// to subscribe functions:
const logger = (data) => {
    console.log(`${Date.now()} ${data}`);
}

const toastify = (data) => {
    toast(data);
}

observable.subscribe(logger);
observable.subscribe(toastify);

// calling notify will call each of these functions, passing in the appropriate data:
// in this example, let's say we have click events assigned to a button and switch component
export const App = () => {
    function handleClick() {
        observable.notify("User clicked button!");
    }

    function handleToggle() {
        observable.notify("User toggled switch!");
    }
    return // ...JSX
}  
// each function will respectively notify the logger and the toastify observers
