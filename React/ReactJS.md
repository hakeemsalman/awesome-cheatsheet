# ReactJS


```html
<html>
    <head>
        <link rel="stylesheet" href="index.css">
        <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    </head>
    <body>
        <div id="root"></div>
        <script src="index.js" type="text/babel"></script>
    </body>
</html>
```
```js
  ReactDOM.render(<h1>Hello, everyone!</h1>,  document.getElementById("root"))
```

> ReactDOM.render( [what you want to render] , [where you want to render] )
 

## Custom component

```js
 function MainContent(){
    return(
      <h1>I'm learning</h1>  
    );
}

ReactDOM.render(<MainContent />,document.getElementById("root"))

```


 ## Features

 1. Composable
 2. Declarative

 1. 
    ```js
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

    const h1 = document.createElement("h1")
    h1.textContent = "This is an imperative way to program"
    h1.className = "header"
    document.getElementById("root").append(h1);

    ```
## JSX

*JSX* stand for Javascript XML. React convert html code to javascript *DOM* element.

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
)

ReactDOM.render(navbar, document.getElementById("root"))
```

## Deploy project

1. Sign up the **Netlify** [account](https://app.netlify.com/signup)
2. Download and unzip the Scrimba file
3. Drag and drop your folder into this [https://app.netlify.com/drop](https://app.netlify.com/drop)

## Import React

1. Use `package.json` to add dependencies of React in project folder instead of adding *CDN's* link.
2. Then install React with *npm* manager.
3. Use `import` keyword to apply react functions in your `index.js`


```json
{
  "name": "my-react-app",
  "version": "1.0.0",
  "description": "My first React app",
  "main": "index.js",
  "dependencies": {
    "react": "^17.0.0",
    "react-dom": "^17.0.0",
  }
}
```

```html
<html>
    <head>
        <link rel="stylesheet" href="index.css">
        
        <!-- <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
         -->
    </head>
    <body>
        <div id="root"></div>
        <script src="index.pack.js"></script>  <!-- removed type="text/babel"  -->
    </body>
</html>
```

```js
import React from "react"
import ReactDOM from "react-dom"

const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById("root"))
```

## UPDATE: New React 18

1. Upto React 17 version `ReactDOM.render()` is available.
2. In React 18v, use `createRoot()` before use `render()` method.
3. In `createRoot()` method, add root element that what you want to add. 
    - eg: `createRoot(document.getElementById("root"))`
4. Then use `render()` method to that `createRoot`.
    - eg:
      ```js
      const root = ReactDOM.createRoot(document.getElementById("root"))
      root.render(navbar)
      ```

```js
import React from "react"
import ReactDOM from "react-dom/client"

const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(navbar)

// ReactDOM.render(navbar, document.getElementById("root")) not working

// ReactDOM.createRoot(document.getElementById("root")).render(navbar)
```

## Use append() instead of render()

1. JSX to Object Elements: JSX is not directly converted into JavaScript objects. JSX is a syntax extension for JavaScript that React uses to create and describe React elements, which are plain JavaScript objects. React then processes these React elements to create a virtual DOM representation.

2. React to Real DOM Elements: React doesn't directly convert React elements into real DOM elements. Instead, React uses a process known as "reconciliation" to update the real DOM efficiently based on changes in the virtual DOM. It calculates the differences between the current virtual DOM and the previous one and applies only the necessary updates to the real DOM.

#### Challege 1
```js
import React from "react"

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
)

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

import React from "react"
import ReactDOM from "react-dom"

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
)

ReactDOM.render(page, document.getElementById("root"))
```