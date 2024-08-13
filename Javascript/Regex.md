1. Letter Range[a-z]
   1. To find the letters in the specified range, the starting letter and the ending letter are written in square brackets `[]` with a dash between them `-`.
   2. It is case-sensitive. Type the expression that will select all lowercase letters between e and o, including themselves.
2. Number Range[0-9]
   1. To find the numbers in the specified range, the starting number and the ending number are written in square brackets `[]` with a dash `-` between them.
   2. Write an expression that will select all numbers between 3 and 6, including themselves.

## Practice

1. **Practice: Basic Matcher**

> “Every man takes the limits of his own field of vision for the limits of the world.”
> ― Arthur Schopenhauer

```js
/ of /g
```

2. **Practice: Any Character**

Type the expression to select individual letters, numbers, spaces, and special characters in the text. The expression you type must match any character.

> az AZ 09 _- = !? ., :;

```js
/ . /g
```

3. **Practice: Character Sets**

Write the phrase that matches each word in the text. The only characters that change are the initials of the words.

> beer deer feer

```js
/ [bdf]eer /g
```

4. **Practice: Negated Character Sets**

Write down the expression that will match anything other than the words `beor` and `beur` in the text. Do this using the negated character set.

> bear beor beer beur

```js
/  /g
```