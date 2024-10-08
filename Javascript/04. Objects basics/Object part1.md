- [Objects: the basics](#objects-the-basics)
  - [1. Objects](#1-objects)
    - [1. Literals and properties](#1-literals-and-properties)
    - [2. Property names limitations](#2-property-names-limitations)
    - [3. Property existence test, `in` operator](#3-property-existence-test-in-operator)
    - [4. The *for..in* loop](#4-the-forin-loop)
    - [5. Ordered like an object](#5-ordered-like-an-object)
    - [6. Practice](#6-practice)
      - [6.1 Check for emptiness](#61-check-for-emptiness)
      - [6.2 Sum object properties](#62-sum-object-properties)
      - [6.3 Multiply numeric property values by 2](#63-multiply-numeric-property-values-by-2)
  - [2. Object references and copying](#2-object-references-and-copying)
    - [1. Comparison by reference](#1-comparison-by-reference)
      - [2.1 Object.assign](#21-objectassign)
    - [3. Nested cloning](#3-nested-cloning)
      - [3.1 structuredClone](#31-structuredclone)
    - [4. Summary](#4-summary)


# Objects: the basics

## 1. Objects

objects are used to store keyed collections of various data and more complex entities.

```js
let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax
```

### 1. Literals and properties

```js
let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30,       // by key "age" store value 30
  "like birds": true,
};
```

1. Add a property
   - ```js
      user.name = 'Arthur';
     ```
1. delete a property
   - ```js
      delete user.age;
     ```
1. Get a property
   - ```js
      let value;
      // value = user.likes birds; // error
      value = user["likes birds"]; // use Square Brackets

      let key = "likes birds";

      // same as user["likes birds"] = true;
      user[key] = true;
     ```
1. Square Brackets 

    - ```js
      let fruit = prompt("Which fruit to buy?", "apple");
      let bag = {};

      // take property name from the fruit variable
      bag[fruit] = 5;

      // complex expressions in square brackets
      let answer = 'apple';
      let bag = {
        [answer + 'Computers']: 5 // bag.appleComputers = 5
      };
      ```

1. Property value shorthand

    - ```js
      function makeUser(name, age) {
        return {
          name: name,
          age: age,
          // ...other properties

          // name, // same as name: name
          // age,  // same as age: age

        };
      }

      let user = makeUser("John", 30);
      alert(user.name); // John
      ```
1. Object property keys types

- By specification, only two primitive types may serve as object property keys:
  - **string** type,
    - if one uses another type, such as `number`, it’s autoconverted to `string`.
      - So that `obj[1]` is the same as `obj["1"]`
      - `obj[true]` is the same as `obj["true"]`.
  - **symbol** type [Symbol]()


### 2. Property names limitations

- As we already know, a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.
- But for an object property, there’s no such restriction:

    - ```js
      // these properties are all right
      let obj = {
        for: 1,
        let: 2,
        return: 3
      };

      alert( obj.for + obj.let + obj.return );  // 6


      // Other types are automatically converted to strings.
      // For instance, a number 0 becomes a string "0" when used as a property key:

      let obj = {
        0: "test" // same as "0": "test"
      };

      // both alerts access the same property (the number 0 is converted to string "0")
      alert( obj["0"] ); // test
      alert( obj[0] ); // test (same property)
      ``` 

    - There’s a minor gotcha with a special property named `__proto__`. We can’t set it to a non-object value:    
      ```js
      let obj = {};
      obj.__proto__ = 5; // assign a number
      alert(obj.__proto__); // [object Object] - the value is an object, didn't work as intended
      ```

### 3. Property existence test, `in` operator

  - ```js
    let user = {};

    alert( user.noSuchProperty === undefined ); // true means "no such property"
    
    // Key in special syntax

    let user = { name: "John", age: 30 };

    alert( "age" in user ); // true, user.age exists
    alert( "blabla" in user ); // false, user.blabla doesn't exist
    ```

  - **When to use undefined and in property**
    - ```js
      let obj = {
        test: undefined
      };

      alert( obj.test ); // it's undefined, so - no such property?

      alert( "test" in obj ); // true, the property does exist!
      ```
### 4. The *for..in* loop

- To walk over all keys of an object, there exists a special form of the loop: for..in
    - ```js
      for (key in object) {
        // executes the body for each key among object properties
      }
      ```

### 5. Ordered like an object

- Are objects ordered? In other words, if we loop over an object, do we get all properties in the same order they were added? Can we rely on this?

> The short answer is: **"ordered in a special fashion":** 
>   - integer properties are sorted,
>   - others appear in creation order.

- Integers comes in sorted order:

    - ```js
      let codes = {
        "49": "Germany",
        "41": "Switzerland",
        "44": "Great Britain",
        // ..,
        "1": "USA"
      };

      for (let code in codes) {
        alert(code);             // 1, 41, 44, 49
      }
      ```

    - ```console
      But if we run the code, we see a totally different picture:

      USA (1) goes first
      then Switzerland (41) and so on.
      ```
- Strings are listed in the creation order:
    - ```js
      let user = {
        name: "John",
        surname: "Smith"
      };
      user.age = 25; // add one more

      // non-integer properties are listed in the creation order
      for (let prop in user) {
        alert( prop ); // name, surname, age
      }
      ```

- So, to fix the issue with the phone codes, we can “cheat” by making the codes non-integer. Adding a plus "+" sign before each code is enough.

    - ```js
      let codes = {
        "+49": "Germany",
        "+41": "Switzerland",
        "+44": "Great Britain",
        // ..,
        "+1": "USA"
      };

      for (let code in codes) {
        alert( +code ); // 49, 41, 44, 1
      }
      ```

### 6. Practice

#### 6.1 Check for emptiness

**Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.**
```js
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false

// SOLUTION
function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}
```

#### 6.2 Sum object properties

**We have an object storing salaries of our team:**
- Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above. If salaries is empty, then the result must be 0.
```js
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

// SOLUTION
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum); // 390
```

#### 6.3 Multiply numeric property values by 2

- Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2. 

```JS
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

// -----------------------------
// SOLUTION
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}
```

## 2. Object references and copying

- One of the fundamental differences of objects versus primitives is that:
  - **objects** are stored and copied “**by reference**”,
  - whereas **primitive values**: strings, numbers, booleans, etc – are always **copied** “as a whole value”.
    - ```JS
      let message = "Hello!";
      let phrase = message;

      // As a result we have two independent variables, each one storing the string "Hello!".
      // But object are not like this
      ```
- Objects are:
  - A v**ariable assigned to an object stores not the object itself**, but its “**address in memory**” – in other words “**a reference**” to it.
  - The object is stored somewhere in memory (at the right of the picture), while the user variable (at the left) has a “reference” to it.
  
When we perform actions with the object, e.g. take a property user.name, the JavaScript engine looks at what’s at that address and performs the operation on the actual object.

When an object variable is copied, the reference is copied, but the object itself is not duplicated.

```js
let user = { name: 'John' };
let admin = user; // copy the reference
admin.name = 'Pete'; // changed by the "admin" reference
alert(user.name); // 'Pete', changes are seen from the "user" reference
```

### 1. Comparison by reference

Two objects are equal only if they are the same object.

```js
let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true
```

<table>
<tr>
<td align="left">

**NOTE**

</td>
</tr>
<tr>
<td>

 `const` objects can be modified
An important side effect of storing objects as references is that an object declared as const can be modified.
- ```js
  const user = {
    name: "John"
  };

  user.name = "Pete"; // (*)

  alert(user.name); // Pete
  ```
</td>
<td>

- The value of `user` is constant, it must always reference the same object,
but properties of that object are free to change.
- In other words, the `const user` gives an error only if we try to set `user=...` as a whole.
- That said, if we really need to make constant object properties, it’s also possible, but using totally different methods. We’ll mention that in the chapter [Property flags and descriptors.](https://javascript.info/property-descriptors)

</td>
</tr>
</table>

### 2. Cloning and merging, Object.assign

- We can create a new object and replicate the structure of the existing one, by iterating over its properties and copying them on the primitive level.
```js
let user = {
  name: "John",
  age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

alert( user.name ); // still John in the original object
```

#### 2.1 Object.assign

```js
Object.assign(dest, ...sources)
```

- The first argument `dest` is a target object.
- Further arguments is a list of source objects.
- It copies the properties of all source objects into the target `dest`, and then returns it as the result.
    - ```js
      let user = { name: "John" };

      let permissions1 = { canView: true };
      let permissions2 = { canEdit: true };

      // copies all properties from permissions1 and permissions2 into user
      Object.assign(user, permissions1, permissions2);

      // now user = { name: "John", canView: true, canEdit: true }
      alert(user.canView); // true
      alert(user.canEdit); // true
      ```
- If the copied property name already exists, it gets overwritten:
    - ```js
      let user = { name: "John" };
      Object.assign(user, { name: "Pete" });
      alert(user.name); // now user = { name: "Pete" }
      ```
- We also can use `Object.assign` to perform a simple object cloning:
    - ```js
      let user = {
        name: "John",
        age: 30
      };

      let clone = Object.assign({}, user);

      alert(clone.name); // John
      alert(clone.age); // 30
      ``` 
### 3. Nested cloning

- Now it’s not enough to copy `clone.sizes = user.sizes`, because `user.sizes` is an object, and will be copied by reference, so `clone` and `user` will share the same sizes:
    - ```js
      let user = {
        name: "John",
        sizes: {
          height: 182,
          width: 50
        }
      };

      let clone = Object.assign({}, user);

      alert( user.sizes === clone.sizes ); // true, same object

      // user and clone share sizes
      user.sizes.width = 60;    // change a property from one place
      alert(clone.sizes.width); // 60, get the result from the other one
      ```

- To fix that and make `user` and `clone` truly separate objects, we should use a cloning loop that examines each value of `user[key]` and, if it’s an object, then replicate its structure as well. That is called a `deep cloning` or `"structured cloning"`. There’s [structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone) method that implements deep cloning.

#### 3.1 structuredClone

- The call `structuredClone(object)` clones the `object` with all nested properties, except `functions` propertires
    - ```js
      let user = {
        name: "John",
        sizes: {
          height: 182,
          width: 50
        }
      };

      let clone = structuredClone(user);

      alert( user.sizes === clone.sizes ); // false, different objects

      // user and clone are totally unrelated now
      user.sizes.width = 60;    // change a property from one place
      alert(clone.sizes.width); // 50, not related
      ```

- when an object has a function property:
    - ```js
      // error
      structuredClone({
        f: function() {}
      });
      ```
### 4. Summary

- Objects are **assigned** and **copied** by `reference`. In other words, a variable stores not the **object value**, but a **reference** (address in memory) for the value.
- So copying such a variable or passing it as a function argument copies that reference, not the object itself.
- All operations via copied references (like adding/removing properties) are performed on the same single object.
- To make a **real copy** (a clone) we can use `Object.assign` for the so-called **shallow copy** (nested objects are copied by reference)
- Or a **deep cloning** function `structuredClone` or use a custom cloning implementation, such as [`_.cloneDeep(obj)`](https://lodash.com/docs#cloneDeep).