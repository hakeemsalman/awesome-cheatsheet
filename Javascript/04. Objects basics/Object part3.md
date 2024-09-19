# Optional chaining '?.'

- The optional chaining ?. is a safe way to access nested object properties, even if an intermediate property doesn’t exist.

## Optional chaining 

- The optional chaining `?.` stops the evaluation if the value before `?.` is `undefined` or `null` and returns undefined.
- In other words, `value?.prop`:
  - works as `value.prop`, if `value` exists,
  - otherwise (when `value` is `undefined/null`) it returns `undefined`.

> The `?.` checks the **left part** for `null`/`undefined` and allows the evaluation to proceed if it’s not so.
```js
let user = {}; // user has no address

console.log(user.address.street) // Error Cannot read properties of undefined (reading 'street')

console.log( user.address?.street ); // undefined (no error)
```

<table style="width: 700px">
<tr>
<td>

&#9888; **Don’t overuse the optional chaining**

- We should use `?.` only where it’s ok that something doesn’t exist.
- For example, if according to our code logic `user` object must exist, but `address` is optional, then we should write `user.address?.street`, but not `user?.address?.street`.
- Then, if `user` happens to be undefined, we’ll see a programming error about it and fix it. Otherwise, if we overuse `?.`, coding errors can be silenced where not appropriate, and become more difficult to debug.

</td>
</tr>
<tr>
<td>

&#9888; **The variable before ?. must be declared**

- If there’s no variable user at all, then `user?.anything` triggers an error:

```js
// ReferenceError: user is not defined
let result = user?.address;
```

- The variable must be declared (e.g. `let`/`const`/`var` `user` or as a `function` parameter). The optional chaining works only for **declared** variables.

</td>
</tr>
<tr>
<td>

&#9888; **We can use `?.` for safe reading and deleting, but not writing**

- The optional chaining `?.` has no use on the left side of an assignment.

```js
let user = null;

user?.name = "John"; // Error, doesn't work
// because it evaluates to: undefined = "John"
```
</td>
</tr>

</table>

### Other variants: ?.() , ?.[]

- The optional chaining `?.` is not an operator, but a **special** syntax construct, that also works with **functions** and **square brackets**.

1. The `?.()` checks the left part: if the `admin` function exists, then it runs (that’s so for `userAdmin`). Otherwise (for `userGuest`) the evaluation stops without errors.
   1. ```js
      let userAdmin = {
        admin() {
          alert("I am admin");
        }
      };

      let userGuest = {};

      userAdmin.admin?.(); // I am admin

      userGuest.admin?.(); // nothing happens (no such method)
      ```
2. The `?.[]` syntax also works, if we’d like to use brackets `[]` to access properties instead of dot `.`. Similar to previous cases, it allows to safely read a property from an object that may not exist.
   1. ```js
      let key = "firstName";

      let user1 = {
        firstName: "John"
      };

      let user2 = null;

      alert( user1?.[key] ); // John
      alert( user2?.[key] ); // undefined
      ```

### Summary

- The optional chaining `?.` syntax has three forms:
  1. `obj?.prop` – returns `obj.prop` if `obj` exists, otherwise `undefined`.
  2. `obj?.[prop]` – returns `obj[prop]` if `obj` exists, otherwise `undefined`.
  3. `obj.method?.()` – calls `obj.method()` if `obj.method` exists, otherwise returns `undefined`.

# Symbols

