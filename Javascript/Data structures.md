# Data structures in Javascript

> 

# Stack

- **Definition:** Array follows the stack approach, which is LIFO method.

1. **push**: Add value at the top of the stack
1. **pop**: Delete value from the top of the stack and return it.
1. **size**: Get length of the stack
1. **peek**: Get top value from the stack.


```js
let Stack = function (){
  this.storage = {};
  this.count = 0;

  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
    // return this.storage;
  }

  this.pop = function(value){
    if(this.count === 0) return undefined;

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count]
    return result;
  }

  this.size = function(){
    return this.count;
  }

  this.peek = function(){
    return this.storage[this.count-1];
  }
}

let myStack = new Stack();

myStack.push(1)
myStack.push(2)
myStack.push(3)
console.log(myStack.size());
console.log(myStack.pop());
console.log(myStack.peek());
```

# Sets

- `Set` is similar to an `Array` excepts having duplicate items in it.
- ES6 has built-in option for the `Set`.
- Built-in methods in `Sets`
  1. **add()**
  2. **delete()**
  3. **size**

```js
function mySet(){
  // a collection will hold the set
  let collection = [];

  this.has = function(element){
    return (collection.indexOf(element) !== -1)
  }

  this.values = function(){
    return collection;
  }

  this.add = function(element){
    if(!this.has(element)){
      collection.push(element);
      return true;
    }
    return false;
  }

  this.remove = function(element){
    if(this.has(element)){
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  }

  this.size = function() {
    return collection.length;
  }

  this.union = function(otherSet){
    var unionSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach(function(e){
      unionSet.add(e);
    })
    secondSet.forEach(function(e){
      unionSet.add(e);
    })
    return unionSet;
  }

  this.intersection = function(){
    
  }
  
}
```