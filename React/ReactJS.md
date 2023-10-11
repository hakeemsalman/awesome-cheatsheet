# ReactJS

## Pre-requisites topics of JS

1. Functions and Arrow Functions
2. Objects
3. Arrays and array methods
4. Destructuring
5. Template literals
6. Ternary Operators
7. ES Modules and Import / Export Syntax

```html
<html>
  <head>
    <link rel="stylesheet" href="index.css" />

    <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

    <!-- Don't use this in production: -->
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script src="index.js" type="text/babel"></script>
  </body>
</html>
```

```js
ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"));
```

> ReactDOM.render( [what you want to render] , [where you want to render] )

## Custom component

```js
function MainContent() {
  return <h1>I'm learning</h1>;
}

ReactDOM.render(<MainContent />, document.getElementById("root"));
```

## Features

1.  Composable
2.  Declarative

3.  ```js
    // ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))

    /* 
    Challenge - recreate the above line of code in vanilla JS by creating and
    appending an h1 to our div#root (without using innerHTML).
    
    - Create a new h1 element
    - Give it some textContent
    - Give it a class name of "header"
    - append it as a child of the div#root
        
    */
    /*        My Code
    const headingElement = document.createElement("h1");
    const divRoot = document.getElementById("root");
    const textNode = document.createTextNode("Hello World");
    headingElement.appendChild(textNode);
    
    headingElement.classList.add("header");
    divRoot.appendChild(headingElement);
    */

    //        Scrimba code

    const h1 = document.createElement("h1");
    h1.textContent = "This is an imperative way to program";
    h1.className = "header";
    document.getElementById("root").append(h1);
    ```

## JSX

_JSX_ stand for Javascript XML. React convert html code to javascript _DOM_ element.

**CHALLANGE**

```js
/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

const navbar = (
  <nav>
    <h1>Bob's Bistro</h1>
    <ul>
      <li>Menu</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

ReactDOM.render(navbar, document.getElementById("root"));
```

## Deploy project

