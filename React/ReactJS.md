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

