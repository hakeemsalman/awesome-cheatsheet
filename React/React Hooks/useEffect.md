# useEffect

## Topics

1. [Class Component without useEffect](#class-component-without-useeffect)
1. [Function Component with useEffect](#useeffect-functioncal-component)
1. [Conditionally useEffect](#conditionally-useeffect)
  - [Class](#class-component)
  - [Functional](#functional-component)
1. [Runs onlye one useEffect](#runs-only-once)

1. The Effect Hook lets you perform side effects in functional components
1. It is a close replacement for **component DidMount**, **componentDidUpdate** and **componentWillUnmount**
1. It has **TWO** parameters,
   - Arrow function
   - Dependent value

Suppose we have class components, and we want to update `count` value in title of page, by click on button.
1. You can see logs, first is `componentDidMount` will call and set title value to `0`,
1. Then after clicking the button, it will call `componentDidUpdate` method.


### Class component without useEffect
```js
import React, { Component } from 'react'

export default class dummy extends Component {

  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }

  componentDidUpdate() {
    document.title = this.state.value;
    console.log('did-Update');
  }

  componentDidMount() {
    document.title = this.state.value;
    console.log('did-Mount');
  }

  increament = () => {
    this.setState(prevState => { 
      return { 
        count: prevState.count + 1 
      } 
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.increament}>click me: {this.state.count}</button>
      </div >
    )
  }
}
```

> So this is Class component, but what about the Function component. We don't have both `componentDidMount` and `componentDidUpdate` in Functional component. So useEffect comes into picture.


### useEffect Functioncal Component

1. It will runs after every render.

```jsx
import React, { useState, useffect } from 'react';

function HookCounterOne() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = count
  });

  return (
  <div>
  <button onClick={() => setCount(count + 1)}>Click {count} times</button>
  </div>
  )
}
export default HookCounterOne
```

## Conditionally useEffect

1. If suppose we don't to run `componentDidUpdate` method when `input` changes, only run on clicking the button.
  But below code, runs on every rendering.

### Class Component

```jsx
import React, { Component } from 'react'

export default class dummy extends Component {

  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      name: '',
    }
  }

  componentDidUpdate() {
    document.title = this.state.value;
    console.log('did-Update');
  }

  componentDidMount() {
    document.title = this.state.value;
    console.log('did-Mount');
  }

  increament = () => {
    this.setState(prevState => { 
      return { 
        count: prevState.count + 1 
      } 
    })
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={e => {this.setState({name: e.target.value})}}>
        <button onClick={this.increament}>click me: {this.state.count}</button>
      </div >
    )
  }
}
```

**Conditionally rendering**

add condition to not update on every rendering

```jsx
componentDidUpdate(prevProps, prevState) {
  if(prevState.count !== this.state.count){
    document.title = this.state.value;
    console.log('did-Update');
  }
}
```

### Functional Component

```jsx
import React, { useState, useffect } from 'react';

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('useEffect - updating title');
    document.title = count
  });

  return (
    <div>
  <button onClick={() => setCount(count + 1)}>Click {count} times</button>
  </div>
  )
}
export default HookCounterOne
```

**Conditionally rendering**

```jsx
useEffect(() => {
  console.log('useEffect - updating title');
  document.title = count
}, [count]);              // added count dependency
```


## Runs Only Once

1. Just use *empty array* `[]` in second parameter.

```jsx
useEffect(() => {
  console.log('useEffect - updating title');
  document.title = count
}, []); 
```


## useEffect with cleanup

Suppose there is Class component, which contains mouse event of X and Y mouse-coordiantes showing on UI.

```jsx
import React, { Component } from 'react'

class ClassMouse extends Component {
	constructor(props) {
		super(props)

		this.state = {
			x: 0,
			y: 0
		}
	}

	logMousePosition = e => {
		this.setState({ x: e.clientX, y: e.clientY })
	}

	componentDidMount() {
    console.log('did-mount');
		window.addEventListener('mousemove', this.logMousePosition)
	}

	componentWillUnmount() {
    console.log('did-Unmount');
		window.removeEventListener('mousemove', this.logMousePosition)
	}

	render() {
		return (
			<div>
				X - {this.state.x} Y - {this.state.y}
			</div>
		)
	}
}

export default ClassMouse


// Mouse Container

import React, { useState } from 'react'
import ClassMouse from './ClassMouse'

function MouseContainer() {
	const [display, setDisplay] = useState(true)
	return (
		<div>
			<button onClick={() => setDisplay(!display)}>Toggle display</button>
			{display && <ClassMouse />}
		</div>
	)
}

export default MouseContainer


// App.jsx

return(
  <MouseContainer />
)

```

Now you will toggle the `button` on UI. If you see on console, you will see the `componentWillUnmount` will appear and it will not show again.

**Functional Component**

1. Try to run code before uncomment the return statement.

```jsx
// Functional

import React, { useState, useEffect } from 'react'

function HookMouse() {
	const [x, setX] = useState(0)
	const [y, setY] = useState(0)

	const logMousePosition = e => {
		console.log('Mouse event')
		setX(e.clientX)
		setY(e.clientY)
	}

	useEffect(() => {
		console.log('useFffect called')
    window.addEventListener('mousemove', logMousePosition)

    // return () => {
    //   console.log('Component unmounting code')
    //   window.removeEventListener('mousemove', logMousePosition)
    // }
	}, [])
	return (
		<div>
			Hooks - X - {x} Y - {y}
		</div>
	)
}

export default HookMouse

// Mouse Container

import React, { useState } from 'react'
import ClassMouse from './ClassMouse'

function MouseContainer() {
	const [display, setDisplay] = useState(true)
	return (
		<div>
			<button onClick={() => setDisplay(!display)}>Toggle display</button>
			{display && <ClassMouse />}
		</div>
	)
}

export default MouseContainer
```

## useEffect with incorrect dependency


