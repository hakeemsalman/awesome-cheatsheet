
# TypeScript Basics

## Type Annotations

- Type annotations are used to explicitly declare the types of variables.
- To declare a type, add `:type` after the variable name.

```ts
let myName: string = 'Salman';
let age: number = 23;
let isMale: boolean = true;
```

## Type Aliases

- **Type Aliases** allow you to create your own named types.
- This is useful for reusability and consistency across your code.

```ts
type StringType = string;  // Creating a type alias for string
type NumberType = number;  // Creating a type alias for number
type BooleanType = boolean; // Creating a type alias for boolean

let myName: StringType = 'Salman';
let mySurname: StringType = 'Shaik';
```

## Array Types

- **Array Types** are used to define the type of elements within an array.
- To specify an array of a type, add `[]` after the type.

```ts
type NumberArray = number[];  // Creating a type alias for an array of numbers

const numbers: NumberArray = [1, 2, 4, 4, 5, 6, 6];
```

## Object Types

- **Object Types** are used to define the shape of an object, specifying the type of each property.

```ts
type User = {
  name: string;
  age: number;
  isHuman: boolean;
};

const user: User = {
  name: 'Salman',
  age: 26,
  isHuman: true,
};
```

## Optional Properties

- **Optional Properties** are properties that may or may not be present on an object.
- Use `?:` in the property assignment to mark it as optional.

```ts
type User = {
  name: string;
  language: "typescript";
  age: number;
  occupation?: string; // Optional property
};

const user1: User = {
  name: 'Johanne',
  language: "typescript",
  age: 54,
  occupation: 'Steam Engine Operator',
};

const user2: User = {
  name: 'Marinette',
  language: "typescript",
  age: 34,
  // occupation is missing, no error because it's optional
};
```

## Argument Types

- Function arguments can also be typed to ensure the function is called with the correct values.
- This helps with code safety and gives useful hints when using the function.

```ts
function eating(sound: string, duration: number) {
  console.log(`${sound} for ${duration} seconds`);
}

eating('chup chup', 10);
```

## Return Types

- **Return Types** define the type of value a function will return.
- It’s optional, but helpful in making the code predictable and easy to follow.
- use a colon `:` after the parenthesis and before the opening brace.
```ts
function add(a: number, b: number): number {
  return a + b;
}

const result = add(3, 4);  // result will be of type number
```
