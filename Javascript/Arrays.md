# Arrays

1. []()

## Transform an array


### Map

It calls the function for each element of the array and returns the array of results.

```js
let result = arr.map(function(item, index, array) {
  // returns the new value instead of item
});

// OR

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length); // finding each array string length
alert(lengths); // 5,7,6
```