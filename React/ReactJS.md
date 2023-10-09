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