# Javascript

### Keypoints:

---

1. _JavaScript_ was initially created to “make web pages alive”.
2. The programs in this language are called scripts. They can be written right in a web page’s HTML and run automatically as the page loads.
3. Scripts are provided and executed as plain text. They don’t need special preparation or compilation to run.

#### Fundamentals

1. [Hello World](#1-hello-world)
2. [Statements](#2-statements)
   - [semicolon](#semicolon)
   - [comments](#comments)
3. [Modern Mode](#3-Modern-mode)
4. [Variables](#4-variables)
   - [Variable naming](#variable-naming)
   - [Reversed words](#reserved-words)
   - [Constants](#constants)
5. [Data Types](#5-data-types)
   - [Number](#1-number)
   - [BigInt](#2-bigint)
   - [String](#3-string)
   - [Boolean](#4-boolean)
   - [Null](#5-null)
   - [Undefined](#6-undefined)
   - [Objects](#7-objects)
   - [Symbols](#8-symbols)
6. [Interaction](#6-interaction)
   - [Alert](#1-alert)
   - [Prompt](#2-prompt)
   - [Confirm](#3-confirm)
7. [Type Conversions](#7-type-conversions)

## 1 Hello World

1. To run script in browser, add `script` tag in html file. You can place tag almost anywhere in HTML document.
2. The `<script>` tag contains JavaScript code which is automatically executed when the browser processes the tag.
3. Script files are attached to HTML with the `src` attribute.

<table>
<tr><td>Code</td> <td>Output</td> </tr>
<tr>
<td>

```html
<html>
  <body>
    <p>Before the script...</p>
    <script>
      alert("Hello, world!");
    </script>
    <p>...After the script.</p>
  </body>
</html>
```

</td>
<td>

```console
Before the script...

// Alert will appear

...After the script.
```

</td>
</tr>
<tr>
<td>

`src="path/"`

</td>
<td>

```html
<script src="/path/to/script.js"></script>
```

</td>
</tr>
</table>

## 2 Statements

Statements are syntax constructs and commands that perform actions.

#### **Semicolon**

1. A semicolon may be omitted in most cases when a line break exists.

```javascript
alert("Hello");
alert("World");

// or

alert("Hello");
alert("World");

// Both are correct.
```

#### **Comments**

```javascript
// This comment occupies a line of its own
alert("Hello");

alert("World"); // This comment follows the statement

/* An example of.
   a multiline comment.
*/
```

## 3 Modern Mode

`"use strict"` or `'use strict'` is located at the top of a script, the whole script works the “modern” way.

```javascript
1. 'use strict'
2.
3. funtion (){
4.   ...
5. }
```

## 4 Variables

1. A variable is a “named storage” for data. We can use variables to store any data.
2. To create a variable in JavaScript, use the `let` keyword.
3. The statement below creates (in other words: _declares_) a variable with the name “message”:
4. `var` instead of `let`, you may find in old scripts.[GOTO]()

```js
let message; // Declaration
message = "Hello"; // Assigning
alert(message);

let wish = "Hello",
  age = 25,
  name = "Salman"; // Multiline Declaration, separated with comma

message = "World!"; // value changed, old value is removed from the variable
alert(message);

// repeated 'let' leads to an error
let message = "That"; // SyntaxError: 'message' has already been declared
```

### **Variable Naming**

## _Keypoints_:

1. Javascript is case-sensitive.
2. Two limitations on variable naming convention.
3. Non-Latin letters are allowed, but not recommended.
4. Reserved words _CANNOT_ be used as variable names.[GOTO](#reserved-words)
5. Use human-readable names like userName or shoppingCart.
6. Stay away from abbreviations or short names like a, b, c, unless you really know what you’re doing.
7. Make names maximally descriptive and concise.
8. Agree on terms within your team and in your own mind. If a site visitor is called a “user” then we should name related variables currentUser or newUser instead of currentVisitor or newManInTown.

There are two limitations on variable names in JavaScript:

1. The name must contain only letters, digits, or the symbols `$` and `_`.
2. The first character must not be a digit.

```javascript
let USERNAME;  // VALID
let userName;  // VALID
let test123;   // VALID

let 1a;        // NOT VALID

let my-name;   // NOT VALID hyphens '-' aren't allowed in the name

let let;       // NOT VALID
let class;     // NOT VALID
```

### Reserved words

These keywords cannot be used as identifiers for variables, functions, classes, etc. anywhere in JavaScript source.

 <table>
    <tr>
      <td>break</td><td>case</td><td>catch</td><td>class</td>
    </tr>
    <tr>
      <td>const</td><td>continue</td><td>debugger</td><td>default</td>
    </tr>
    <tr>
     <td>delete</td><td>do</td><td>else</td><td>export</td>
    </tr>
    <tr>
      <td>extends</td><td>false</td><td>final</td><td>finally</td>
    </tr>
    <tr>
      <td>for</td><td>function</td><td>if</td><td>implements</td>
    </tr>
    <tr>
      <td>import</td><td>in</td><td>instanceof</td><td>new</td>
    </tr>
    <tr>
      <td>null</td><td>return</td><td>super</td><td>switch</td>
    </tr>
    <tr>
      <td>this</td><td>throw</td><td>true</td><td>try</td>
    </tr>
    <tr>
       <td>typeof</td><td>var</td><td>void</td><td>while</td>
    </tr>
    <tr>
      <td>with</td>
    </tr>
  </table>

**The following are only reserved when they are found in strict mode code:**

1. `let` (also reserved in `const`, `let`, and class declarations)
2. `static`
3. `yield` (also reserved in generator function bodies)

**Only reserved in module code or async function bodies:**

1. `await`

**Future reserved words**

1. They have no special functionality at present, but they might at some future time, so they cannot be used as identifiers.

<table>
  <tr>
    <td>enum</td><td>implements</td><td>interface</td><td>package</td>
  </tr>
  <tr>
    <td>private</td><td>protected</td><td>public</td>
  </tr>
</table>

**The following are reserved as future keywords by older ECMAScript specifications (ECMAScript 1 till 3).**

<table>
  <tr>
    <td>abstract</td><td>boolean</td><td>byte</td><td>char</td>
  </tr>
  <tr>
    <td>double</td><td>final</td><td>float</td><td>goto</td>
  </tr>
   <tr>
    <td>goto</td><td>int</td><td>long</td><td>native</td>
  </tr>
   <tr>
    <td>short</td><td>synchronized</td><td>throws</td><td>transient</td>
  </tr>
  <tr>
    <td>volatile</td>
  </tr>
</table>

**Identifiers with special meanings**

A few identifiers have a special meaning in some contexts without being reserved words of any kind. They include:

1. `arguments` (not a keyword, but cannot be declared as identifier in strict mode)
2. `as` (import \* as ns from "mod")
3. `async`
4. `eval` (not a keyword, but cannot be declared as identifier in strict mode)
5. `from` (import x from "mod")
6. `get`
7. `of`
8. `set`

### **Constants**

`const` variable _CANNOT_ be changed

```javascript
const myBirthday = "18.04.1982";
myBirthday = "01.01.2001"; // error, can't reassign the constant!
```

## 5 Data types

There are _eight_ basic data types in JavaScript.

<table>
    <tr>
      <td>Number</td><td>BigInt</td><td>String</td><td>Number</td>
    </tr>
    <tr>
      <td>Number</td><td>Number</td><td>Number</td><td>Number</td>
    </tr>
  </table>

#### 1 Number

1. The number type represents both integer and floating point numbers.
2. Also _special numeric values_ which also belong to this data type: `Infinity`, `-Infinity` and `NaN`.
3. The script will never stop with a fatal error (“die”). At worst, we’ll get `NaN` as the result.
4. `Infinity` represents the mathematical [Infinity](https://en.wikipedia.org/wiki/Infinity) ∞. It is a special value that’s greater than any number.
5. `NaN` represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance.
6. Integer values larger than `(2`<sup>`53`</sup>`-1)` (that’s `9007199254740991`), or less than `-(2`<sup>`53`</sup>`-1)` for negatives.

```javascript
let num = 123;
num = 12.345;

alert(1 / 0); // Infinity

alert(Infinity); // Infinity

alert("not a number" / 2); // NaN, such division is erroneous

alert(NaN + 1); // NaN
alert(3 * NaN); // NaN
alert("not a number" / 2 - 1); // NaN

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992
```

#### 2 BigInt

1. Number can store greater than `number` type upto `1.7976931348623157 * 10`<sup>`308`</sup>.
2. Used in cryptography or microsecond-precision timestamps.
3. A `BigInt` value is created by appending `n` to the end of an integer.

```javascript
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
```

#### 3 String

1. A string in JavaScript must be surrounded by _quotes_.

```javascript
let str = "Hello"; //Double quotes
let str2 = "Single quotes are ok too"; //Single quotes
let phrase = `can embed another ${str}`; //Backticks

alert(`the result is ${1 + 2}`); // the result is 3, embed an expression using backticks
```

#### 4 Boolean

1. The boolean type has only two values: `true` and `false`.

```javascript
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

let isGreater = 4 > 1;
alert(isGreater); // true (the comparison result is "yes")
```

#### 5 Null

1. The special `null` value does not belong to any of the types described above.
2. `null` is not a _reference to a non-existing object_ or a _null pointer_ like in some other languages.
3. It’s just a special value which represents nothing, empty or value unknown.

```javascript
let age = null;

console.log(typeof age); // object
```

#### 6 Undefined

1. The special value `undefined` also stands apart. It makes a type of its own, just like null.
2. The meaning of `undefined` is “value is not assigned”.
3. If a variable is declared, but not assigned, then its value is `undefined`:

```javascript
let age;
alert(age); // shows "undefined"

let age = 100;
// change the value to undefined
age = undefined; // explicitly assign undefined to a variable
alert(age); // "undefined"
```

#### 7 Objects

1. It is used to store and collections of data and more complex entities.
2. It's Non-primitive Data type
***pending***

#### 8 Symbols

1. It is used to create unique identifier for objects
2. 

***pending***

#### typeof Operator

1. The `typeof` operator returns the type of the operand. 
2. It’s useful when we want to do a quick check.

```js
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2) It'a an error, null is not an object. See null section

typeof alert // "function"  (3)
```


## 6 Interaction

To interact with user, we have `alert`, `prompt` and `confirm` functions in javascript.

#### 1 Alert

1. It shows a message and waits for the user to press **OK**.
2. All parameters are convert to `string` type.

```js
alert("Hello");
```

#### 2 Prompt

1. It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.

```js
result = prompt(title, [default]);

// title =  text to show the visitor.
// default = the initial value for the input field [optional].

let age = prompt('How old are you?', 100);
alert(`You are ${age} years old!`); // You are 100 years old!
```

> NOTE: `[...]` *Square Brackets* means **Optional** parameter

#### 3 Confirm

1. Shows a modal window with a `question` and two buttons: OK and Cancel.
2. The result is `true` if OK is pressed and `false` otherwise.

```js
result = confirm(question);

let isBoss = confirm("Are you the boss?");
alert( isBoss ); // true if OK is pressed
```

## 7 Type Conversions

1. It's an *Explicitly* process conversion, convert a value to the expected data type,
2. Type conversion is useful when we want `String` value instead of `boolean` value.


#### 1 String

1. Convert a any value to `string` type.

```js
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string
```

#### 2 Number

1. Conver a value to `number` type.
2. Value must be valid number, otherwise it convert to `NaN` type.

```js
let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number

let age = Number("an arbitrary string instead of a number");

alert(age); // NaN, conversion failed
```
<table>
 <tr>
    <td>Value</td>
    <td>Becomes</td>
  </tr>
  <tr>
  <td>
  
  `undefined`
  
  </td><td>
  
  `NaN`
  
  </td>
  </tr>
  <tr><td>
    
   `null`
    
  </td><td>
    
   `0`
    
  </td>
  </tr>
  <tr>
    <td>

  `true and false`
  
  </td><td>
  
  `1` and `0`
  
  </td>
  </tr>
  <tr>
    <td>
    
   `string`
   
   </td>
  <td>

  Whitespaces (includes spaces, tabs `\t`, newlines `\n` etc.) from the start and end are removed. If the remaining string is empty, the result is `0`. Otherwise, the number is “read” from the string. An error gives `NaN`.

  </td>
  </tr>
</table>


```js
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0
```

#### 3 Boolean

1. Values that are intuitively **empty** like `0`, `an empty string`, `null`, `undefined`, and `NaN`, become `false`.
2. Other values become `true`.

```js
alert( Boolean(1)   );  // true
alert( Boolean(0)   );  // false
alert( Boolean("0") );  // true Zero is a string, not a number 

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false
```

## 8 Basic operators, maths

1. Addition `+`
2. Subtraction `-`
3. Multiplication `*`
4. Division `/`
5. Remainder `%` (NOT related to `percent`)
6. Exponentiation `**`

```js
alert( 5 + 2 ); // 7, 
alert( 8 - 3 ); // 5, 
alert( 8 * 2 ); // 16, 
alert( 5 / 2 ); // 2, the quotient of 5 divided by 2
alert( 8 % 2 ); // 0, the remainder of 8 divided by 2
alert( 2 ** 4 ); // 16, 2 to the power of 4.

alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)
```

#### 1 String concatenation

1. If the binary + is applied to strings, it merges (concatenates) them.
2. The binary `+` is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.
3. The unary plus or, in other words, the plus operator `+` applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.

```js
let s = "my" + "string";
alert(s); // mystring

// ---->>  BINARY <<-----

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers

// ---->> UNARY <<-----

// No effect on numbers
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers to numbers
alert( +true ); // 1
alert( +"" );   // 0

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5
```

#### 2 Operator precedence

1. As we can see, the “unary plus” has a priority of `14` which is higher than the `11` of “addition” (binary plus). That’s why, in the expression  `"+apples + +oranges"`, unary pluses work before the addition.

<table>
  <tr>
    <th>Preccedence</th><th>name</th><th>Sign</th>
  </tr>
  <tr>
<td>14</td>
<td>unary plus</td>
  <td>
    
  `+`

  </td>
  </tr>
  <tr>
    <td>14</td>
    <td>unary negation</td>
    <td>
      
  `-`
  
  </td>
  </tr>
  <tr>
    <td>13</td>
    <td>exponentiation</td>
    <td>
      
   `**`
  
  </td>
  </tr>
  <tr>
    <td>12</td>
    <td>multiplication</td>
    <td>
      
   `*`
  
  </td>
  </tr>
  <tr>
    <td>12</td>
    <td>division</td>
    <td>
     
   `/`
  
  </td>
  </tr>
  <tr>
    <td>11</td>
    <td>addition</td>
    <td>
      
   `+`
  
  </td>
  </tr>
  <tr>
    <td>11</td>
    <td>subtraction</td>
    <td>
      
   `-`
  
  </td>
  </tr>
  <tr>
    <td>...</td>
    <td>...</td>
    <td>
      
   `...`
  
  </td>
  </tr>
  <tr>
    <td>2</td>
    <td>assignment</td>
    <td>
      
   `=`
  
  </td>
  </tr>
  <tr>
    <td>...</td>
    <td>...</td>
    <td>
      
   `...`
  
  </td>
  </tr>

</table>


#### 3 Modify-in-place

1. An operator to a variable and store the new result in that same variable.
2. Short “modify-and-assign” operators exist for all arithmetical and bitwise operators: `/=`, `-=`, etc.

```js
let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert( n ); // 14
// -------------------
n = 2;
n *= 3 + 5; // right part evaluated first, same as n *= 8
alert( n ); // 16
```

#### 4 Increment & decrement

1. Increment `++` increases a variable by 1. It is in postfix form.
2. Decrement `--` decreases a variable by 1. It is in prefix form.
3. Increment/decrement can only be applied to variables. Trying to use it on a value like `5++` will give an error.
4. These precedence is higher than most other arithmetical operations.

```js
let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
alert( counter ); // 3

counter = 2;
counter--;        // works the same as counter = counter - 1, but is shorter
alert( counter ); // 1
```

#### 5 Bitwise operators

1. These operators are used very rarely, when we need to fiddle with numbers on the very lowest (bitwise) level.

1. AND ( `&` )
2. OR ( `|` )
3. XOR ( `^` )
4. NOT ( `~` )
5. LEFT SHIFT ( `<<` )
6. RIGHT SHIFT ( `>>` )
7. ZERO-FILL RIGHT SHIFT ( `>>>` )

You can read the [Bitwise Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#bitwise_operators) in this MDN docs.

#### 6 Comma

1. The comma operator , is one of the rarest and most unusual operators. Sometimes, it’s used to write shorter code.
2. It has very low Precedence.

```js
let a = (1 + 2, 3 + 4);

alert( a ); // 7 (the result of 3 + 4)

//the first expression 1 + 2 is evaluated and its result is thrown away. Then, 3 + 4 is evaluated and returned as the result.
```


## 9 Comparisions

1. Greater/Less than `a > b` `a < b`
2. Greater/less than or equals `a >= b`, `a <= b`
3. Equals `a == b`
4. Not equals `a != b`

All comparisions operators return a boolean value.

```js
alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)
let result = 5 > 4; // assign the result of the comparison
alert( result ); // true
```

#### 1 String comparisions

1. Comparison operators return a boolean value.
2. Strings are compared letter-by-letter in the “dictionary” order.
3. When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
4. The values null and undefined equal == each other and do not equal any other value.
5. Be careful when using comparisons like > or < with variables that can occasionally be null/undefined.
6. Checking for null/undefined separately is a good idea.

```js
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true
```

The algorithm to compare two strings is simple:

1. Compare the first character of both strings.
2. If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
3. Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
4. Repeat until the end of either string.
5. If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.

In the first example above, the comparison `'Z'` > `'A'` gets to a result at the first step.

The second comparison `'Glow'` and `'Glee'` needs more steps as strings are compared character-by-character:

`G` is the same as `G`.
`l` is the same as `l`.
`o` is greater than `e`. Stop here. The first string is greater.

```js
alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1

// for boolean values, true becomes 1 and false becomes 0.
alert( true == 1 ); // true
alert( false == 0 ); // true

let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!
```

#### 2 Strict equality

1. A strict equality operator `===` checks the equality without type conversion.

```js
alert( 0 === false ); // false

alert( null === undefined ); // false ---> strict equality
alert( null == undefined ); // true   ---> strict equality

// null vs 0

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)
```

## 10 Conditions 

1. `if` statement evaluates a condition in parentheses and, if the result is true, executes a block of code.
2. You can use `?` statement instead of `if` statements.
3. A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values. Remaining are true.
4. `if` statement fails then `else` block is execute. `if` statement may contain optional `else` block.
5. `else if` statement test several variants of a condition.
6. conditional operator `?` looks like this `let result = condition ? value1 : value2;` 


```js
let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) alert( 'You are right!' );

// if and else
if (year == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // any value except 2015
}

// if and else if

//year = 2015

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' ); // this one may execute
}

// conditional operator ?
let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);

// can be written in ? operator

let accessAllowed = (age > 18) ? true : false;
```

## 11 Logical operators

1. There are four logical operators in JavaScript: `||` (OR), `&&` (AND), `!` (NOT), `??` (Nullish Coalescing).
2. `||` OR operator =>  If any of its arguments are `true`, it returns `true`, otherwise it returns `false`.
3. `||` operator evaluates operands from left to right. For each operand, converts it to boolean. If the result is `true`, stops and returns the original value of that operand.
4. `&&` AND operator returns `true` if both operands are truthy and `false` otherwise.
5. For each operand, converts it to a boolean. If the result is `false`, stops and returns the original value of that operand.
6. Precedence of AND `&&` is higher than OR `||`.
7. `!` (NOT) operator returns reverse value.
8.  `!!` Double NOT is sometimes used for converting a value to boolean type. Similar to `Boolean("non-empty string")`
9.  The precedence of NOT `!` is the highest of all logical operators, so it always executes first, before `&&` or `||`.


```js
//   ||
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

//   &&
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

//   !
alert( !true ); // false
alert( !0 ); // true
```

## 12 Nullish coalescing operator '??'

1. A value is **defined** when it’s neither `null` nor `undefined`.
2. The result of `a ?? b` is:
    - if `a` is defined, then `a`,
    - if `a` isn’t defined, then `b`.
3. The precedence of the `??` operator is the same as `||`. only a bit higher than `?` and `=`.
4. It’s forbidden to use it with `||` or `&&` without explicit parentheses.

```js
// set height=100, if height is null or undefined
height = height ?? 100;
```


## 13 Loops: while & for

1. A single execution of the loop body is called an *iteration*.

#### 1 While Loop

1. Loop iterate the body until the condition becomes `false`.
2. Curly braces are not required for a single-line body.

```js
while (condition) {
  // code
  // so-called "loop body"
}

let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}
```

#### 2 do...while loop

1. The loop will first execute the body, then check the condition.
2. Use when you need to run the code atleast once even though the condition is wrong.


```js
do {
  // loop body
} while (condition);

let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);
```

#### 3 for loop

```js
for (begin; condition; step) {
  // ... loop body ...
}

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}
```

#### 4 Break and Continue

1. Normally, a loop exits when its condition becomes falsy.

```js
let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );
```

#### 5 Continue

1. It stops the current iteration and forces the loop to start a new one (if the condition allows).
2. If you don't want to do anything in the current iteration, and would like to go forward to next one, use `continue`.

```js
for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  alert(i); // 1, then 3, 5, 7, 9
}
```

#### 6 Label

1. A label is an identifier with a colon before a loop.
2. Labels do not allow to *jump* anywhere.
3. A break directive must be inside a code block.
4. A label is the only way for `break/continue` to escape a nested loop to go to an outer one.

```js
outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}

alert('Done!');
```
## 14 Switch statements

1. The switch has one or more case blocks and an optional default.
2. It is similar to `if else if` statements. 
2. The value of `x` is checked for a strict equality.

```js
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
```

## 15 Functions

1. `function` is some block of code, to be called many times without repetition.
2. To create a function we can use a `function` *declaration*.
3. `function` is should be declared first, before calling it.
4. When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions. We can think of it as an *initialization stage*.
5. A Function Declaration can be called earlier than it is defined.

```js
alert(message);             // prebuilt function
prompt(message, default);   // prebuilt function
confirm(question);          // prebuilt function


function showMessage() {    // custom function
  alert( 'Hello everyone!' );
}

showMessage();
showMessage();
```
#### 1 Local variables

1. A variable declared *inside* a function is only visible inside that function.
2. 

```js
function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  alert( message );
}

showMessage(); // Hello, I'm JavaScript!

alert( message ); // <-- Error! The variable is local to the function
```

#### 2 Outer variables

1. A variable declared outside a function, also known as *Global variable*.
2. function has full access to the outer variable. The outer variable is only used if there’s no local one.
3. If a same-named variable is declared inside the function then it *shadows* the outer one. For instance, in the code below the function uses the local `userName`. The outer one is ignored.
4. Maximize the use of **local variable** instead of *global* variable. 

```js
let userName = 'John';

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}

// the function will create and use its own userName
showMessage();

alert( userName ); // John, unchanged, the function did not access the outer variable
```

#### 3 Parameters

1. Pass the arbitrary data to functions using parameters.
2. When the function is called, the given values are copied to local variables. `from` and `text`. You can use *outside* the function.
3. It is also called an *argument*. In simple terms, We declare functions listing their parameters, then call them passing arguments.

```js
function showMessage(from, text) {
  from = '*' + from + '*'; // now it becomes, *Ann*
  alert( from + ': ' + text );
}

let from = "Ann";
showMessage(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
alert( from ); // Ann
```

#### 4 Default values

1. If a function is called, but an argument is not provided, then the corresponding value becomes undefined.
2. For more info, follow this [link](https://javascript.info/function-basics#default-values)

```js
function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given
```

#### 5 Returning a value

1. A function can return a value back into the calling code as the result.
2. When the execution reaches it, the function stops, and the value is returned to the calling code. (assigned to `result` above)
3. A function with an empty `return` or without it returns `undefined`


```js
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert( result ); // 3


// empty return
function doNothing() { /* empty */ }
alert( doNothing() === undefined ); // true

function doNothing() {
  return;
}
alert( doNothing() === undefined ); // true
```

#### 6 Naming a function

1. Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does.
2. One function – one action

**Function starting with**:  
"`get…`" – return a value,  
"`calc…`" – calculate something,  
"`create…`" – create something,  
"`check…`" – check something and return a boolean, etc.  

```js
showMessage(..)     // shows a message
getAge(..)          // returns the age (gets it somehow)
calcSum(..)         // calculates a sum and returns the result
createForm(..)      // creates a form (and usually returns it)
checkPermission(..) // checks a permission, returns true/false
```

## 16 Function expressions

1. As the function creation happens in the context of the assignment expression (to the right side of `=`), this is a *Function Expression*.
2. After `function` declaration, no need to write a *name*, called *anonymous function*.

```js
let sayHi = function() { // function expression
  alert( "Hello" );
};
```

#### 1 Function is a value

1. No matter how the function is created, a function is a value.
2. A function is a *special value*, in the sense that we can call it like sayHi().
3. We can copy a function to another variable. *copy without parathesis*, otherwise it will the function.
4. The semicolon `;` is recommended at the end of the statement, it’s not a part of the function syntax.

```js
function sayHi() {
  alert( "Hello" );
}

alert( sayHi ); // shows the function code

// ------------------------------------
// ------------------------------------

function sayHi() {   // (1) create
  alert( "Hello" );
}

let func = sayHi;    // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)

let sayHi = function() {
  // ...
};                          // semicolon at end of expression
```

#### 2 Callback functions

1. A callback function is a `function` that is passed as an *argument* to another function.
2. Fore more info, follow this [link](https://javascript.info/function-expressions#callback-functions).
3. A function is a value representing an **action**.


```js
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);
```

#### 3 Function Expression vs Function Declaration

1. A Function Declaration can be called earlier than it is defined.
2. When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions. We can think of it as an “initialization stage”.
3. And after all Function Declarations are processed, the code is executed. So it has access to these functions.

<table>
    <tr>
      <td>Syntax</td>
      <td>

        ```js
        // Function Declaration
        function sum(a, b) {
          return a + b;
        }
        ```
  </td>
   <td>

        ```js
        // Function Expression
        let sum = function(a, b) {
          return a + b;
        };
        ```

  </td>
  </tr>
</table>


```js
sayHi("John"); // Hello, John

function sayHi(name) {
  alert( `Hello, ${name}` );
}
```

## Arrow functions, the basics

1. Arrow function is similar to function expression, but only different in syntax.
2. Arrow function can have Single and multi-line.
3. Single line automatically returns the expression and Multi-line needs `return` statement.
    - Without curly braces: `(...args) => expression`, function evaluate implicitly `returns` the result
    - With curly braces: `(...args) => { body }` but we need an explicit `return` to return something.

<table>
  <tr>
    <td>Array function</td><td>Function Expression</td>
  </tr>
  <tr>
    <td>

      ```js
      let func = (arg1, arg2, ..., argN) => expression;
      ```

  </td>
  <td>

      ```js
      let func = function(arg1, arg2, ..., argN) {
        return expression;
      };
      ```

  </td>
  </tr>
</table>

```js
let sum = (a, b) => a + b; // single line function

alert( sum(1, 2) ); // 3


// --------------------
// --------------------

let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

alert( sum(1, 2) ); // 3
```

---

#### Resources

1. [Javascript](https://javascript.info)
2. [MDN Keywords](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords).
