# Methods of primitives

- A primitive
  - Is a value of a primitive type.
  - There are 7 primitive types: `string`, `number`, `bigint`, `boolean`, `symbol`, `null` and `undefined`.

- An object
  - Is capable of storing multiple values as properties.
  - Can be created with `{}`, for instance: `{name: "John", age: 30}`.
  - There are other kinds of objects in JavaScript: functions, for example, are objects.
  
- One of the best things about objects is that we can store a function as one of its properties.
- ```js
  let john = {
    name: "John",
    sayHi: function() {
      alert("Hi buddy!");
    }
  };

  john.sayHi(); // Hi buddy!
  ```


## A primitive as an object

Problems faced by Javascript creator:
- string or a number would be great to access them using methods.
- Primitives must be as fast and lightweight as possible.

--- 

- The solution looks a little bit awkward, but here it is:
  - Primitives are still primitive. A single value, as desired.
  - The language allows access to methods and properties of strings, numbers, booleans and symbols.
  - In order for that to work, a special “object wrapper” that provides the extra functionality is created, and then is destroyed.

<table align="center" style="width: 600px"> 
<tr>
<td>

```js
let str = "Hello";

alert( str.toUpperCase() ); // HELLO
```

- The string `str` is a primitive. So in the moment of accessing its property, a special object is created that knows the value of the string, and has useful methods, like `toUpperCase()`.
- That method runs and returns a new string (shown by alert).
- The special object is destroyed, leaving the primitive `str` alone.

</td>
</tr>
</table>

<table align="center"> 
<tr>
<td>

#### &#9888; Constructors String/Number/Boolean are for internal use only

- Some languages like Java allow us to explicitly create **wrapper objects** for primitives using a syntax like `new Number(1)` or `new Boolean(false)`.
- In JavaScript, that’s also possible for historical reasons, but highly **unrecommended**. Things will go crazy in several places.

```js
let zero = new Number(0);

if (zero) { // zero is true, because it's an object
  alert( "zero is truthy!?!" );
}
```

</td>
</tr>
</table>

---

> `null`/`undefined` have no methods

---

### QUIZ

Can I add a string property?

```js
let str = "Hello";

str.test = 5;

alert(str.test);
```

<details>
<summay>SHOW SOLUTION</summary>
Depending on whether you have `use strict` or not, the result may be:

1. `undefined` (no strict mode)
2. An error (strict mode).
</details>


# Numbers

In modern JavaScript, there are two types of numbers:
1. Regular numbers => `(2`<sup>`53-1`</sup>) or be less than `-(2`<sup>`53-1`</sup>)
2. [Bigint](../01.%20Basics/README.md#2-bigint) numbers

## More ways to write a number

```js
let billion = 1000000000;
// or
let billion = 1_000_000_000; //We also can use underscore _ as the separator:
// or
let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes

alert( 7.3e9 );  // 7.3 billions (same as 7300000000 or 7_300_000_000)
```

### How it works

```js
1e3 === 1 * 1000; // e3 means *1000
1.23e6 === 1.23 * 1000000; // e6 means *1000000

// -3 divides by 1 with 3 zeroes
1e-3 === 1 / 1000; // 0.001

// -6 divides by 1 with 6 zeroes
1.23e-6 === 1.23 / 1000000; // 0.00000123

// an example with a bigger number
1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times
```

## Hex, binary and octal numbers

1. Hex:         `0x`
2. Binary:      `0b`
3. Octa:        `0o`

```js
alert( 0xff ); // 255
alert( 0xFF ); // 255 (the same, case doesn't matter)

let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

alert( a == b ); // true, the same number 255 at both sides
```


## toString(base)

- The method `num.toString(base)` returns a string representation of `num` in the numeral system with the given `base`.

```js
let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111
```

> The base can vary from `2` to `36`. By default, it’s `10`.

- Common use cases for this are:
  - **base=16** is used for **hex** colors, character encodings etc, digits can be 0..9 or A..F.
  - **base=2** is mostly for debugging **bitwise** operations, digits can be 0 or 1.
  - **base=36** is the maximum, **digits** can be 0..9 or A..Z. The whole Latin alphabet is used to represent a number.
    - A funny, but useful case for 36 is when we need to turn a long numeric identifier into something shorter, for example, to make a short url. Can simply represent it in the numeral system with base 36:
        - ```js
          alert( 123456..toString(36) ); // 2n9c
          // Two dots to call a method
          // Also could write (123456).toString(36).
          ```

> If we placed a single dot: `123456.toString(36)`, then there would be an error, because JavaScript syntax implies the decimal part after the first `dot`. And if we place one more dot, then JavaScript knows that the decimal part is empty and now goes the method.

## Rounding

| | Math.floor |	Math.ceil |	Math.round | Math.trunc |
|---|---|---|---|---|
| 3.1	 | 3 |	4	 |3	| 3 |
| 3.5	 | 3 |	4	 |4	| 3 |
| 3.6	 | 3 |	4	 |4	| 3 |
| -1.1 | -2 |	-1 |	-1 |	-1 | 
| -1.5 | -2 |	-1 |	-1 |	-1 | 
| -1.6 | -2 |	-1 |	-2 |	-1 | 

#### From 1.23456 round to 1.23

- There are two ways to do so:
  1. Multiply-and-divide:
    - ```js
      let num = 1.23456;

      alert( Math.round(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23
      ```
  2. method `toFixed(n)`:
    - ```js
      let num1 = 12.34;
      alert( num1.toFixed(1) ); // "12.3"
      let num2 = 12.36;
      alert( num2.toFixed(1) ); // "12.4"

      // toFixed is a string. If the decimal part is shorter than required, zeroes are appended to the end:
      let num3 = 12.343;
      alert( num3.toFixed(5) ); // "12.34300", added zeroes to make exactly 5 digits
      alert( +num3.toFixed(5) ); // or alert( Number(num3.toFixed(5))); // 12.343
      ```


## Imprecise calculations

- A number is represented in 64-bit format [IEEE-754](https://en.wikipedia.org/wiki/IEEE_754).
- So there are exactly 64 bits to store a number:
  - **52** of them are used to **store** the **digits**,
  - **11** of them store the position of the **decimal** **point**, and
  - **1** bit is for the **sign**.
- If a number is really huge, `alert( 1e500 ); // Infinity`

---

- 
- ```js
  alert( 0.1 + 0.2 == 0.3 ); // false
  alert( 0.1 + 0.2 ); // 0.30000000000000004

  ```

##  Tests: isFinite and isNaN

Remember these two special numeric values?

1. `Infinity` (and `-Infinity`) is a special numeric value that is greater (less) than anything.
2. `NaN` represents an error.



> **PENDING PENDING PENDING**