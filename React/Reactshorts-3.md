# Advanced React JS

# Contents

1. [Fragments](#fragments)
1. [Pure Components](#pure-components)
    - [Shallow comparison](#shallow-comparison-sc)
1. [Memo](#memo) 
1. [Refs](#refs)
1. [Refs Class](#forwarding-refs-with-class-components)
1. [ForwardingRefs](#forwarding-refs)
1. [Portal](#portals)
1. [Error Boundary](#error-boundary)
1. [Higher Order Component](#higher-order-component)
1. [Render Props](#)

## Fragments

1. Fragments basically lets you group a list of children elements without adding extra nodes to the Dom
1. We can pass only one attribute into `React.Fragments` fragment, i.e `key={...}`.
1. We write `<>...</>` empty opening tag and empty closing tag, but  you can't pass `key` attribute.

```jsx
import React from 'react';

class MyComponent extends React.Component {
  render() {
    return (
      <React.Fragment key={...}>
        <h1>Hello</h1>
        <p>Here is some text.</p>
        <ul>
          <li >Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </React.Fragment>
    );
  }
}

export default MyComponent;
```

## Pure Components


1. It is a good idea to ensure that all the children components are also pure to avoid unexpected
behaviour.
1. Never mutate the state. Always return a new object that reflects the new state.
1. `PureComponent`class is *Class* based component, where as `Memo` is *function* based component

<table>
 <tr>
    <th>Parent Component</th>
    <th>Regular Component</th>
    <th>Pure Component</th>
  </tr>
<tr>
  <td>

```jsx
import React, { Component } from 'react'
import PureComp from './PureComp';
import RegularComponent from './RegularComponent';

export default class ParentComponent extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
        name: 'salman'
    }
  }

  componentDidMount(){
    setInterval(() => {
      this.setState({
        name: 'salman'
      })
    }, 2000);
  }

  render() {
    console.log('********** Parent Comp **************')
    return (
      <div>
        <div>Parent Component</div> 
        <RegularComponent name={this.state.name} />
        <PureComp name={this.state.name}/>
      </div>
    )
  }
}

```

</td>
<td>

```jsx
import React, { Component } from 'react'

export default class RegularComponent extends Component {
  render() {
    console.log('Regular Comp ')

    return (
      <div>Regular Component {this.props.name}</div>
    )
  }
}

```
</td>
<td>

```jsx
// extend PureComponent class

import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
  render() {
    console.log('Pure Comp')

    return (
      <div>Pure Component {this.props.name}</div>
    )
  }
}

```
</td>
</tr>
</table>

<p align="center">Output console</p>

```console
********** Parent Comp **************
Regular Comp
Pure Component
********** Parent Comp **************
Regular Comp
********** Parent Comp **************
Regular Comp
********** Parent Comp **************
Regular Comp
********** Parent Comp **************
Regular Comp
...
...
... it goes-on, until you close the window
```

> After that every two seconds the `setstate` method is called, which will **re-render** the *Parent Component* and If the *Parent Component* **re-renders**, the *Child Components* will also *re-render* unless you return `false`.

> But here, only *Regular Component* is re-rendeing and *Pure Component* is *NOT* re-rending.

<table>
 <tr>
    <th>Regular Component</th>
    <th>Pure Component</th>
  </tr>
<tr>
<td>

A regular component does not implement the
*shouldComponentUpdate* method. It always
returns true by default.

</td>
<td>

A pure component on the other hand
implements *shouldComponentUpdate* with
a **shallow props and state** comparison.

</td>
</tr>
</table>


### Shallow comparison (SC)


**Primitive Types**
a (SC) b returns true if a and b have the same value and are of the same type
Ex: string 'Vishwas' (SC) string "Vishwas' returns true

**Complex Types**
a (SC) b returns true if a and b reference the exact same object.

<table>
 <tr>
    <th>Regular Component</th>
    <th>Pure Component</th>
  </tr>
<tr>
  <td>

```js
let a = [1, 2, 3];
let b = [1, 2, 3];
let c = a

let ab_eq = (a === b); //false
let ac_eq = (a === c); //true
```
  </td>
  <td>

```js
let a = { x: 1, y: 2};
let b = { x: 1, y: 2};
let c = a;

let ab_eq = (a === b); //false
let ac_eq = (a === c); //true
```
  </td>
  <td>

![pureComponent-1.png ](./assets/pureComponent-1.png)

  </td>
</tr>
</table>

## Memo

- In React, memoization is a performance optimization technique used to improve the efficiency of functional components by preventing unnecessary re-renders.
- React.memo essentially caches the result of the component rendering based on its props, preventing the component from re-rendering if the props remain unchanged. This can significantly improve the performance of your React application by reducing the number of re-renders.

1. `React.Memo()` is function based component.
1. It is Higher order component.

```jsx
import React from 'react'

function Message() {
  return (
    <h1 className={color}>Name</h1>
  )
}
export default React.Memo(Message) //   <= Here we have to Higher order function
```

## Refs

Refs : access Dom nodes directly within react.

Suppose we want to focus/highlight the *Input* field/tag on UI, when user reloads the page.
Steps to create this:

1. Create a variable of `React.createRef()` method, called `this.inputRef`
1. Attatch the variable to the input field by `ref={this.inputRef}`
1. Now add `focus()` method to this variable `this.inputRef.current.focus()` inside *componentDidMount()* method

```jsx
import React, { Component } from 'react'

export default class RefsDemo extends Component {

  constructor(props) {
    super(props)
  
   this.inputRef = React.createRef()
  }

  componentDidMount(){
    this.inputRef.current.focus();
    console.log(this.inputRef)
  }


  render() {
    console.log('Regular Comp ')

    return (
      <input type="text" ref={this.inputRef} />
    )
  }
}

```

## Forwarding Refs with Class components
<p align="center"><i>pendiing</i></p>

## Forwarding Refs
<p align="center"><i>pendiing</i></p>

## Portals

React portals provide a way to render children into a Dom node that exists outside the Dom hierarchy of the parent component 

### Steps to create Portals:
1. **Create a container for the portal in your index.html:**
  - Open your public/index.html file and add a div with an id of portal-root:
  - ```jsx
    <body>
      <div id="root"></div>
      <div id="portal-root"></div>
    </body>
    ```
2. **Create a new component for the portal:**
    - In your src directory, create a new file for your portal component, for example, `Portal.js`. 
    - ```jsx
      // Portal.js
      import React from 'react';
      import ReactDOM from 'react-dom';

      const Portal = () => {
        const portalRoot = document.getElementById('portal-root');

        return ReactDOM.createPortal(
          <div>
            <h1> I am a portal root</h1>
          </div>, 
          portalElement);
      };

      export default Portal;
      ```
3. **Use the portal in your main component:**
   - In the component where you want to use the portal, import the Portal component and use it to render content outside the component's DOM hierarchy.
   - ```jsx
        // App.js
      import React from 'react';
      import Portal from './Portal';

      const App = () => {
        return (
          <div>
            <h1>Main Content</h1>
            <Portal>
              <div>
                <h2>Portal Content</h2>
              </div>
            </Portal>
          </div>
        );
      };

      export default App;
     ```

## Error Boundary

Error boundaries in React are components that catch JavaScript errors anywhere in the component tree and log those errors or display fallback UI instead of crashing the component tree. Here are the steps to create an error boundary in React:

- A class component that implements either one or both of the lifecycle methods `getDerivedStateFromError` or `componentDidCatch` becomes an error boundary.
- The static method `getDerivedStateFromError` method is used to render a fallback Ul after an error is thrown.
- The `componentDidCatch` method is used to log the error information.


```jsx
// ErrorBoundary.js
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
 /* getDerivedStateFromError: This is a lifecycle method that is called when an error is thrown. It sets the hasError state to true.*/


  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error('Error caught by error boundary:', error, errorInfo);
  /*componentDidCatch: This is another lifecycle method that is called after an error is thrown. You can use it to log the error or send it to an error reporting service.*/
}

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI here
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

 
// MyComponent.js optional
import React from 'react';

const MyComponent = () => {
  // Intentionally throw an error
  throw new Error('An error occurred in MyComponent.');
  // Rest of the component code
};

export default MyComponent;



// App.js
import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import MyComponent from './MyComponent'; // Replace with your actual component

const App = () => {
  return (
    <div>
      <h1>Main Content</h1>
      <ErrorBoundary>
        <MyComponent />
      </ErrorBoundary>
    </div>
  );
};

export default App;
```


## Higher order component

<p align="center"><i>pendiing</i></p>


## Render Props

The term "render prop" refers to a technique for **sharing code** between React components using a **prop whose value is a function**.

Suppose if we want to implement this function in two components without re-using same code in both components


```jsx
import React, { Component } from 'react'
import './App.css'
import Counter from './components/Counter'
import ClickCounterTwo from './components/ClickCounterTwo'
import HoverCounterTwo from './components/HoverCounterTwo'


class App extends Component {
	render() {
		return (
			<div className="App">
				
				 <Counter
					render={(count, incrementCount) =>
					<ClickCounterTwo
						count={count}
						incrementCount={incrementCount}>
					</ClickCounterTwo>}>
				</Counter>
				<Counter
					render={(count, incrementCount) =>
					<HoverCounterTwo
						count={count}
						incrementCount={incrementCount}>
					</HoverCounterTwo>}>
				</Counter>
			
			</div>
		)
	}
}

export default App
```

```jsx
import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  incrementCount = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }
  render() {
    return (
      <div>
        {this.props.render(this.state.count, this.incrementCount)}
      </div>
    )
  }
}

export default Counter
```

```jsx
import React, { Component } from 'react'

class ButtonCounter extends Component {

  render() {
    const { count, incrementCount } = this.props
		return <button onClick={incrementCount}>{this.props.name } Clicked {count} times</button>
	}
}

export default ButtonCounter
```

```jsx
import React, { Component } from 'react'

class HoverCounterTwo extends Component {

	render() {
		const { count, incrementCount } = this.props
		return <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
	}
}

export default HoverCounterTwo
```


