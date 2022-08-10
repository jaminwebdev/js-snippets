//Singletons are classes which can be instantiated once, and can be accessed globally. 
//This single instance can be shared throughout our application, which makes Singletons great 
//for managing global state in an application.

// using IIFE's & closure ----
const UserStore = ( () => {
    const _data = [];

    const add = (item) => {
        _data.push(item);
    }

    const get = (id) => {
        return _data.find((d) => {
        return d.id === id;
        });
    }

    return {
        add,
        get
    };
})();

export const singletonUserStore = Object.freeze(UserStore);
// thanks to closure & this IIFE, we immediately execute and therefore have one instance
// of the returned object in a very module pattern-esque fashion
// this isn't immutable, though. The exposed object can be modified, breaking things
// ----

// using Object.freeze ----
const _data = [];

const UserStoreLiteral = {
  add: item => _data.push(item),
  get: id => _data.find(d => d.id === id)
}

export const SingletonUserStoreLiteral = Object.freeze(UserStoreLiteral);
// like previous example, store can't be modified because of const
// unlike previous example, the store's methods can't be modified because of
// Object.freeze, and nor can things be added
// ----

// class example ----
class ClassBasedUserStore {
    constructor(){
        this._data = [];
    }

    add(item){
        this._data.push(item);
    }

    get(id){
        return this._data.find(d => d.id === id);
    }
}
  
export const frozenClassBasedStore = Object.freeze(new ClassBasedUserStore());
// using Object.freeze again in conjuction with a preexisting instance
// exporting that frozen instance


// older class example ----
class ClassicUserStore {
    constructor(){
        if(! UserStore.instance){
            this._data = [];
            UserStore.instance = this;
        }

        return UserStore.instance;
    }

    add(item){
        this._data.push(item);
    }

    get(id){
        return this._data.find(d => d.id === id);
    }

}
  
export const classicFrozenInstance = Object.freeze(new ClassicUserStore());
// the constructor is responsible for checking whether an instance exists
// if so, simply return the instance for the consumer of 'new'
// if not, set the default state and assign the class to the .instance property
// again freezing an instance before exporting
// this could also be lifted to a local variable - outside of the class itself

let localInstance;

class AnotherClassicUserStore {
    constructor() {
        if (!localInstance) {
            this._data = [];
            localInstance = this;
        }
        return localInstance;
    }
    //...
}
//  ----