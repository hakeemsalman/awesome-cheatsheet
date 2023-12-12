# React Hooks

1. Hooks are a new feature addition in React version 16.8 which allow you to use React features without having to write a class.
  - Ex: State of a component
1. Hooks don't work inside classes

## Why Hooks?

*pending*

## Contents

1. [Keypoints](#keypoints)
1. [useState](#usestate)
   - [Previous state](#previous-state)
   - [state with Object](#usestate-with-object)
   - [state with Array](#usestate-with-array)
   - [Initialize state from Function](#initialize-state-from-function)

## Keypoints

- React version 16.8 or higher
- Completely opt in
- Hooks don't contain any breaking changes and the release is 100% backwards-compatible.
- Classes won't be removed from React
- Can't use Hooks inside of a class component
- Hooks don't replace your existing knowledge of React concepts
- Instead, Hooks provide a more direct API to the React concepts you already know

## useState

**Keypoints**:
- **Only Call Hooks at the Top Level**
  - Don't call Hooks inside loops, conditions, or nested functions
- **Only Call Hooks from React Functions**
  - Call them from within React functional components and not just any regular JavaScript function

1. The useState hook lets you add state to functional components
1. In classes, the state is always an object.
1. With the useState hook, the state doesn't have to be an object.
1. The useState hook returns an array with 2 elements.
1. The first element is the current value of the state, and the second element is a state setter function.
1. New state value depends on the previous state value? You can pass a function to the setter function.
1. When dealing with *objects* or *arrays*, always make sure to spread your state variable and then call the setter function

```jsx
// ...
  const [count, setCount] = useState(1);
// ...
  <button onClick={() => setName(count + 1)}>Click on me: {count}</button>
// ...

  const [name, setName] = useState('your name');
// ...
  <button onClick={() => setName('salman')}>Click on me: {name}</button>
// ...
```

<table>
  <tr>
    <th>Functional Components</th>
    <th>Class Components</th>
  </tr>
  <tr>
    <td>

```jsx
import {useState} from 'react';

const FunctionComp = () => {

  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>Count: {count}</button>
  )
}

export default FunctionComp
```

</td>
<td>

```jsx
class ClassComp extends Component{
  constructor(props){
    //...

    this.state = {
      count: 0;
    }
  }

  render(){
    return(
        <button onClick={() => this.setState({count: this.state.count + 1}) }>Count: {this.state.count}</button>
    )
  }
}
```

</td>
  </tr>
</table>

## Previous State

**Functional Component**

  <table>
    <tr>
      <th>Without  previous </th>
      <th>With  previous </th>
    </tr>
    <tr>
      <td>

  ```jsx
 () => {
    let initialCount  = 0
    const [count, setCount] = useState(initialCount);
    
    const increamentFive = () => {
      for(let i = 0; i < 5; i++){
        // Looping 5 times to increament +5
        setCount(count + 1);
        // but output will be the +1 only, due to delay of setCount
      }
    }

    return (
      <p>COunt: {count}</p>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <button onClick={() => setCount(count - 1)}>Decreament</button>
      <button onClick={() => setCount({increamentFive})}>Increament + 5</button>
    )
  }
  ```

  </td>
  <td>

  ```jsx
() => {
  let initialCount  = 0
  const [count, setCount] = useState(initialCount);
  
  const increamentFive = () => {
    for(let i = 0; i < 5; i++){
      // Looping 5 times to increament +5
      setCount(prevState => prevState + 1);
      // prevState is a previous state value
    }
  }

  return (
    <p>COunt: {count}</p>
    <button onClick={() => setCount(initialCount)}>Reset</button>
    <button onClick={() => setCount(count + 1)}>Increament</button>
    <button onClick={() => setCount(count - 1)}>Decreament</button>
    <button onClick={() => setCount({increamentFive})}>Increament + 5</button>
  )
}

```

  </td>
</tr>
  </table>

**Class Component**

<table>
  <tr>
    <td>Class Component</td>
  </tr>
  <tr>
    <td>

```jsx
incrementCount = () => {
  this.setState(prevState => {
    return {
      count: prevState.count + 1
    }
  })
}
```

  </td>
  </tr>
</table>

## useState with object

1. We have to use `spread` operator when dealing with `Objects`.
1. It automatically update objects of `useState` hooks.
1. You have to pass the entire object to the `useState` updater function as the object *is replaced NOT merged*

<table>
  <tr>
    <td>Without spread operator</td>
    <td>With spread operator</td>
  </tr>
  <tr>
    <td>

```jsx
() => {

  const [name, setName] = useState({firstName: '', lastName: ''});
  return (
    <form action="">
      <input type="text" value={name.firstName} onChange={ e => setName({firstName: e.target.value})}/>
      <input type="text" value={name.lastName} onChange={ e => setName({lastName: e.target.value})} />
      <h2>Your First Name is - {name.firstName}</h2>
      <h2>Your Last Name is - {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </form>
    // shows only any one object property, due to the NOT adding existing object properties.
  )
}
```

  </td>
  <td>
  
```jsx
() => {

  const [name, setName] = useState({firstName: '', lastName: ''});
  return (
    <form action="">
      <input type="text" value={name.firstName} onChange={ e => setName({ ...name, firstName: e.target.value})}/>
      <input type="text" value={name.lastName} onChange={ e => setName({ ...name, lastName: e.target.value})} />
      <h2>Your First Name is - {name.firstName}</h2>
      <h2>Your Last Name is - {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </form>
    // shows all object properties, because adding all objects.
  )
}
```

  </td>
  </tr>
</table>


## useState with Array

1. Use `spread` operator to append items values

```jsx
() => {
  const [item, setItem] = useState([]);
  
  const add = () => {
    setItem([
      ...items,
      {
        id: item.length,
        value: Math.floor(Math.random() * 10) + 1
      }
    ])
  }

  return (
    <ul>
      {item.map(items => {
        <li key={item.id}>
          {item.value}
        </li>
      })}
    </ul>
    <button onClick={() => setCount(add)}>add Item</button>
  )
}
```

## Initialize State from Function

1. As opposed to just passing an initial state value, state could also be initialized from a function as shown below:

```jsx
() => {
  const [token] = useState(() => {
    let token = window.localStorage.getItem("my-token");
    return token || "default#-token#"
  })

  return <div>Token is {token}</div>
}
```