# Optional chaining '?.'

- The optional chaining ?. is a safe way to access nested object properties, even if an intermediate property doesn’t exist.

## Optional chaining 

- The optional chaining `?.` stops the evaluation if the value before `?.` is `undefined` or `null` and returns undefined.
- In other words, `value?.prop`:
  - works as `value.prop`, if `value` exists,
  - otherwise (when `value` is `undefined/null`) it returns `undefined`.

> The `?.` checks the **left part** for `null`/`undefined` and allows the evaluation to proceed if it’s not so.
```js
let user = {}; // user has no address

console.log(user.address.street) // Error Cannot read properties of undefined (reading 'street')

console.log( user.address?.street ); // undefined (no error)
```

<table style="width: 700px">
<tr>
<td>

&#9888; **Don’t overuse the optional chaining**

- We should use `?.` only where it’s ok that something doesn’t exist.
- For example, if according to our code logic `user` object must exist, but `address` is optional, then we should write `user.address?.street`, but not `user?.address?.street`.
- Then, if `user` happens to be undefined, we’ll see a programming error about it and fix it. Otherwise, if we overuse `?.`, coding errors can be silenced where not appropriate, and become more difficult to debug.

</td>
</tr>
<tr>
<td>

&#9888; **The variable before ?. must be declared**

- If there’s no variable user at all, then `user?.anything` triggers an error:

```js
// ReferenceError: user is not defined
let result = user?.address;
```

- The variable must be declared (e.g. `let`/`const`/`var` `user` or as a `function` parameter). The optional chaining works only for **declared** variables.

</td>
</tr>
<tr>
<td>

&#9888; **We can use `?.` for safe reading and deleting, but not writing**

- The optional chaining `?.` has no use on the left side of an assignment.

```js
let user = null;

user?.name = "John"; // Error, doesn't work
// because it evaluates to: undefined = "John"
```
</td>
</tr>

</table>

### Other variants: ?.() , ?.[]

- The optional chaining `?.` is not an operator, but a **special** syntax construct, that also works with **functions** and **square brackets**.

1. The `?.()` checks the left part: if the `admin` function exists, then it runs (that’s so for `userAdmin`). Otherwise (for `userGuest`) the evaluation stops without errors.
   1. ```js
      let userAdmin = {
        admin() {
          alert("I am admin");
        }
      };

      let userGuest = {};

      userAdmin.admin?.(); // I am admin

      userGuest.admin?.(); // nothing happens (no such method)
      ```
2. The `?.[]` syntax also works, if we’d like to use brackets `[]` to access properties instead of dot `.`. Similar to previous cases, it allows to safely read a property from an object that may not exist.
   1. ```js
      let key = "firstName";

      let user1 = {
        firstName: "John"
      };

      let user2 = null;

      alert( user1?.[key] ); // John
      alert( user2?.[key] ); // undefined
      ```

### Summary

- The optional chaining `?.` syntax has three forms:
  1. `obj?.prop` – returns `obj.prop` if `obj` exists, otherwise `undefined`.
  2. `obj?.[prop]` – returns `obj[prop]` if `obj` exists, otherwise `undefined`.
  3. `obj.method?.()` – calls `obj.method()` if `obj.method` exists, otherwise returns `undefined`.

# Symbols

- Two primitive types may serve as object property keys:
  - String type, or 
    - `obj[1]` is the same as `obj["1"]`, and `obj[true]` is the same as `obj["true]`.
  - Symbol type.

- `Symbol` is a primitive type for unique identifiers.
- Symbols are created with `Symbol()` call with an optional description (name).
- Symbols are always different values, even if they have the same name. If we want same-named symbols to be equal, then we should use the global registry: `Symbol.for(key)` returns (creates if needed) a global symbol with `key` as the name. Multiple calls of `Symbol.for` with the same `key` return exactly the same symbol.
- Symbols have two main use cases:
- ```js
  let id = Symbol("id");
  let id2 = Symbol("id");

  alert(id1 == id2); // false

  // Assign value with Symbol variable
  user[id] = "Their id value";

  // Symbols in an object literal
  let user = {
    name: "John",
    [id]: 123 // not "id": 123
  };
  ```

<table style="width: 600px;" align="center">
<tr>
<td>


&#9888; Symbols don’t auto-convert to a string

- Most values in JavaScript support implicit conversion to a string. For instance, we can `alert` almost any value, and it will work. Symbols are special. They don’t auto-convert.

```js
let id = Symbol("id");
alert(id); // TypeError: Cannot convert a Symbol value to a string

let id = Symbol("id");
alert(id.toString()); // Symbol(id), now it works
alert(id.description); // id

```

</td>
</tr>
</table>

### Overwritten traditional ID

```js
let user = { name: "John" };

// Our script uses "id" property
user.id = "Our id value";

// ...Another script also wants "id" for its purposes...

user.id = "Their id value"
// Boom! overwritten by another script!


let id = Symbol("id");
user[id] = "Their id value";
user[id] = 'another value';
user; // {name: 'salman', Symbol(id): 'Their id value', Symbol(id): 'another value'}
```



  - **Hidden** object properties.
    - If we want to add a property into an object that **belongs** to another script or a library, we can create a symbol and use it as a property key.
    - A symbolic property does not appear in `for..in`, so it won’t be accidentally processed together with other properties.
      - `Object.keys(user)` also ignores them. That’s a part of the general **hiding symbolic properties** principle.
      - If another script or a library loops over our object, it won’t unexpectedly access a symbolic property.
      - In contrast, `Object.assign` copies both string and symbol properties:
        - ```js
          let id = Symbol("id");
          let user = {
            [id]: 123
          };

          let clone = Object.assign({}, user);

          alert( clone[id] ); // 123
          ```
    - Also it won’t be accessed directly, because another script does not have our symbol. So the property will be protected from accidental use or overwrite.
    - So we can **covertly** hide something into objects that we need, but others should not see, using symbolic properties.
  
