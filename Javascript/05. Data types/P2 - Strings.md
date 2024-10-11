# Strings

> the textual data is stored as strings. There is *no separate type* for a single character.

## Quotes

1. Strings can be enclosed within either **single** quotes, **double** quotes or **backticks**:
   1. ```js
      let single = 'single-quoted';
      let double = "double-quoted";
      let backticks = `backticks`;

      function sum(a, b) {
        return a + b;
      }

      alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.
      ```
2. Backticks also allow us to specify a **template function** before the first backtick. The syntax is: ``` func `string` ```;
   1. [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates)

## Special characters

1. create multiline strings
   1. ```js
      let guestList = "Guests:\n * John\n * Pete\n * Mary";

      alert(guestList); // a multiline list of guests, same as above
      ```

| Character	| Description |
|---|---|
| `\n` | New line |
| `\r` | In Windows text files a combination of two characters `\r\n` represents a new break, <br/> while on non-Windows OS it’s just `\n`. <br/>That’s for historical reasons, most Windows software also understands `\n`. |
| `\`', `\"`, ``` `\` ```	| Quotes |
| `\\` |	Backslash |
| `\t` |	Tab |
| `\b`, `\f`, `\v` |	Backspace, Form Feed, Vertical Tab – mentioned for completeness, coming from old times, <br /> not used nowadays (you can forget them right now). |

## String Length

- The length property has the string length:
    - ```js
      alert( `My\n`.length ); // 3
      ```
> length is a property, `str.length` is a numeric property, **not** a function. 

## Accessing characters

- Use square brackets [pos] or call the method str.at(pos).

```js
let str = `Hello`;

// the first character
alert( str[0] ); // H
alert( str.at(0) ); // H


// the last character
alert( str[str.length - 1] ); // o
alert( str.at(-1) ); // o 
alert( str[-1] ); // undefined 
```

## Iterate

```js
for (let char of "Hello") {
  alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}
```

## Strings are Immutable

- Strings cannot be changed in JavaScript. It is impossible to change a character.

```js
let str = 'Hi';

str[0] = 'h'; // error
alert( str[0] ); // (doesn't work) TypeError: Cannot assign to read only property '0' of string 'Hi'

str = 'h' + str[1]; // replace the string

alert( str ); // hi
```

- Changing the case: Mutable

```js
alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface
alert( 'Interface'[0].toLowerCase() ); // 'i'
```

## Searching for a substring

1. **str.indexOf**
      1. It looks for the `substr` in `str`, starting from the given position `pos`, and returns the position where the match was found or `-1` if nothing can be found.
         1. ```js
            let str = 'Widget with id';

            alert( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
            alert( str.indexOf('widget') ); // -1, not found, the search is case-sensitive

            alert( str.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)
            ```
   2. The optional second parameter allows us to start searching from a given position.
         1. ```js
            let str = 'Widget with id';
            alert( str.indexOf('id', 2) ) // 12

            // WORD SEARCH ALGORITHM
            let str = 'As sly as a fox, as strong as an ox';

            let target = 'as'; // let's look for it

            let pos = 0;
            while (true) {
               let foundPos = str.indexOf(target, pos);
               if (foundPos == -1) break;

               alert( `Found at ${foundPos}` ); // 7 17 27 
               pos = foundPos + 1; // continue the search from the next position
            }

            // SHORT HAND 
            let str = "As sly as a fox, as strong as an ox";
            let target = "as";

            let pos = -1;
            while ((pos = str.indexOf(target, pos + 1)) != -1) {
               alert( pos );
            }
            ```
2. **str.lastIndexOf(substr, position)**
   1. It searches from the end of a string to its beginning.
         1. ```js
            let str = 'As sly as a fox, as strong as an ox';

            let target = 'as'; // let's look for it

            let pos = str.length; // last index
            while (true) {
               let foundPos = str.indexOf(target, pos);
               if (foundPos == -1) break;

               alert( `Found at ${foundPos}` ); // 27 17 7
               pos = foundPos - 1; // continue the search from the previous position
            }
            ```
