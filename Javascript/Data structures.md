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
  // this method will return the intersection of two sets as a new set
  this.intersection = function (otherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };
  // this method will return the difference of two sets as a new set
  this.difference = function (otherSet) {
    var differenceSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };
  // this method will test if the set is a subset of a different set
  this.subset = function (otherSet) {
    var firstSet = this.values();
    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
}
var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

var setC = new Set();
var setD = new Set();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");
console.log(setD.values());
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("d"));
```