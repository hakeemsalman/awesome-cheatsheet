# Node JS

## Topics

1. [What is nodejs](#what-is-node-js)
1. [Prerequisites](#prerequisites)
1. [Why use node?](#why-use-node)

## What is node js

As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. [https://nodejs.org/en/about](https://nodejs.org/en/about)

1. JavaScript Runtime (NOT a language or a framework)
1. Built on the V8 JavaScript engine (Same a Google Chrome)
1. Written in C++
1. Essentially allows us to run JavaScript code on the server

## Prerequisites
- JavaScript Fundamentals (Objects, Arrays, Conditionals, etc)
- HTTP (status codes, headers, etc)
- JSON
- Arrow Functions
- Promises
- MVC Pattern

## Why use node?
1. Fast, efficient and highly sclabale
1. Event driven, non-blocking I/O asynchronous model
    - Non-blocking Input/Output:
        -  Allows code to continue running while waiting for tasks like reading files or making network requests.
        -  Increases efficiency by not blocking the entire program during I/O operations.
    - Single-threaded Event Loop:
        -  Node.js uses a single thread to handle multiple tasks.
        -  The event loop manages asynchronous operations, enabling efficient handling of concurrent tasks without blocking the program.
        -  Supports concurrency via events & callbacks
        -  `EventEmitter` class is used to bind events and listeners
1. Popular in the industry
1. Same language on the front and back end (JS)

## Real time used of Nodejs
- REST API & Microservices
- Real Time Services (Chat, Live Updates)
- CRUD Apps - Blogs, Shopping Carts, Social Networks
- Tools & Utilities

> Short Answer: Anything that is not CPU intensive, means I/O operations are asynchronous, these things CPU intensive making request to server. sending data to a server. getting response from a server. CPU calculations.  

## NPM

Node Package Manager

- Install 3rd party packages (frameworks, libraries, tools, etc)
- Packages get stored in the "node_modules" folder
- All dependencies are listed in a "package.json" file
- NPM scripts can be created to run certain tasks such as run a server

- *npm init* &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &nbsp; *Generates a package.json file*
- *npm install express*  &emsp; &emsp; &ensp; &nbsp;*Installs a package locally*
- *nom install -g nodemon* &emsp;&nbsp;*Installs a package globally*

## Node Modules

- Node Core Modules (path, fs, http, etc)
- 3rd party modules/packages installed via NPM
- Custom modules (files)

*const path = require ('path');*  
*const myFile = require ('./myFile');*

## Initialize package.json

```shell
$ npm init # initializing the package.json
# Provide details
```
Then it shows on screen a utility will walk you through creating a package.json file.
Type the information based on it ask.

```json
{
  "name": "hello-world",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Salman",
  "license": "ISC"
}
```

## Installing Packages

Search in [NPM -  Node Package Manager website](https://www.npmjs.com/) as `sillyname`. A random name generator.

```shell
$ npm install 'package-name'

$ npm install uuid # It will install the Unique Random Id generator package in that folder

$ npm install --save-dev nodemon # It will install nodemon package as Developer dependency package.
$ npm install -D nodemon  # short hand 

$ npm i sillyname # short hand `i` for `install`
``` 
From website copy the two lines of code and paste into `index.js`

```js
var generateName = require('sillyname');
var sillyName = generateName();

console.log(`My name is ${sillyName}.`); // My name is 'Joker'
// Run index.js in terminal `node index.js`
```


## Using Node.js

Node Read Eval Print Loop (Node REPL) is a computer environment where user inputs are read and evaluated, and then the results are returned to the user.

In terminal, just type `node` and hit enter.

> $ node

You will see the welcome note(you are in REPL environment)and right hand arrow `>` and type `.help`, to know about REPL.

`ctrl` + `c` to exit the REPL environment

create a `index.js` file in any folder like (Node folder), write a code `console.log("Hello world!")` and then open terminal type `node index.js`. You will see the output as `Hello world!`.


## Exporting Modules

In Node.js, `module.exports` is a special object that is used to define what a *module exports* and makes it available for other modules to require.

```js
//  Basic Exporting and requiring/Importing modules
// person.js
const person = {
  name: 'Salman',
  age: 25,
}
module.exports = Person;

// Index.js
const person = require('./person');
console.log(person); // output:  { name: 'Salman', age: 25, }


// Class level
// Person.js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age}`);
  }
}
module.exports = Person;

// Index.js
const Person = require('./Person');
const person1 = new Person('Salman', 25);
person1.greeting(); // output:  My name is Salman and I am 25
```

## Directory 

`__dirname` and `__filename` are special variables that provide information about the current directory and filename of the module, respectively.

```js
console.log(__dirname)    // /path/to/your/project/
console.log(__filename)   // /path/to/your/project/index.js
```

### ECMAScript Module

To use ESM, we have to add dependencies in `package.json` file as `"type":"module",`.

```diff
{
  "name": "hello-world",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
+ "type":"module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Salman",
  "license": "ISC"
}
```

`ESM` is new module. Default type is `CJS`

1. CJS
```js
var pack = require('<packageName>');

var pack = require('sillyname');
```

2. ESM
```js
import pack from "<packageName>";

import pack from "sillyname";
```


## Code Modules

[Node Code Modules](https://nodejs.org/docs/latest/api/)

## Path modules

```js
// path_demo.js
const path = require('path');

// Base file name
console.log(path.basename(__filename));   // path_demo.js

// Directory name
console.log(path.dirname(__filename));    // usr/desktop/node/demo

// File extension
console.log(path.extname(__filename));    // .js

// Create path object
console.log(path.parse(__filename));
/*
{ root: "/",
  dir: '/Users/bradtraversy/node_crash_course/reference',
  base: 'path_demo. js'
  ext: ' js',
  name: 'path demo'
}
*/

// Create path object
console.log(path.parse(__filename).base);                 // path_demo.js

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));  // usr/desktop/node/demo/test/hello.html
```

## fs module

