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



---

#### Resources

1. [Javascript](https://javascript.info)
2. [MDN Keywords](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords).
