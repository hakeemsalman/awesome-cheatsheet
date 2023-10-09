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

  ReactDOM.render(page, document.getElementById("root"))
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
      )
  }

  ReactDOM.render(temporaryName(), document.getElementById("root"))
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
      )
  }

  ReactDOM.render(<TemporaryName />, document.getElementById("root"))
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

function Page(){
    return (
         <ol>
            <li>It's a popular library, so I'll be 
            able to fit in with the cool kids!</li>
            <li>I'm more likely to get a job as a developer
            if I know React</li>
        </ol>
    );
}

ReactDOM.render(<Page/>, document.getElementById("root"))

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

import React from "react"
import ReactDOM from "react-dom"

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
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
            <footer>
                <small>© 2021 Ziroll development. All rights reserved.</small>
            </footer>
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
```

## Quiz 2

1. What is a React component?
A function that returns React elements. (UI)

2. What's wrong with this code?
    ```js
    function myComponent() {
        return (
            <small>I'm tiny text!</small>
        )
    }
    ```
    Function name should be in *Pascal case* `MyComponent()`

3. What's wrong with this code?
    ```js
    function Header() {
        return (
            <header>
                <nav>
                    <img src="./react-logo.png" width="40px" />
                </nav>
            </header>
        )
    }

    ReactDOM.render(Header(), document.getElementById("root"))
    ```

    Write `<Header />` instead of `Header()`

## Parent/Child Component

```js
import React from "react"
import ReactDOM from "react-dom"

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
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
```


