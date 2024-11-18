# TypeScript Basics

> this lesson from [CodeMastery.dev](https://codemastery.dev/ts/interactive-handbook/intro/0)

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

## Function Type Expressions

- Function Type Expressions are used to describe the types of functions, including their `parameters` and `return` values.
- They provide a way to define what a function’s **input** and **output** should look like, ensuring type safety.

```cs
(parameter1: type, parameter2: type) => returnType
```

> **Parameters**: Specify the names and types of the function's inputs.
> **Return Type**: Defines the type of value the function will return.

### Examples

#### Basic Function Type Expression

```ts
// Define a type for a function that takes two numbers and returns a number
type AddFunction = (a: number, b: number) => number;

const add: AddFunction = (x, y) => x + y;

console.log(add(5, 10)); // Output: 15
```

#### Function as a Parameter

You can use a function type as a parameter to another function.

```ts
type GreetFunction = (name: string) => string;

function greetUser(greet: GreetFunction, userName: string) {
  console.log(greet(userName));
}

const greet: GreetFunction = (name) => `Hello, ${name}!`;

greetUser(greet, "Salman"); // Output: Hello, Salman!
```

---

### Using Function Types in Objects

You can include function type expressions within object types.

```ts
type Calculator = {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
};

const calculator: Calculator = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
};

console.log(calculator.add(10, 5)); // Output: 15
console.log(calculator.subtract(10, 5)); // Output: 5
```

---

### Optional Parameters in Function Type

You can define optional parameters in a function type by using `?`.

```ts
type LogFunction = (message: string, userId?: number) => void;

const logMessage: LogFunction = (message, userId) => {
  console.log(message);
  if (userId !== undefined) {
    console.log(`User ID: ${userId}`);
  }
};

logMessage("Operation successful!"); 
// Output: Operation successful!

logMessage("User logged in", 123); 
// Output:
// Operation successful!
// User ID: 123
```

---

### Rest Parameters in Function Type

If a function accepts multiple arguments, you can use rest parameters.

```ts
type SumFunction = (...numbers: number[]) => number;

const sum: SumFunction = (...nums) => nums.reduce((acc, curr) => acc + curr, 0);

console.log(sum(1, 2, 3, 4, 5)); // Output: 15
```

---

### Return Type as `void`

If a function doesn’t return a value, its return type is `void`.

```ts
type LogFunction = (message: string) => void;

const log: LogFunction = (msg) => {
  console.log(msg);
};

log("This is a message."); // Output: This is a message.
```

---

## Unions

In TypeScript, **unions** allow a variable or parameter to have **multiple possible types**. This is useful when you want flexibility but still maintain type safety.

---

### **Syntax**

To define a union type, use the `|` symbol between types.

```ts
type MyType = Type1 | Type2 | Type3;
```

- A union type means the value can be **any one of the specified types**, but not multiple at the same time.

---

### **Examples**

#### Basic Union Types

```ts
let value: string | number;

value = "Hello";  // Valid
value = 42;       // Valid
// value = true;  // Error: Type 'boolean' is not assignable to type 'string | number'
```

---

### **Unions in Functions**

You can use unions for function parameters or return values.

```ts
function formatValue(value: string | number): string {
  return `Formatted value: ${value}`;
}

console.log(formatValue("TypeScript")); // Output: Formatted value: TypeScript
console.log(formatValue(2024));         // Output: Formatted value: 2024
```

---

### **Using Union Types in Arrays**

An array can also hold values of different types using union types.

```ts
let data: (string | number)[] = ["Hello", 42, "World", 3.14];

data.push("TypeScript");  // Valid
data.push(100);           // Valid
// data.push(true);       // Error: Type 'boolean' is not assignable to type 'string | number'
```

---

### **Discriminating Union Types**

When working with unions, TypeScript often needs a way to determine the specific type. You can use **type narrowing** with `typeof` or custom properties to help TypeScript.

#### Example: Type Narrowing with `typeof`

```ts
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(`It's a string: ${value.toUpperCase()}`);
  } else {
    console.log(`It's a number: ${value * 2}`);
  }
}

printValue("TypeScript"); // Output: It's a string: TYPESCRIPT
printValue(10);           // Output: It's a number: 20
```

---

#### Example: Type Narrowing with Custom Properties

```ts
type Circle = {
  kind: "circle";
  radius: number;
};

type Rectangle = {
  kind: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Rectangle;

function calculateArea(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.width * shape.height;
  }
}

const myCircle: Circle = { kind: "circle", radius: 5 };
const myRectangle: Rectangle = { kind: "rectangle", width: 10, height: 20 };

console.log(calculateArea(myCircle));      // Output: 78.54
console.log(calculateArea(myRectangle));  // Output: 200
```

---

### **Optional Parameters with Unions**

Union types can work with optional parameters, giving even more flexibility.

```ts
function greet(message: string | undefined) {
  console.log(message ? message : "Hello!");
}

greet("Hi there!"); // Output: Hi there!
greet(undefined);   // Output: Hello!
```

---

### **Union Types with Aliases**

For reusability, you can define union types using `type` aliases.

```ts
type ID = string | number;

function getUserID(id: ID) {
  console.log(`User ID: ${id}`);
}