1. Sign up the **Netlify** [account](https://app.netlify.com/signup)
2. Download and unzip the Scrimba file
3. Drag and drop your folder into this [https://app.netlify.com/drop](https://app.netlify.com/drop)

## Import React

1. Use `package.json` to add dependencies of React in project folder instead of adding _CDN's_ link.
2. Then install React with _npm_ manager.
3. Use `import` keyword to apply react functions in your `index.js`

```json
{
  "name": "my-react-app",
  "version": "1.0.0",
  "description": "My first React app",
  "main": "index.js",
  "dependencies": {
    "react": "^17.0.0",
    "react-dom": "^17.0.0"
  }
}
```

```html
<html>
  <head>
    <link rel="stylesheet" href="index.css" />

    <!-- <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
         -->
  </head>
  <body>
    <div id="root"></div>
    <script src="index.pack.js"></script>
    <!-- removed type="text/babel"  -->
  </body>
</html>
```

```js
import React from "react";
import ReactDOM from "react-dom";

const navbar = (
  <nav>
    <h1>Bob's Bistro</h1>
    <ul>
      <li>Menu</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

ReactDOM.render(navbar, document.getElementById("root"));
```

## UPDATE: New React 18

1. Upto React 17 version `ReactDOM.render()` is available.
2. In React 18v, use `createRoot()` before use `render()` method.
3. In `createRoot()` method, add root element that what you want to add.
   - eg: `createRoot(document.getElementById("root"))`
4. Then use `render()` method to that `createRoot`.
   - eg:
     ```js
     const root = ReactDOM.createRoot(document.getElementById("root"));
     root.render(navbar);
     ```
5. Use `react-dom/client` to _import_ the package.

```js
import React from "react";
import ReactDOM from "react-dom/client";

const navbar = (
  <nav>
    <h1>Bob's Bistro</h1>
    <ul>
      <li>Menu</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(navbar);

// ReactDOM.render(navbar, document.getElementById("root")) not working

// ReactDOM.createRoot(document.getElementById("root")).render(navbar)
```

## Use append() instead of render()

1. JSX to Object Elements: JSX is not directly converted into JavaScript objects. JSX is a syntax extension for JavaScript that React uses to create and describe React elements, which are plain JavaScript objects. React then processes these React elements to create a virtual DOM representation.

2. React to Real DOM Elements: React doesn't directly convert React elements into real DOM elements. Instead, React uses a process known as "reconciliation" to update the real DOM efficiently based on changes in the virtual DOM. It calculates the differences between the current virtual DOM and the previous one and applies only the necessary updates to the real DOM.

#### Challege 1

```js
import React from "react";

/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

const page = (
  <div>
    <h1>My awesome website in React</h1>
    <h3>Reasons I love React</h3>
    <ol>
      <li>It's composable</li>
      <li>It's declarative</li>
      <li>It's a hireable skill</li>
      <li>It's actively maintained by skilled people</li>
    </ol>
  </div>
);

// document.getElementById("root").append(page) // uncomment to see this in output
document.getElementById("root").append(JSON.stringify(page));
```

#### Challege 2

Challenge: fix the above code!

Don't forget, you're not using CDNs anymore, so there's no
global "ReactDOM" variable to use anymore.

```js
import React from "react";
import ReactDOM from "react-dom";

const page = (
  <div>
    <h1>My awesome website in React</h1>
    <h3>Reasons I love React</h3>
    <ol>
      <li>It's composable</li>
      <li>It's declarative</li>
      <li>It's a hireable skill</li>
      <li>It's actively maintained by skilled people</li>
    </ol>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(navbar);
```

## Challenge 3

```js
/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

import React from "react";
import ReactDOM from "react-dom";

const page = (
  <div>
    <img src="./react-logo.png" width="40px" />
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on GitHub</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
);

ReactDOM.render(page, document.getElementById("root"));
```

## Quiz

1. Why do we need to `import React from "react"` in our files?
   React is what defines JSX

2. If I were to console.log(page) in index.js, what would show up?
   A JavaScript object. React elements that describe what React should
   eventually add to the real DOM for us.

3. What's wrong with this code:

   ```js
   const page = (
       <h1>Hello</h1>
       <p>This is my website!</p>
   )
   ```

   We need our JSX to be nested under a single parent element

4. What does it mean for something to be "declarative" instead of "imperative"?
   Declarative means I can tell the computer WHAT to do
   and expect it to handle the details. Imperative means I need
   to tell it HOW to do each step.

5. What does it mean for something to be "composable"?
   We have small pieces that we can put together to make something
   larger/greater than the individual pieces.

## Custom Component

<table>
  <tr>
    <th>Without funtion</th>
    <th>With funtion</th>
    <th>With JSX syntax funtion</th>
  </tr>
  <tr>
  <td>

```js
const page = (
  <div>
    <img src="./react-logo.png" width="40px" />
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on GitHub</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
);

ReactDOM.render(page, document.getElementById("root"));
```

  </td>
  <td>

```js
function temporaryName() {
  return (
    <div>
      <img src="./react-logo.png" width="40px" />
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

ReactDOM.render(temporaryName(), document.getElementById("root"));
```

  </td>
  <td>

```js
function TemporaryName() {
  return (
    <div>
      <img src="./react-logo.png" width="40px" />
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<TemporaryName />, document.getElementById("root"));
```

  </td>
  </tr>
</table>

#### Challenges

```js
/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

*/

import React from "react";
import ReactDOM from "react-dom";

function Page() {
  return (
    <ol>
      <li>
        It's a popular library, so I'll be able to fit in with the cool kids!
      </li>
      <li>I'm more likely to get a job as a developer if I know React</li>
    </ol>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));

/*
Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
*/

import React from "react";
import ReactDOM from "react-dom";

function Page() {
  return (
    <div>
      <header>
        <nav>
          <img src="./react-logo.png" width="40px" />
        </nav>
      </header>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
      <footer>
        <small>© 2021 Ziroll development. All rights reserved.</small>
      </footer>
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
```

## Quiz 2

1. What is a React component?
   A function that returns React elements. (UI)

2. What's wrong with this code?

   ```js
   function myComponent() {
     return <small>I'm tiny text!</small>;
   }
   ```

   Function name should be in _Pascal case_ `MyComponent()`

3. What's wrong with this code?

   ```js
   function Header() {
     return (
       <header>
         <nav>
           <img src="./react-logo.png" width="40px" />
         </nav>
       </header>
     );
   }

   ReactDOM.render(Header(), document.getElementById("root"));
   ```

   Write `<Header />` instead of `Header()`

## Parent/Child Component

```js
import React from "react";
import ReactDOM from "react-dom";

/**
Challenge: 

- Move the `header` element from Page into its own
  component called "Header"
- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/

function Header() {
  return (
    <header>
      <nav>
        <img src="./react-logo.png" width="40px" />
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 2021 Ziroll development. All rights reserved.</small>
    </footer>
  );
}

function MainContent() {
  return (
    <div>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
    </div>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
```

## Styling Classes

1. We write `class` attribute in `HTML` code, but here we should write `className`
2. In vanilla JS, we write `className` for that particular element.
   ```js
   const ul = document.createElement("ul");
   ul.className = "list";
   ```
3. Challenge

<table>
  <tr>
    <th>Javascript</th>
    <th>CSS</th>
  </tr>
  <tr>
  <td>

````js
  /**
  Challenge:

  - Add an `ul` inside the Header's `nav` and create
    the following `li`s: "Pricing", "About", & "Contact"
  - Using flexbox, line up the nav items horizontally, and
    put them inline with the React logo.
  - Change the image styling to happen in CSS instead of in-line
    For practice, add a new class to the image in order to style it
  */

  function Header() {
      return (
          <header>
              <nav className="nav">
                  <img src="./react-logo.png" className="nav-logo" />
                  <ul className="nav-items">
                      <li>Pricing</li>
                      <li>About</li>
                      <li>Contact</li>
                  </ul>
              </nav>
          </header>
      )
  }
  ```

</td>
<td>

```css
.nav {
display: flex;
justify-content: space-between;
align-items: center;
}

.nav-logo {
    width: 60px;
}

.nav-items {
    list-style: none;
    display: flex;
}

.nav-items > li {
    padding: 10px;
}
````

</td>
</tr>
</table>
    
## Organize Components

1. Create a separate component for appropriate block of code.
   - ```js
     Header.js;
     Footer.js;
     MainContent.js;
     ```
2. Then `import` those components in `index.js`
3. Each component must import `react` and should use `export defalut` to function.

   - ```js
     // Component.js
     import React from "react"

     export default function Component() {
         return (
             ...
         )
     }
     ```

   - ```js
     // index.js
     import React from "react";
     import ReactDOM from "react-dom";
     import MainContent from "./Component";

     function Page() {
       return (
         <div>
           ...
           <MainContent />
           ...
         </div>
       );
     }

     ReactDOM.render(<Page />, document.getElementById("root"));
     ```

## Create React with Vite

Vite is a build tool and development server designed to improve the development process of modern web applications.

1. Pre-requisites apps installs `node` and `npm`.
2. Run this command in your terminal `npm create vite@latest`.
3. Type your name of `<project>` --> select framework `react` --> cd `<project name>` --> `npm install` --> `npm run dev`.
4. Open host in the browser and customize your application based on your requirements.


## The Rules of JSX (react.dev)

1. Return a single root element
   - To return multiple elements from a component, wrap them with a single parent tag.
   - `<> ... </> ` This empty tag is called a [Fragment](https://react.dev/reference/react/Fragment). Fragments let you group things without leaving any trace in the browser HTML tree.
2. Close all the tags
   - JSX requires tags to be explicitly closed: self-closing tags like `<img>` must become `<img />`, and wrapping tags like `<li>`oranges must be written as `<li>oranges</li>`.
3. camelCase all most of the things!

> Follow this link for HTML,CSS attibutes in list of DOM components
> [https://react.dev/reference/react-dom/components/common](https://react.dev/reference/react-dom/components/common)

> You can *convert these HTML* code to *JSX* by using this [tool](https://transform.tools/html-to-jsx)

## Passing the value with Curly braces

1. You could use a value from JavaScript by replacing `"` and `"` with `{` and `}`.
2. Any JavaScript expression will work between curly braces, including function calls like `formatDate()`:


```jsx
const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return (
    <img
      className="avatar"
      src={avatar}
      alt={description}
    />
  );
```
#### Where to use curly braces

1. As text directly inside a JSX tag: 
    - `<h1>{name}'s To Do List</h1>` *works*.
    - `<{tag}>Gregorio Y. Zara's To Do List</{tag}>` will *NOT work*.
2. As attributes immediately following the `=`sign:
    - `src={avatar}` *work*
    - `src="{avatar}"` *NOT work*  
3. Using *double curlies*: **CSS**
    - To pass a JS object in JSX, you must wrap the object in another pair of curly braces:` person={{ name: "Hedy Lamarr", inventions: 5 }}`
    - ```jsx
      export default function TodoList() {
        return (
          <ul style={{
            backgroundColor: 'black', // Inline style properties are written in camelCase
            color: 'pink'
          }}>
            <li>Improve the videophone</li>
            <li>Prepare aeronautics lectures</li>
            <li>Work on the alcohol-fuelled engine</li>
          </ul>
        );
      }
      ```
4. You can move several expressions into one object, and reference them in your JSX inside curly braces:
    - ```jsx
      const person = {
        name: 'Gregorio Y. Zara',
        theme: {
          backgroundColor: 'black',
          color: 'pink'
        }
      };
      ```
    - ```jsx
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        ...
        ...
      ```

> **NOTE**: Inline style properties are written in camelCase


## React Core Concepts

1. **Props**
2. Creating **componenets** from the array
3. **State**

## Props

1. React components use *props* to communicate with each other.
    - Props are the information that you pass to a JSX tag. For example, `className`, `src`, `alt`, `width`, and `height` are some of the props you can pass to an `<img>`.

#### Passing props to a component 

**Step 1**: Pass props to the child component:-

First, pass some props to `Avatar`. For example, let’s pass two props: `person` (an object), and `size` (a number):

```jsx
export default function Profile() {
  return (
    <Avatar
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
    />
  );
}
```

**Step 2**: Read props inside the child component:-

You can read these props by listing their names `person`, `size` separated by the commas inside `({` and `})` directly after `function Avatar`. This lets you use them inside the `Avatar` code, like you would with a variable

```js
function Avatar({ person, size }) {
  // person and size are available here
}
```
<table>
  <tr>
    <th>App.js</td>
    <th>utils.js</th>
  </tr>
  <tr>
<td>

  ```js
  import { getImageUrl } from './utils.js';

  function Avatar({ person, size }) {
    return (
      <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    );
  }
  
  export default function Profile() {
    return (
      <div>
        <Avatar
          size={100}
          person={{ 
            name: 'Katsuko Saruhashi', 
            imageId: 'YfeOqp2'
          }}
        />
        <Avatar
          size={50}
          person={{ 
            name: 'Lin Lanying',
            imageId: '1bX5QH6'
          }}
        />
      </div>
    );
  }
  ```

</td>
  <td>
    
  ```js
  export function getImageUrl(person, size = 's') {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      size +
      '.jpg'
    );
  }
  ```

  </td>
</tr>
</table>

***Specifying a default value for a prop***

  - If you want to give a prop a default value to fall back on when no value is specified, you can do it with the destructuring by putting `=` and the default value right after the parameter:

  - ```js
    function Avatar({ person, size = 100 }) {
      // ...
    }
    ```

***Forwarding props with the JSX spread syntax ***

1. Sometimes, passing props gets very repetitive, use *spread* operator. 

<table>
  <tr>
    <th>Pass each values</td>
    <th>Use spread operator</th>
  </tr>
  <tr>
<td>

 ```js
 function Profile({ person, size, isSepia, thickBorder }) {
    return (
      <div className="card">
        <Avatar
          person={person}
          size={size}
          isSepia={isSepia}
          thickBorder={thickBorder}
        />
      </div>
    );
  }
 ```

</td>
  <td>
    
  ```js
  function Profile(props) {
    return (
      <div className="card">
        <Avatar {...props} />
      </div>
    );
  }
  ```

  </td>
</tr>
</table>


***Passing JSX as children*** 

1. When you nest content inside a JSX tag, the parent component will receive that content in a prop called `children`.
2. For example, the `Card` component below will receive a `children` prop set to `<Avatar />` and render it in a wrapper div

<table>
  <tr>
    <th>App.js</td>
    <th>Avatar.js</th>
    <th>utils.js</th>
  </tr>
  <tr>
<td>

 ```js
import Avatar from './Avatar.js';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      <h1>Hi</h1>
      <h2>Bye</h2>
    </Card>
  );
}
 ```

</td>
  <td>
    
  ```js
  import { getImageUrl } from './utils.js';

  export default function Avatar({ person, size }) {
    return (
      <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    );
  }
  ```

  </td>
   <td>
    
  ```js
  export function getImageUrl(person, size = 's') {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      size +
      '.jpg'
    );
  }
  ```

  </td>
</tr>
</table>

***How props change over time***

1. You can see demonstration of this topic in this [link](https://react.dev/learn/passing-props-to-a-component#how-props-change-over-time)

> **NOTE**  
> However, props are **immutable** — a term from computer science meaning "unchangeable". When a component needs to change its props (for example, in response to a user interaction or new data), it will have to "ask" its parent component to pass it *different* props—a new object! Its old props will then be cast aside, and eventually the JavaScript engine will reclaim the memory taken by them.

> **Don’t try to “change props”**. When you need to respond to the user input (like changing the selected color), you will need to “***set state***”


### Try [This](https://react.dev/learn/passing-props-to-a-component#recap) some challenges

## Conditional Rendering