3. **str.includes**:
   1. The more modern method `str.includes(substr, pos)` **returns** `true`/`false` depending on whether `str` contains `substr` within.
         1. ```js
            alert( "Widget with id".includes("Widget") ); // true

            alert( "Hello".includes("Bye") ); // false
            alert( "Widget".includes("id", 3) ); // false, from position 3 there is no "id"

            ```
4. **str.startsWith**:
   1. `alert( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"`
5. **str.endsWith**:
   1. `alert( "Widget".endsWith("get") ); // true, "Widget" ends with "get"`

## Getting a substring

- There are 3 methods in JavaScript to get a substring: `substring`, `substr` and `slice`.


| method |	selects… |	negatives |
|---|---|---|
| `slice(start, end)` |	from start to end (not including `end`) |	allows negatives |
| `substring(start, end)`	| between start and end (not including `end`) | negative values mean `0` |
| `substr(start, length)`	| from start get length characters | allows negative `start` |


1. `"STRING".slice`:
   1. Returns the part of the string from `start` to (but not including) `end`.
   2. Negative values for `start`/`end` are also **possible**.
         1. ```js
            let str = "stringify";
            alert( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
            alert( str.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0

            // If there is no second argument, then slice goes till the end of the string:
            alert( str.slice(2) ); // 'ringify', from the 2nd position till the end

            // NEGATIVE
            // start at the 4th position from the right, end at the 1st from the right
            alert( str.slice(-4, -1) ); // 'gif'
            ```
            
2. `"STRING".substring`:
   1. Returns the part of the string between `start` and `end` (not including `end`).
   2. Negative arguments are (unlike slice) **not** supported, they are treated as `0`.
   3. This is almost the same as `slice`, but it allows start to be `greater` than `end` (in this case it simply swaps `start` and `end` values).
         1. ```js
            let str = "stringify";

            // these are same for substring
            alert( str.substring(2, 6) ); // "ring"
            alert( str.substring(6, 2) ); // "ring"  (IT SWAPS THE VALUES)

            // ...but not for slice:
            alert( str.slice(2, 6) ); // "ring" (the same)
            alert( str.slice(6, 2) ); // "" (an empty string)
            ```

3. `"STRING".substr`:
   1. Returns the part of the string from `start`, with the given `length`.
   2. this one allows us to specify the `length` instead of the ending position:
   3. it’s not recommended to use it. In practice, it’s supported everywhere.
         1. ```js
            let str = "stringify";
            alert( str.substr(2, 4) ); // 'ring', from the 2nd position get 4 characters

            // The first argument may be negative, to count from the end:
            alert( str.substr(-4, 2) ); // 'gi', from the 4th position get 2 characters
            ```


## Comparing strings

1. A lowercase letter is always greater than the uppercase:
   1. `alert( 'a' > 'Z' ); // true`
2. Letters with diacritical marks are “out of order”:
   1. `alert( 'Österreich' > 'Zealand' ); // true`

### str.codePointAt(pos)

- Returns a decimal number representing the code for the character at position `pos`:
    - ```js
      // different case letters have different codes
      alert( "Z".codePointAt(0) ); // 90
      alert( "z".codePointAt(0) ); // 122
      alert( "z".codePointAt(0).toString(16) ); // 7a (if we need a hexadecimal value)
      ```
### String.fromCodePoint(code)

- Creates a character by its numeric `code`

```js
alert( String.fromCodePoint(90) ); // Z
alert( String.fromCodePoint(0x5a) ); // Z (we can also use a hex value as an argument)
```

<table style="width: 500px" align="center">
<tr>
<td>

```js
let str = '';

for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
alert( str );
// Output:
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ
```

</td>
</tr>
</table>