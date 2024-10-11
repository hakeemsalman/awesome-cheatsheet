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