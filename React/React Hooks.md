# React Hooks

1. Hooks are a new feature addition in React version 16.8 which allow you to use React features without having to write a class.
  - Ex: State of a component
1. Hooks don't work inside classes

## Why Hooks?

*pending*

## Contents

1. [Keypoints](#keypoints)
1. [useState](#usestate)

## Keypoints

- React version 16.8 or higher
- Completely opt in
- Hooks don't contain any breaking changes and the release is 100% backwards-compatible.
- Classes won't be removed from React
- Can't use Hooks inside of a class component
- Hooks don't replace your existing knowledge of React concepts
- Instead, Hooks provide a more direct API to the React concepts you already know

## useState

Keypoints:
- **Only Call Hooks at the Top Level**
  - Don't call Hooks inside loops, conditions, or nested functions
- **Only Call Hooks from React Functions**
  - Call them from within React functional components and not just any regular JavaScript function

```jsx
// ...
  const [count, setCount] = useState(1);
// ...
  <button onClick={() => setName(count + 1)}>Click on me: {count}</button>
// ...
```

```jsx
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