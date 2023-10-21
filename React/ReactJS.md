# ReactJS

## Contents

1. [Boiler plate of ReactJs](#boiler-plate-of-reactjs)
1. [Custom component](#custom-component)
1. [Features](#features)
1. [JSX](#jsx)
1. [How to Deploy in Netllify](#deploy-project)
1. [Import & Export React](#import--export-react)
1. [Update: React 18](#update-new-react-18)
1. [Installation Local Environment](#installation-in-local-environment)
1. [Different Custom Component](#different-custom-component)
1. [Parent/Child Component](#parentchild-component)
1. [Styling Classes](#styling-classes)
1. [Organize Components](#organize-components)
1. [Create React with Vite](#create-react-with-vite)
1. [The Rules of JSX](#the-rules-of-jsx-reactdev)
1. [Passing the value with Curly braces](#passing-the-value-with-curly-braces)
1. [React Core Concepts](#react-core-concepts)
1. [Conditional Rendering](#conditional-rendering)


## Pre-requisites topics of JS

1. Functions and Arrow Functions
2. Objects
3. Arrays and array methods
4. Destructuring
5. Template literals
6. Ternary Operators
7. ES Modules and Import / Export Syntax

## Boiler plate of ReactJS 

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

1. The *first* letter of `function name` should be in *capital* letter.
2. To add a component write a `<function name />` in other components. 

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

## Import & Export React 

1. Use `package.json` to add dependencies of React in project folder instead of adding _CDN's_ link.
1. Then install React with *npm* manager. 
1. `npm i create-react-app` --> `npx create-create-app@latest` 
1. Use `import` keyword to apply react functions in your `index.js`
1. For info follow this [link](https://react.dev/learn/importing-and-exporting-components)

<table>
<thead>
<tr>
  <th>package.json</th>
  <th>index.html</th>
  <th>App.js</th>
  <th>index.js</th>
</tr>
</thead>
<tbody>
<tr>
  <td>

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

  </td>
  <td>

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

  </td>
  <td>

  ```js
  import React from "react";
  import ReactDOM from "react-dom";

  function Profile() {
    return (
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
    );
  }

  export default function Gallery() {
    return (
      <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    );
  }
  ```

  </td>
  <td>
    
  ```js
  import Gallery from './App.js';

  ReactDOM.render(Gallary, document.getElementById("root"));
  ```
  </td>
</tr>
</tbody>
</table>


<table>
		<thead>
			<tr>
        <th>Syntax</th>
				<th>Export statement</th>
				<th>Import statement</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Default</td>
				<td>export default function Button() {}</td>
				<td>import Button from './Button.js';</td>
			</tr>
			<tr>
				<td>Named</td>
				<td>export function Button() {}</td>
				<td>mport { Button } from './Button.js';</td>
			</tr>
		</tbody>
	</table>



## UPDATE: New React 18

1. Upto React 17 version `ReactDOM.render()` is available.
1. In React 18v, createVariable of `createRoot()` *method* then use `render()` method.
1. Use `react-dom/client` to _import_ the package.
1. In `createRoot()` method, add root element that what you want to add.
   - eg: `createRoot(document.getElementById("root"))`
1. Then use `render()` method to that `createRoot`.
   - eg:
     ```js
     const root = ReactDOM.createRoot(document.getElementById("root"));
     root.render(navbar);
     ```

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

## Installation in Local environment

**To create *React* App**
> npm init  
> npm install create-react-app   
> npx create-react-app myapp  
> npm run dev  

**To create *Next* App**

> npm init  
> npm install create-next-app   
> npx create-next-app appName  
> npm run dev  


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

## Different Custom Component

We can write with these kinds of code.

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

> NOTE: we are NOT using Vite framework here , it just installation/educational, not for development purpose

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

1. [**Props**](#props)
2. **Componenets**
3. **State**

## Props

- React components use *props* to communicate with each other.
    - Props are the information that you pass to a JSX tag. For example, `className`, `src`, `alt`, `width`, and `height` are some of the props you can pass to an `<img>`.

- Props is nothings but a *Parameter* in a function, but in ReactJS we call it as a **Props**
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

1. You can read these props by adding any name in parameter, like `props` (*any name you can write*). 
1. You can read these props by listing their names `person`, `size` separated by the commas inside `({` and `})` directly after `function Avatar`. This lets you use them inside the `Avatar` code, like you would with a variable

```js
function Avatar(props) { // props or param, recommended is props
  <p>props.person.name</p>
  <p>props.person.imageId</p>
  <p>props.size</p>

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
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
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

1. Your components will often need to display different things depending on different conditions. In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators.
1. In React, you control branching logic with JavaScript.
1. You can return a JSX expression conditionally with an if statement.
1. You can conditionally save some JSX to a variable and then include it inside other JSX by using the curly braces.
1. In JSX, {cond ? <A /> : <B />} means “if cond, render <A />, otherwise <B />”.
1. In JSX, {cond && <A />} means “if cond, render <A />, otherwise nothing”.
1. The shortcuts are common, but you don’t have to use them if you prefer plain if.

<table>
      <thead>
        <tr>
          <td>App.js</td>
          <td>Image Output</td>
        </tr>
      </thead>
      <tr>
          <td>Simple Ternary Operator</td>
          <td>Image Output</td>
        </tr>
      <tbody>
        <tr>
          <td>

          ```js
          function Item({ name, isPacked }) {
            if (isPacked) {
              return <li className="item">{name} ✔</li>;
            }
            return <li className="item">{name}</li>;
          }

          export default function PackingList() {
            return (
              <section>
                <h1>Sally Ride's Packing List</h1>
                <ul>
                  <Item 
                    isPacked={true} 
                    name="Space suit" 
                  />
                  <Item 
                    isPacked={true} 
                    name="Helmet with a golden leaf" 
                  />
                  <Item 
                    isPacked={false} 
                    name="Photo of Tam" 
                  />
                </ul>
              </section>
            );
          }
          ```

  </td>
  <td>

  ![Alt text](image.png)

  </td>
</tr>
<tr>
<td>

```js
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {isPacked ? name + ' ✔' : name}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}
```
</td>
<td>

![Alt text](image.png)

</td>
</tr>
</tbody>
</table>

#### Use these challenges [Link](https://react.dev/learn/conditional-rendering#challenges)

## Rendering Lists

Say that you have a list of content.

```jsx
<ul>
  <li>Creola Katherine Johnson: mathematician</li>
  <li>Mario José Molina-Pasquel Henríquez: chemist</li>
  <li>Mohammad Abdus Salam: physicist</li>
  <li>Percy Lavon Julian: chemist</li>
  <li>Subrahmanyan Chandrasekhar: astrophysicist</li>
</ul>

```

1. You will often need to show several instances of the same component using different data when building interfaces: from lists of comments to galleries of profile images.
1. In these situations, you can store that data in JavaScript objects and arrays and use methods like `map()` and `filter()` to render lists of components from them.


### Generate list of items from the array

1. Arrow functions implicitly return the expression right after `=>`, so you didn’t need a `return` statement:
    - ```jsx
      const listItems = chemists.map(person =>
        <li>...</li> // Implicit return!
      );
      ```
1. However, you must write `return` explicitly if your `=>` is followed by a `{` curly brace!
    - ```jsx
      const listItems = chemists.map(person => { // Curly brace
        return <li>...</li>;
      });
      ```
1. Arrow functions containing` => {` are said to have a **block body**. They let you write more than a single line of code, but you *have* to write a `return` statement yourself. If you forget it, nothing gets returned!



#### Map the item

1. Move the data into an array:

```jsx
const people = [
  {
    id: 0,
    name: 'Creola Katherine Johnson',
    title: 'mathematician'
  },
  {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    title: 'chemist'
  },
  {
    id: 2,
    name: 'Mohammad Abdus Salam',
    title: 'physicist'
  },
  {
    id: 3,
    name: 'Percy Lavon Julian',
    title: 'chemist'
  },
  {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    title: 'astrophysicist'
  }
];
```

2. Map the `people` members into a new array of JSX nodes, `listItems`:

```jsx
const listItems = people.map(person => <li key={person.id}>{person.name}</li>);
```

3. Return `listItems` from your component wrapped in a `<ul>`:

```jsx
return <ul>{listItems}</ul>;
```

#### Filtering arrays of items 

1. Create a new array of just “chemist” people, `chemists`, by calling `filter()` on the `people` filtering by `person.profession === 'chemist'`:

```jsx
const chemists = people.filter(person =>
  person.profession === 'chemist'
);
```

2. Now **map** over `chemists`:

```jsx
const listItems = chemists.map(person =>
  <li>
     <img
       src={getImageUrl(person)}
       alt={person.name}
     />
     <p>
       <b>{person.name}:</b>
       {' ' + person.profession + ' '}
       known for {person.accomplishment}
     </p>
  </li>
);
```

3. Lastly, return the `listItems` from your component:

```jsx
return <ul>{listItems}</ul>;
```

#### Where to get your key 
**Different sources of data provide different sources of keys:**

1. Data from a database: If your data is coming from a database, you can use the database keys/IDs, which are unique by nature.
1. Locally generated data: If your data is generated and persisted locally (e.g. notes in a note-taking app), use an incrementing counter, crypto.randomUUID() or a package like uuid when creating items.  
  
**Rules of keys**
1. Keys must be unique among siblings. However, it’s okay to use the same keys for JSX nodes in different arrays.
1. Keys must not change or that defeats their purpose! Don’t generate them while rendering.


## Keeping Components Pure

- Although you might not have used them all yet, in React there are three kinds of inputs that you can read while rendering: props, state, and context. You should always treat these inputs as read-only.

- When you want to change something in response to user input, you should set state instead of writing to a variable. You should never change preexisting variables or objects while your component is rendering.

- It is useful to remember which operations on arrays mutate them, and which don’t. For example, `push`, `pop`, `reverse`, and `sort` will mutate the original array, but `slice`, `filter`, and `map` will create a new one.

> Follow this [link](https://react.dev/learn/keeping-components-pure) for more information

## Understanding Your UI as a Tree


