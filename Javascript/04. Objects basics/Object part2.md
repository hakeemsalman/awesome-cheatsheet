# 4 Garbage Collection **PENDING**

# 5 Object methods, *this*

- Objects are usually created to represent entities of the real world, like users, orders and so on:

```js
let user = {
  name: "John",
  age: 30
};
```

## 1. Method examples

- A function that is a property of an object is called its **method**.


<table>
<thead>
<td>
Both are correct
</td>
<td>
Both are correct
</td>
<td>
Short hand
</td>
</thead>
<tr>
<td>

```js
let user = {
  name: "John",
  age: 30
};

user.sayHi = function() {
  alert("Hello!");
};

user.sayHi(); // Hello!
```

</td>
<td>

```js
let user = {
  // ...
};

// first, declare
function sayHi() {
  alert("Hello!");
}

// then add as a method
user.sayHi = sayHi;

user.sayHi(); // Hello!
```

</td>
<td>

```js
user = {
  sayHi: function() {
    alert("Hello");
  }
};

// method shorthand looks better, right?
user = {
  sayHi() { // same as "sayHi: function(){...}"
    alert("Hello");
  }
};
```

</td>
</tr>
</table>


## 2. *this* in methods

- To access the object properties, a method can use the `this` keyword.
- Here during the execution of `user.sayHi()`, the value of `this` will be `user`.

```js
let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" is the "current object"
    alert(this.name); // same as user.name
  }

};

user.sayHi(); // John
```

## 3. *this* is not bound

- In JavaScript, keyword `this` behaves unlike most other programming languages.
- It can be used in any function, even if it’s not a method of an object.
- There’s no syntax error in the following example:
- ```js
  function sayHi() {
    alert( this.name );
  }
  ```

> The value of `this` is evaluated during the run-time, depending on the context.

```js
let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)
```


<table>
<tr>
<td>


&gt; Calling without an object: `this == undefined`

- We can even call the function without an object at all:

```js
function sayHi() {
  alert(this);
}

sayHi(); // undefined
```

</td>
</tr>
</table>


## 4. Arrow functions have no “this”

- Arrow functions are special: they don’t have their “own” `this`. If we reference this from such a function, it’s taken from the outer “normal” function.

For instance, here `arrow()` uses `this` from the outer `user.sayHi()` method:
```js
let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // Ilya
```


## Summary

- Functions that are stored in object properties are called “methods”.
- Methods allow objects to “act” like `object.doSomething()`.
- Methods can reference the object as `this`.

The value of `this` is defined at run-time.

- When a function is declared, it may use `this`, but that `this` has no value until the function is called.
- A function can be copied between objects.
- When a function is called in the “method” syntax: `object.method()`, the value of `this` during the call is `object`.


Please note that arrow functions are special: they have no this. When this is accessed inside an arrow function, it is taken from outside.

## Task

### *this* in object literal

[https://javascript.info/object-methods#tasks](https://javascript.info/object-methods#tasks)

### 1. Create a calculator

`importance: 5`

Create an object calculator with three methods:

- `read()` prompts for two values and saves them as object properties with names a and b respectively.
- `sum()` returns the sum of saved values.
- `mul()` multiplies saved values and returns the result.
```js
let calculator = {
  // ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
```

<details>
<summary>Solution</summary>

```js
let calculator = {
    a: 0,
    b: 0,
    read(){
        this.a = prompt('Please one number:',0);
        this.b = prompt('Please another number',0);
    },
    sum(){
        return Number(this.a) + Number(this.b);
    },
    mul(){
        return this.a * this.b;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
```
</details>

### 2. Chaining

`importance: 2`

- There’s a ladder object that allows you to go up and down:

```js
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};

// Now, if we need to make several calls in sequence, we can do it like this:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
```

- Modify the code of up, down, and showStep to make the calls chainable, like this:

```js
ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
```
<details>
<summary>Solution</summary>

```js
let ladder = {
  step: 0,
  up() {
    this.step++;
      return this;
  },
  down() {
    this.step--;
      return this;
  },
  showStep() { // shows the current step
    alert( this.step );
      return this;
  }
};

ladder.up().up().down().showStep().down().showStep();
```

</details>


# 6. Constructor, operator *new*


## 1. Constructor function

- Constructor functions technically are regular functions. There are two conventions though:
  - They are named with capital letter first.
  - They should be executed only with `new` operator.

For instance:

```js
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false
```

<table>
<tr>
<td>


- When a function is executed with new, it does the following steps:
  - A new empty object is created and assigned to `this`.
  - The function body executes. Usually it modifies `this`, adds new properties to it.
  - The value of `this` is returned.
- That’s the main purpose of **constructors** – to *implement reusable object* creation code.

</td>
<td>

```js
function User(name) {
  // this = {};  (implicitly)

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  // return this;  (implicitly)
}
```

</tr>
</table>



<table>
<tr>
<td>

#### new function() { … }

- If we have many lines of code all about creation of a single complex object, we can wrap them in an immediately called constructor function, like this:

```js
// create a function and immediately call it with new
let user = new function() {
  // this = {}  (implicit)

  this.name = "John";
  this.isAdmin = false;

          // ...other code for user creation
          // maybe complex logic and statements
          // local variables etc

  // return this; (implicit)
};
```

- This constructor can’t be called again, because it is not saved anywhere, just created and called.
- So this trick aims to encapsulate the code that constructs the single object, without future reuse.

</tr>
</table>


## 2. Constructor mode test: new.target

> It checks `function` is called with `new` keyword or **without** it.
> Probably not a good thing to use everywhere though, because omitting new makes it a bit less obvious what’s going on.
> With new we all know that the new object is being created.

```js
function User(name) {
  if (!new.target) { // if you run me without new
    return new User(name); // ...I will add new for you
  }

  this.name = name;
}

let john = User("John"); // redirects call to new User
alert(john.name); // John
```