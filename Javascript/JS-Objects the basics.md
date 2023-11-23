# Objects: the basics

## Objects

objects are used to store keyed collections of various data and more complex entities.

```js
let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax
```

## Literals and properties

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

```js
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

```js
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
1. Property existence test, `in` operator

```js
let user = {};

alert( user.noSuchProperty === undefined ); // true means "no such property"
```
// syntaxt
"key" in object

```js
let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist
```

