# Regex

## Intro

- Regex is short for `Regular Expression`. It helps to match, find or manage text.

> Understand? `OK` or NOT
>
> `/ OK /g`

## What is Regular expression

- Regular Expressions are a string of characters that express a search pattern. Often abbreviated as `Regex` or `Regexp`. It is especially used to find or replace words in texts. In addition, we can test whether a text complies with the rules we set.
- **For example**, let's say you have a list of filenames. And you only want to find files with the `pdf` extension.
  - Following typing an expression `^\w+\.pdf$` will work. The meaning of the definitions in this expression will become clearer as the steps progress.

> readme.md  
> `document.pdf`  
> image.png  
> music.mp4  
> `manual.pdf`  
> 
> `/ ^\w+\.pdf$ /gm`

## 1. Basic Matchers

- The character or word we want to find is written directly. It is similar to a normal search process. For example, to find the word `curious` in the text, **type the same.**

> “I have no special talents. I am only passionately `curious`.”  
> 
> ― Albert Einstein
>
> `/ curious /gm `


## 2. Dot .: Any Character

- The **period** `.` allows selecting **any character**, including special characters and spaces. Type a period `.` in the Regex field to proceed.

> `abcABC123 .:!?`
>
> `/ . /g`

## 3. Character Sets [abc]

- If one of the characters in a word can be various characters, we write it in square brackets `[]` with all alternative characters. For example, to write an expression that can find all the words in the text, type the characters `a`, `e`, `i`, `o`, `u` adjacently within square brackets `[]`.

> `bar` `ber` `bir` `bor` `bur`
>
> `/ b[aeiou]r /g`


## 4. Negated Character Sets [^abc]

- To find all words in the text below, except for `ber` and `bor`, type `e` and `o` side by side after the caret `^` character inside square brackets `[]`.

> `bar` ber `bir` bor `bur`
>
> `/ b[^eo]r /g`





## 5. Letter Range[a-z]

- To find the letters in the specified range, the starting letter and the ending letter are written in square brackets `[]` with a dash between them `-`.
- It is case-sensitive. Type the expression that will select all lowercase letters between `e` and `o`, including themselves.

> abcd`efghijklmno`pqrstuvwxyz
>
> `/ [e-o] /g`


## 6. Number Range[0-9]

- To find the numbers in the specified range, the starting number and the ending number are written in square brackets `[]` with a dash `-` between them.
- Write an expression that will select all numbers between `3` and `6`, including themselves.

> 012`3456`789
>
> `/ [3-6] /g`


# Practice Basics

1. **Practice: Basic Matcher**

- Write the expression that will select the words of in the text.
  
> “Every man takes the limits `of` his own field `of` vision for the limits `of` the world.”
> 
> ― Arthur Schopenhauer

> `/ of /g`


2. **Practice: Any Character**

Type the expression to select individual letters, numbers, spaces, and special characters in the text. The expression you type must match any character.

> `az AZ 09 _- = !? ., :;`
> 
> `/ . /g`


3. **Practice: Character Sets**

Write the phrase that matches each word in the text. The only characters that change are the initials of the words.

> `beer` `deer` `feer`
> 
> `/ [bdf]eer /g`


4. **Practice: Negated Character Sets**

Write down the expression that will match anything other than the words `beor` and `beur` in the text. Do this using the negated character set.

> `bear` beor `beer` beur
> 
> `/ be[^ou]r /g`

5. **Practice: Letter Range**

- Write the expression that will select the letters from `g` to `k` in the text.
- `g` and `k` letters should also be included in this range.

> abcdef`ghijk`lmnopqrstuvwxyz
>
> `/ [g-k] /g`

6. **Practice: Number Range**

- Type an expression to select numbers from `2` to `7` in the text.
- `2` and `7` should also be included in this range.

> 01`234567`89
>
> `/ [2-7] /g`


# Repetitions