getUserID(123);      // Output: User ID: 123
getUserID("abc123"); // Output: User ID: abc123
```

---

### **Key Points to Remember**

1. **Flexibility with Safety:** Unions provide flexibility by allowing multiple types while maintaining type checking.
2. **Type Narrowing:** Use `typeof` or other techniques to handle different types in a union safely.
3. **Reusable Types:** Combine unions with `type` aliases for better code organization.

## null and undefined

`null` and `undefined` are two distinct types in TypeScript that represent absence or lack of value. While they may seem similar, they have key differences and specific use cases.

---

### **Key Differences**

| **Type**        | **Meaning**                          | **Example**                     |
|------------------|--------------------------------------|----------------------------------|
| `undefined`     | A variable has been declared but not assigned a value. | `let a: undefined;`            |
| `null`          | Explicitly indicates the absence of a value. | `let b: null = null;`          |

---

### **Default Behavior in TypeScript**

- By default, `null` and `undefined` are **assignable to all types**, but this can be restricted using `strictNullChecks` in `tsconfig.json`.
  - If **`strictNullChecks`** is enabled:
    - You must explicitly handle `null` and `undefined`.
    - `null` and `undefined` are not automatically assignable to other types.

---

### **Examples**

#### **Undefined Variable**

```ts
let x: undefined;
console.log(x); // Output: undefined

let y; // Variable declared without a type or value
console.log(y); // Output: undefined
```

#### Example: Union with `null`

```ts
let age: number | null;

age = 23;
console.log(age); // Output: 23

age = null;
console.log(age); // Output: null
```

---

### **Optional Properties**

An optional property in an object can be `undefined` if not provided.

```ts
type User = {
  name: string;
  age?: number; // Optional
};

const user1: User = { name: "Salman" };
console.log(user1.age); // Output: undefined

const user2: User = { name: "Ali", age: 25 };
console.log(user2.age); // Output: 25
```

---

### **Default Parameters with Undefined**

If a function parameter is not provided, it will be `undefined`.

```ts
function greet(message?: string) {
  console.log(message || "Hello!");
}

greet();            // Output: Hello!
greet("Hi there!"); // Output: Hi there!
```

---

### **Strict Null Checking**

If **`strictNullChecks`** is enabled, TypeScript ensures you handle `null` and `undefined` explicitly.

#### Example: Without `strictNullChecks` (Default Behavior)

```ts
let message: string;
message = null;      // No error
message = undefined; // No error
```

#### Example: With `strictNullChecks`

```ts
let message: string;
message = null;      // Error: Type 'null' is not assignable to type 'string'
message = undefined; // Error: Type 'undefined' is not assignable to type 'string'
```

---

### **Best Practices**

1. Use `strictNullChecks` to avoid unexpected bugs.
2. Explicitly handle `null` and `undefined` when they are part of your type.
3. Use optional chaining (`?.`) to safely access properties or methods on potentially null/undefined objects.

---

### **Optional Chaining and Nullish Coalescing**

#### Optional Chaining (`?.`)

```ts
let user: { name?: string } = {};
console.log(user.name?.toUpperCase()); // Output: undefined (No Error)
```

#### Nullish Coalescing (`??`)

```ts
let input: string | null = null;
console.log(input ?? "Default Value"); // Output: Default Value
```

---

## The never

The `never` type is a special type in TypeScript that represents values that **never occur**. This means a variable with the `never` type can never hold a value, and functions that return `never` do not successfully complete—they either throw an error or never return at all.

---

### **Use Cases for `never`**

1. **Unreachable Code**: Code that is logically unreachable, such as after a `throw` statement.
2. **Exhaustiveness Checking**: Ensuring all cases in a conditional (like a `switch` statement) are handled.
3. **Infinite Loops**: Functions that never terminate.

---

### **Key Features**

- **Never-Returning Functions**:
  Functions that throw errors or run infinitely are of type `never` because they don’t produce a return value.

- **Exhaustive Type Checking**:
  When all possible cases in a union type are not handled, TypeScript can use `never` to catch those errors.

---

### **Examples**

#### 1. **Functions That Throw Errors**

```ts
function throwError(message: string): never {
  throw new Error(message);
}

// Usage
throwError("Something went wrong!"); // This function never returns
```

---

#### 2. **Functions That Never Return**

```ts
function infiniteLoop(): never {
  while (true) {
    console.log("Running...");
  }
}

// Usage
// infiniteLoop(); // Uncommenting this will make the program run forever
```

---

#### 3. **Exhaustive Type Checking**

`never` is useful when handling all possible cases of a union type.

```ts
type Animal = "cat" | "dog" | "fish";

function handleAnimal(animal: Animal): string {
  switch (animal) {
    case "cat":
      return "Meow!";
    case "dog":
      return "Woof!";
    case "fish":
      return "Blub!";
    default:
      const _exhaustiveCheck: never = animal; // TypeScript ensures no new case is added
      return _exhaustiveCheck;
  }
}
```

- If a new case (like `"bird"`) is added to the `Animal` type but not handled in the `switch` statement, TypeScript will throw an error, ensuring no case is missed.

---

#### 4. **Unreachable Code Example**

If a function's logic guarantees it will never complete:

```ts
function unreachable(): never {
  throw new Error("This code should not be reached.");
}
```

---

### **Differences Between `never` and `void`**

| **Aspect**         | **`void`**                          | **`never`**                        |
|---------------------|-------------------------------------|-------------------------------------|
| **Purpose**         | Represents the absence of a return value. | Represents a function that never returns. |
| **Use Case**        | Functions that return nothing (e.g., `console.log`). | Functions that throw errors or run forever. |
| **Assignable To**   | Can assign `void` to other types (rarely useful). | Cannot assign `never` to any type. |

---

### **Best Practices**

1. Use `never` to define functions that are not supposed to return (e.g., error-handling functions).
2. Leverage `never` in union types for exhaustive type checking.
3. Avoid using `never` unless the function or logic explicitly indicates its need.

---