### Global symbols

```js
// read from the global registry
let id = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");

// the same symbol
alert( id === idAgain ); // true


// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id
```
  - There are many system symbols used by JavaScript which are accessible as `Symbol.*`. We can use them to alter some built-in behaviors.
  - For instance, later in the tutorial we’ll use `Symbol.iterator` for iterables, `Symbol.toPrimitive` to setup object-to-primitive conversion and so on.
  - They are listed in the specification in the [well-known-symbols](https://tc39.github.io/ecma262/#sec-well-known-symbols) table

- Technically, symbols are not 100% hidden. There is a built-in method `Object.getOwnPropertySymbols(obj)` that allows us to get all symbols. Also there is a method named `Reflect.ownKeys(obj)` that returns all keys of an object including symbolic ones. But most libraries, built-in functions and syntax constructs don’t use these methods.


# Object to primitive conversion

- JavaScript doesn’t allow you to customize how operators work on objects.
- We have two purposes:
  - It will allow us to understand what’s going on in case of coding mistakes, when such an operation happened accidentally.
  - There are exceptions, where such operations are possible and look good. E.g. subtracting or comparing dates `(Date objects)`.
- ```js
  let user = {
      age: 2,
  }

  let person = {
      age: 12,
  }

  const date1 = new Date();
  let date2; 
  setTimeout(() => {
      date2  = new Date();
  }, "2000");

  setTimeout(() => {
      console.log('date1 type==>',typeof date1,'\ndate2 type==>',typeof date2);
      /*
      date1 type==> object 
      date2 type==> object
      */
      console.log(date2 - date1); // 2002ms - math operation performed on Objects
  }, "3000");
  console.log(user - person); // NaN - cannot perform math operations
  ```

## Conversion rules

- In the chapter [Type conversion](../01.%20Basics/README.md#7-type-conversions) we’ve seen the rules for **numeric**, **string** and **boolean** conversions of primitives. But we left a gap for objects. Now, as we know about methods and symbols it becomes possible to fill it.

- All objects are `true` in **boolean** context. So there exist only numeric and string conversions.
- The numeric conversion happens when we subtract objects or apply mathematical functions.
  - For instance, `Date` objects (to be covered in the chapter [Date and time](#)) can be subtracted, and the result of `date1` - `date2` is the time difference between two dates.
    - ```js
      let user = {
          age: 2,
      }

      let person = {
          age: 12,
      }

      const date1 = new Date();
      let date2; 
      setTimeout(() => {
          date2  = new Date();
      }, "2000");

      setTimeout(() => {
          console.log('date1 type==>',typeof date1,'\ndate2 type==>',typeof date2);
          /*
          date1 type==> object 
          date2 type==> object
          */
          console.log(date2 - date1); // 2002ms - math operation performed on Objects
      }, "3000");
      console.log(user - person); // NaN - cannot perform math operations
      ```
- As for the string conversion – it usually happens when we output an object with `alert(obj)` and in similar contexts.

- There are 3 types (hints) of it:
  - **string** (for alert and other operations that need a string)
  - **number** (for maths)
  - **default** (few operators, usually objects implement it the same way as "number")

- To do the conversion, JavaScript tries to find and call three object methods:
  - Call `obj[Symbol.toPrimitive](hint)` – the method with the symbolic key [`Symbol.toPrimitive`](#symboltoprimitive) (system symbol), if such method exists,
  - Otherwise if hint is "string"
    - try calling [`obj.toString()`](#tostringvalueof) or obj.valueOf(), whatever exists.
  - Otherwise if hint is "number" or "default"
    - try calling obj.valueOf() or obj.toString(), whatever exists.

### Symbol.toPrimitive

```js
// IF THE METHOD Symbol.toPrimitive EXISTS, IT’S USED FOR ALL HINTS, AND NO MORE METHODS ARE NEEDED.
obj[Symbol.toPrimitive] = function(hint) {
  // here goes the code to convert this object to a primitive
  // it must return a primitive value
  // hint = one of "string", "number", "default"
};

let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

// conversions demo:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500
```

### toString/valueOf

- If there’s no `Symbol.toPrimitive` then JavaScript tries to find methods `toString` and `valueOf`:
  - For the "`string"` hint: call `toString` method, and if it doesn’t exist or if it returns an object instead of a primitive value, then call `valueOf` (so `toString` has the priority for string conversions).
  - For other hints: call `valueOf`, and if it doesn’t exist or if it returns an object instead of a primitive value, then call `toString` (so `valueOf` has the priority for maths).

<table align="center">
<tr>
<td>

- By default, a plain object has following toString and valueOf methods:

- The `toString` method returns a string "[object Object]".
- The `valueOf` method returns the object itself.

</td>
</tr>
</table>

###  Customize the conversion

```js
let user = {
  name: "John",
  money: 1000,

  // for hint="string"
  toString() {
    return `{name: "${this.name}"}`;
  },

  // for hint="number" or "default"
  valueOf() {
    return this.money;
  }

};

alert(user); // toString -> {name: "John"}
alert(+user); // valueOf -> 1000
alert(user + 500); // valueOf -> 1500
```