- Some special characters are used to specify how many times a character will be repeated in the text. These special characters are:
  - **plus**  `+`
  - **asterisk**  `*`
  - **question mark**  `?`.

## 1. Asterisk `*`

- We put an **asterisk** `*` after a character to indicate that the character may **either not match at all or can match many times**.
- For example, indicate that the letter `e` should never occur in the text, or it can occur once or more side by side.

> `br` `ber` `beer`
>
> `/ be*r /g`

## 2. Plus Sign `+`

- To indicate that a character can occur **one or more times**, we put a plus sign `+` after a character.
- For example, indicate that the letter `e` can occur one or more times in the text.

> br `ber` `beer`
>
> `/ be+r /g`

## 3. Question Mark ?

- To indicate that a character is **optional**, we put a `?` question mark after a character.
- For example, indicate that the following letter `u` is optional.

> `color`, `colour`
>
> `/ colou?r /g`

## 4. Curly Braces

### Part 1 `{}`

- To express a certain **number of occurrences** of a character, at the end we write curly braces `{n}` along with how many times we want it to occur.
- For example, indicate that the following letter `e` can occur only **2 times in a row.**

> ber `beer` beeer beeeer
>
> `/ be{2}r /g`

### Part 2 `,`

- To express at **least a certain number of occurrences** of a character, immediately after the character we write at least how many times we want it to occur in a row followed by a comma `,` and wrapped inside curly braces `{n, }`.
- For example, indicate that the following letter `e` can occur at **least 3 times in a row**.

> ber beer `beeer` `beeeer`
>
> `/ be{3,} /g`

### Part 3 `{x,y}`

- To express the occurrence of a character in a **certain number range**, we write curly braces `{x,y}` for the inclusive interval.
- For example, indicate that the following letter `e` can only occur **between 1 and 3 times in a row**.

> `ber` `beer` `beeer` beeeer
>
> `/ be{1,3}r /g`


# Practice Repitition

1. **Practice: Number Range**

- Use the asterisk `*` to write the expression that will select each word,
- suitable for the absence of the letter `e` in the text and the presence of one or more.

> `dp` `dep` `deep`
>
> `/ de*p /g`

2. **Practice: Plus Sign `+`**

- Write the expression using the plus sign `+` to select words in which the letter `e` occurs one or more times in the text.

> dp `dep` `deep`
>
> `/ de+p /g`


3. **Practice: Question Mark `?`**

- Write the expression indicating that the letter `n` is optional in the text, using the question mark `?`.
- Thus, both the words `a` and `an` can be selected.

> `a`, `an`
>
> `/ an? /g`


4. **Practice: Curly Braces**
   1. **Part 1**
      - Write the expression using curly braces `{}` that will find texts containing 4 numbers side by side. Remember that the range `[0-9]` will match a single digit.
      > Release 10/9/`2021`
      > 
      > `/ [0-9]{4} /g`
   2. **Part 2**
      - Write the expression using curly braces `{}` that will find texts containing at least `2` numbers side by side.
      > Release `10`/9/`2021`
      >
      > `/ [0-9]{2,} /g`
   3. **Part 3**
      - Write the expression using curly braces `{}` that will find texts containing at least `1` and at most `4` numbers side by side.
      > Release 10/9/2021
      >
      > `/ [0-9]{1,4} /g`

# Grouping

## Parentheses ( ): Grouping

- We can **group an expression** and use these groups to **reference or enforce some rules**.
- To group an expression, we enclose `()` in **parentheses**. For now just group `haa` below

> ha-ha, `haa`-`haa`
> 
> `/ (haa) /g`

## Referencing a Group

- The words `ha` and `haa` are grouped below. The first group is used by writing `\1` to avoid rewriting.
- Here `1` denotes the order of grouping. Type `\2` at the end of the expression to refer to the second group.

> ha-ha,haa-haa
>
> `/ (ha)-\1,(haa)-\2 /g`



