# TypeScript Basics

> this lesson from [CodeMastery.dev](https://codemastery.dev/ts/interactive-handbook/intro/0)


- [TypeScript Basics](#typescript-basics)
  - [Type Annotations](#type-annotations)
  - [Type Aliases](#type-aliases)
  - [Array Types](#array-types)
  - [Object Types](#object-types)
  - [Optional Properties](#optional-properties)
  - [Argument Types](#argument-types)
  - [Return Types](#return-types)
  - [Function Type Expressions](#function-type-expressions)
    - [Examples](#examples)
      - [Basic Function Type Expression](#basic-function-type-expression)
      - [Function as a Parameter](#function-as-a-parameter)
    - [Using Function Types in Objects](#using-function-types-in-objects)
    - [Optional Parameters in Function Type](#optional-parameters-in-function-type)
    - [Rest Parameters in Function Type](#rest-parameters-in-function-type)
    - [Return Type as `void`](#return-type-as-void)
  - [Unions](#unions)
    - [**Syntax**](#syntax)
    - [**Examples**](#examples-1)
      - [Basic Union Types](#basic-union-types)
    - [**Unions in Functions**](#unions-in-functions)
    - [**Using Union Types in Arrays**](#using-union-types-in-arrays)
    - [**Discriminating Union Types**](#discriminating-union-types)
      - [Example: Type Narrowing with `typeof`](#example-type-narrowing-with-typeof)
      - [Example: Type Narrowing with Custom Properties](#example-type-narrowing-with-custom-properties)
    - [**Optional Parameters with Unions**](#optional-parameters-with-unions)
    - [**Union Types with Aliases**](#union-types-with-aliases)
    - [**Key Points to Remember**](#key-points-to-remember)
  - [null and undefined](#null-and-undefined)
    - [**Key Differences**](#key-differences)
    - [**Default Behavior in TypeScript**](#default-behavior-in-typescript)
    - [**Examples**](#examples-2)
      - [**Undefined Variable**](#undefined-variable)
      - [Example: Union with `null`](#example-union-with-null)
    - [**Optional Properties**](#optional-properties-1)
    - [**Default Parameters with Undefined**](#default-parameters-with-undefined)
    - [**Strict Null Checking**](#strict-null-checking)
      - [Example: Without `strictNullChecks` (Default Behavior)](#example-without-strictnullchecks-default-behavior)
      - [Example: With `strictNullChecks`](#example-with-strictnullchecks)
    - [**Best Practices**](#best-practices)
    - [**Optional Chaining and Nullish Coalescing**](#optional-chaining-and-nullish-coalescing)
      - [Optional Chaining (`?.`)](#optional-chaining-)
      - [Nullish Coalescing (`??`)](#nullish-coalescing-)
  - [The never](#the-never)
    - [**Use Cases for `never`**](#use-cases-for-never)
    - [**Key Features**](#key-features)
    - [**Examples**](#examples-3)
      - [1. **Functions That Throw Errors**](#1-functions-that-throw-errors)
      - [2. **Functions That Never Return**](#2-functions-that-never-return)
      - [3. **Exhaustive Type Checking**](#3-exhaustive-type-checking)
      - [4. **Unreachable Code Example**](#4-unreachable-code-example)
    - [**Differences Between `never` and `void`**](#differences-between-never-and-void)
    - [**Best Practices**](#best-practices-1)
- [Fundamentals Concepts](#fundamentals-concepts)
- [Type Inference](#type-inference)
    - [**How It Works**](#how-it-works)
    - [**Key Features of Type Inference**](#key-features-of-type-inference)
    - [**Explicit Types vs. Inference**](#explicit-types-vs-inference)
    - [**Benefits of Type Inference**](#benefits-of-type-inference)
    - [**When to Use Explicit Types**](#when-to-use-explicit-types)
    - [**Examples**](#examples-4)
      - [1. Variable Inference](#1-variable-inference)
      - [2. Function Inference](#2-function-inference)
      - [3. Contextual Typing](#3-contextual-typing)
    - [**Best Practices**](#best-practices-2)
- [Narrowing](#narrowing)
    - [**How Does Narrowing Work?**](#how-does-narrowing-work)
    - [**Common Type Narrowing Techniques**](#common-type-narrowing-techniques)
    - [**Example: Combining Narrowing Techniques**](#example-combining-narrowing-techniques)
    - [**Key Points to Remember**](#key-points-to-remember-1)
- [Literal Types](#literal-types)
    - [**What Are Literal Types?**](#what-are-literal-types)
    - [**Examples**](#examples-5)
      - [**String Literal Types**](#string-literal-types)
      - [**Number Literal Types**](#number-literal-types)
      - [**Boolean Literal Types**](#boolean-literal-types)
    - [**Why Use Literal Types?**](#why-use-literal-types)
    - [**Combining Literal Types with Other Types**](#combining-literal-types-with-other-types)
      - [Example: Union of Literal and Primitive Types](#example-union-of-literal-and-primitive-types)
    - [**Practical Example**](#practical-example)
    - [**Key Benefits**](#key-benefits)


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

console.log(handleAnimal('cat'))
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
# Fundamentals Concepts

# Type Inference

Type inference is a feature in TypeScript where the compiler **automatically determines the type** of a variable, function return value, or expression based on the context. This helps reduce the need for explicitly declaring types in your code, making it cleaner while still maintaining type safety.

---

### **How It Works**

1. **Variable Initialization**: When you initialize a variable, TypeScript infers its type from the assigned value.

```ts
let age = 25; // Inferred as number
let name = "Salman"; // Inferred as string
let isHuman = true; // Inferred as boolean
```

2. **Function Return Types**: TypeScript infers the return type of a function based on its implementation.

```ts
function add(a: number, b: number) {
  return a + b; // Inferred as number
}

let result = add(2, 3); // result is inferred as number
```

3. **Default Parameters**: Default parameter values help TypeScript infer the parameter type.

```ts
function greet(name = "World") {
  console.log(`Hello, ${name}!`); // name is inferred as string
}
```

4. **Arrays**: TypeScript infers the type of arrays based on their elements.

```ts
let numbers = [1, 2, 3, 4]; // Inferred as number[]
let names = ["Alice", "Bob"]; // Inferred as string[]
```

---

### **Key Features of Type Inference**

1. **Best Common Type**:
   When working with arrays, TypeScript determines a type that all elements can conform to.

```ts
let mixedArray = [1, "hello", true]; // Inferred as (string | number | boolean)[]
```

2. **Contextual Typing**:
   TypeScript infers the type of a function’s arguments based on where the function is used.

```ts
window.onmousedown = function (event) {
  console.log(event.button); // event is inferred as MouseEvent
};
```

3. **Type Widening and Narrowing**:
   - **Widening**: Infers the most general type.
   - **Narrowing**: Reduces a variable’s type based on conditions.

```ts
let value = null; // Inferred as any
value = 42; // Still valid
```

---

### **Explicit Types vs. Inference**

While TypeScript can infer most types, there are cases where explicitly declaring a type improves code readability and avoids ambiguity:

```ts
// Inference
let speed = 60; // Inferred as number

// Explicit declaration
let distance: number = 100; // Clearer to the reader
```

---

### **Benefits of Type Inference**

1. **Less Boilerplate Code**: You don’t have to specify types explicitly.
2. **Readability**: Makes code shorter and easier to read.
3. **Type Safety**: Automatically prevents assigning incompatible values.

---

### **When to Use Explicit Types**

- When writing library code for others to use.
- When the inferred type isn’t clear or might cause confusion.
- For function parameters and return types in complex codebases.

---

### **Examples**

#### 1. Variable Inference

```ts
let count = 10; // Inferred as number
count = "hello"; // Error: Type 'string' is not assignable to type 'number'
```

#### 2. Function Inference

```ts
function multiply(a: number, b: number) {
  return a * b; // Inferred as number
}

let product = multiply(5, 3); // product is inferred as number
```

#### 3. Contextual Typing

```ts
document.addEventListener("click", (event) => {
  console.log(event.clientX); // event is inferred as MouseEvent
});
```

---

### **Best Practices**

1. **Trust TypeScript**: Let it infer types wherever possible.
2. **Be Explicit When Necessary**: Declare types explicitly for complex functions or APIs.
3. **Avoid Overusing `any`**: Rely on inference instead of resorting to `any`.

---

# Narrowing

Narrowing is a process in TypeScript where the type of a variable is refined to a more specific type based on runtime checks. This helps TypeScript make better assumptions about the variable’s type, ensuring type safety and enabling features like IntelliSense.

---

### **How Does Narrowing Work?**

TypeScript begins with a broad type and uses control flow analysis and conditional checks to narrow it down to a more specific type. For example:

```ts
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // id is narrowed to string
  } else {
    console.log(id.toFixed(2)); // id is narrowed to number
  }
}
```

---

### **Common Type Narrowing Techniques**

1. **Using `typeof`**
   - Use `typeof` to narrow down primitive types like `string`, `number`, or `boolean`.

```ts
function checkType(input: string | number) {
  if (typeof input === "string") {
    console.log("It's a string:", input.toUpperCase());
  } else {
    console.log("It's a number:", input.toFixed(2));
  }
}
```

2. **Using `instanceof`**
   - Use `instanceof` to narrow down object types.

```ts
class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function animalSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark(); // Narrowed to Dog
  } else {
    animal.meow(); // Narrowed to Cat
  }
}
```

3. **Using Equality Checks**
   - Direct equality checks can narrow down to specific values or types.

```ts
function checkValue(input: string | null) {
  if (input === null) {
    console.log("It's null.");
  } else {
    console.log("It's a string:", input.toUpperCase());
  }
}
```

4. **Using `in` Operator**
   - The `in` operator checks for the presence of a property in an object, narrowing the type.

```ts
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim(); // Narrowed to Fish
  } else {
    animal.fly(); // Narrowed to Bird
  }
}
```

5. **Custom Type Predicates**
   - Create custom type-checking functions to narrow types.

```ts
type Car = { wheels: number };
type Boat = { sails: number };

function isCar(vehicle: Car | Boat): vehicle is Car {
  return (vehicle as Car).wheels !== undefined;
}

function checkVehicle(vehicle: Car | Boat) {
  if (isCar(vehicle)) {
    console.log("It's a car with", vehicle.wheels, "wheels.");
  } else {
    console.log("It's a boat with", vehicle.sails, "sails.");
  }
}
```

6. **Exhaustive Checks**
   - Use `never` to handle impossible cases in `switch` or conditional statements.

```ts
type Shape = { kind: "circle"; radius: number } | { kind: "square"; side: number };

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    default:
      const _exhaustiveCheck: never = shape; // Ensures all cases are handled
      return _exhaustiveCheck;
  }
}
```

---

### **Example: Combining Narrowing Techniques**

```ts
function process(input: string | number | null) {
  if (input === null) {
    console.log("Input is null.");
  } else if (typeof input === "string") {
    console.log("Input is a string:", input.toUpperCase());
  } else {
    console.log("Input is a number:", input.toFixed(2));
  }
}
```

---

### **Key Points to Remember**

1. **Narrowing Simplifies Code**:
   By reducing broad types to specific types, you can write cleaner, safer, and more efficient code.
   
2. **TypeScript Tracks Narrowing**:
   TypeScript uses control flow analysis to understand and track narrowing across your code.

3. **Best Practices**:
   - Use clear checks (like `typeof`, `instanceof`, and `in`).
   - Leverage custom type predicates for more complex narrowing.
   - Always handle all cases when dealing with union types.

---

# Literal Types

Literal types are a way to specify a variable or parameter to accept only a specific value or a set of predefined values. They help make code more predictable and reduce errors by enforcing stricter types.

---

### **What Are Literal Types?**

Literal types allow a variable to hold a **specific value**. For example:

- A variable can be a **specific string**, like `"hello"`.
- A variable can be a **specific number**, like `42`.
- A variable can be a **specific boolean**, like `true`.

---

### **Examples**

#### **String Literal Types**

```ts
let direction: "left" | "right" | "up" | "down";

direction = "left"; // ✅ Valid
direction = "right"; // ✅ Valid
direction = "forward"; // ❌ Error: Type '"forward"' is not assignable to type '"left" | "right" | "up" | "down"'.
```

---

#### **Number Literal Types**

```ts
let roll: 1 | 2 | 3 | 4 | 5 | 6;

roll = 3; // ✅ Valid
roll = 7; // ❌ Error: Type '7' is not assignable to type '1 | 2 | 3 | 4 | 5 | 6'.
```

---

#### **Boolean Literal Types**

```ts
let isActive: true;

isActive = true; // ✅ Valid
isActive = false; // ❌ Error: Type 'false' is not assignable to type 'true'.
```

---

### **Why Use Literal Types?**

Literal types are especially useful in scenarios where you have a limited set of possible values. For example:

1. **Function Parameters**:
   Literal types help enforce valid inputs.

   ```ts
   function move(direction: "left" | "right" | "up" | "down") {
     console.log(`Moving ${direction}`);
   }

   move("left"); // ✅ Valid
   move("forward"); // ❌ Error
   ```

2. **Configuration Options**:
   Use literal types to define valid configuration settings.

   ```ts
   type Mode = "light" | "dark";

   function setMode(mode: Mode) {
     console.log(`Setting mode to ${mode}`);
   }

   setMode("light"); // ✅ Valid
   setMode("dark"); // ✅ Valid
   setMode("blue"); // ❌ Error
   ```

3. **Discriminated Unions**:
   Literal types are a key part of **discriminated unions**, making complex type systems easier to manage.

   ```ts
   type Circle = { kind: "circle"; radius: number };
   type Square = { kind: "square"; side: number };

   type Shape = Circle | Square;

   function getArea(shape: Shape): number {
     if (shape.kind === "circle") {
       return Math.PI * shape.radius ** 2;
     } else {
       return shape.side ** 2;
     }
   }
   ```

---

### **Combining Literal Types with Other Types**

Literal types are often combined with **union types** or **type aliases** for flexibility.

#### Example: Union of Literal and Primitive Types
```ts
type Status = "success" | "error" | null;

let responseStatus: Status;

responseStatus = "success"; // ✅ Valid
responseStatus = null;      // ✅ Valid
responseStatus = "pending"; // ❌ Error
```

---

### **Practical Example**

Imagine you're building a game where the player can choose a difficulty level:

```ts
type Difficulty = "easy" | "medium" | "hard";

function setDifficulty(level: Difficulty) {
  console.log(`Game difficulty set to ${level}`);
}

setDifficulty("easy"); // ✅ Valid
setDifficulty("hard"); // ✅ Valid
setDifficulty("extreme"); // ❌ Error
```

---

### **Key Benefits**

1. **Enhanced Type Safety**:
   Ensures that only valid values are used.

2. **Improved Code Readability**:
   Makes it clear what values are acceptable.

3. **Editor Assistance**:
   IDEs provide auto-completion for possible values.

---

Would you like to try some examples, or move on to the next topic? 😊