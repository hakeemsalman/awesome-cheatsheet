# React Short Notes

## Topics

1. [Functional vs Class Component](#functional-vs-class-component)
1. [JSX syntax](#jsx-syntax)
1. [Props](#props)
1. [State](#state)
1. [setState]()

## Functional vs Class Component

<table>
  <thead>
    <tr>
      <th>Functional Component</th>
      <th>Class Component</th>
  </tr>
  </thead>
  <tbody>
    <tr>
      <td>Simple functions</td>
      <td>More Rich Features</td>
    </tr>
    <tr>
      <td>Use Func components as much as Possible</td>
      <td>Maintain their own private data - state</td>
    </tr>
    <tr>
      <td>Absense of 'this' keyword. </td>
      <td>Complex UI logic</td>
    </tr>
    <tr>
      <td>Solution without using `state` </td>
      <td>Provide Lifecycle Hooks</td>
    </tr>
    <tr>
      <td>mainly responsibel for UI</td>
      <td>Stateful/ Smart/ Container</td>
    </tr>
    <tr>
      <td>Stateless/ Dumb/ Presentational</td>
    </tr>
</tbody>
</table>

## JSX Syntax

1. JavaScript XML (JSX) - Extension to the JavaScript language syntax.
1. Write XML-like code for elements and components.
1. JSX tags have a tag name, attributes, and children.
1. JSX is not a necessity to write React applications.
1. JSX makes your react code simpler and elegant.
1. JSX ultimately transpiles to pure JavaScript which is understood by the browsers.




```jsx
import React from "react";

const Hello = () = {
//  return(
//    <div className='dummyClass'>
//      <h1>Hello Vishwas</h1>
//    <div>
//  )

  return React.createElement('div',{id:'hello', className: 'dummyClass'},React.createElement('h1', null,'Hello Vishwas')
  )
  
}
export default Hello
```

***JSX differences***
- class -> className
- for -> htmiFor
- camelCase property naming convention
- onclick -> onClick
- tabindex > tabindex

## Props

- Props should be written in `{...}` *curly brackets*.
- Props are ***immutable***, *unchangable*. You cannot assign a value to `props`.
- Props can be write in both Func and Class Component
- `this` keyword is used to use **props** in *Class* component, `this.props`

1. props is a Passing parameter to the Component.
    -   ```jsx
        // Greet.jsx

        const Greet = (props) => {
          console.log(props);
          // props.name = 'Salman'  // error, props are immutabale
          return <h1>Hello {props.name} a.k.a {props.heroname}</h1> 
        }

        // App.jsx

        render(){
          return(
            <div>
              <Greet name="Bruce" heroname="Batman">
            </div>
          )
        }
        ```

1. We can pass *children* means inner Content to component
    - ```jsx
      // Greet.jsx

      const Greet = (props) => {
        console.log(props);
        return (
          <div>
            <h1>Hello {props.name} a.k.a {props.heroname}</h1>
            {props.children}
          </div>
        )
      }

      // App.jsx

      render(){
        return(
          <div>
            <Greet name="Bruce" heroname="Batman">
              Bruce Also known as Batman // this content is called children inside a component
            </Greet>
            <Greet name="Bruce" heroname="Batman" /> // we passed nothing here so nothing will be rendered
            <Greet name="Bruce" heroname="Batman">
              <button>CLick me</button> // button is rendere only this component
            </Greet>
          </div>
        )
      }
      ```


## State

- `state` - is used to *store* the value.
- `setState` - is a **method** used to *change* the current `state` value.
- We need to import `useState` and use it in function
   -  `import { useState } from 'react';`
   -  `const [index, setIndex] = useState(0);`
- `useState('...')` in this, we have to add a pre-value.



<table>
  <thead>
    <tr>
      <th>Props</th>
      <th>State</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Props get passed to the components</td>
      <td>state is managed within the component</td>
    </tr>
    <tr>
      <td>Function parameters</td>
      <td>Variables declared in the function body</td>
    </tr>
    <tr>
      <td>props are immutable</td>
       <td>State can be changed</td>
    </tr>
    <tr>
      <td>
        props- Functional Comp. <br>
        this.props - Class Comp. 
      </td>
      <td>
        useState Hook - Function comp. <br>
        this.state - Class comp. 
      </td>
    </tr>
  </tbody>
</table>

**Suppose change the Name by click on Button using props** but it gives error.

1. Take another variable called `value`, click on button. Nothing change in UI, but variable value is changed
   - ```jsx
      // Message.jsx

      import React from 'react'

      const Message = (props) => {
        let value = props.name;
        return (
          <div>
            <h1>{value}</h1>
            <button onClick={()=>{value= 'salman'; console.log(value);}}>Click</button>
          </div>
        )
      }

      export default Message;


      // App.jsx class component

      render(){
        return(
          <div>
            <Greet name="Bruce"/>
          </div>
        )
      }
      ```
1. Without using Variable, you will get *error*
   -  ```jsx
      // Message.jsx

      import React from 'react'

      const Message = (props) => {
        return (
          <div>
            <h1>{props.name}</h1>
            <button onClick={props.name = 'salman'}>Click</button> // error, props are immutable
          </div>
        )
      }

      export default Message;


      // App.jsx class component

      render(){
        return(
          <div>
            <Message name="Bruce"/>
          </div>
        )
      }
      ```
1. Using `state` **Hook**,

   -  ```jsx
      // Message class component

      import React, { Component } from 'react'

      export default class Message extends Component {

        constructor(){
          super(); // we extend parent Component, so we need call parent constructor first.
          this.state = {
            name: this.props.name
          }
        }

        changeMessage(){
          this.setState({
            name : 'Salman'
          })
        }

        render() {
          return (
            <div>
              <h1>Welcome {this.state.name}</h1>
              <button onClick={() => this.changeMessage()}>Click Me</button>
            </div>
          )
        }
      }


      // Message Functional Component

      import React, { useState } from 'react'

      const Message = (props) => {

        const [name, setName] = useState(props.name);
        const [index, setIndex] = useState(0); // you can write as many as useState, it won't affect to another useState method(state)

        return (
          <div>
            <h1>Welcome {name}</h1>
            <button onClick={() => {setName('Hello')}}>Click</button>
          </div>
        )
      }

      export default Message;

      // App.jsx

      render(){
        return(
          <div>
            <Message name="Bruce"/>
          </div>
        )
      }
      ```

## setState method in class components







