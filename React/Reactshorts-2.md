# React Part 2

# Contents

1. [Rendering the List](#rendering-the-list)
1. [Index key pattern](#index-as-key-anti-pattern)
1. [Styling CSS](#styling-and-css-basics)
    - [Stylesheets](#css-stylesheets)
    - [Inline styling](#inline-styling)
    - [CSS Modules](#css-modules)
    - [Ways to Style Component](#ways-to-style-components)
        1. [Using Regular CSS](#using-regular-css)
        1. [Importing CSS File](#importing-css-file)
        1. [Using SCSS](#using-scss)
        1. [Using Template Literals (Backticks) for Inline Styles](#using-template-literals-backticks-for-inline-styles)
1. [Basic of Form Handling](#basic-of-form-handling)
1. [Life cycle Methods](#life-cycle-methods)
    - [Component Mounting Lifecycle Methods](#1-component-mounting-lifecycle-methods)
    - [Component Updating Lifecycle Methods](#2-component-updating-lifecycle-methods)

## Rendering the List

Rendering the list using `Array.map()`

#### Map the item

1. Move the data into an array:
   -  ```jsx
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
   -  ```jsx
      const listItems = people.map(person => <li key={person.id}>{person.name}</li>);
      ```

3. Return `listItems` from your component wrapped in a `<ul>`:
   -  ```jsx
      return <ul>{listItems}</ul>;
      ```


***Best Practice to use Separate Component of List***
   -    ```jsx
        // Person.jsx

        import React from 'react'

        const Person = ({personName, key}) => {
          return (
            <li key={key}>{personName}</li>
          )
        }
        export default Person


        // NameList.jsx

        import React from 'react'

        const NameList = () => {
          const listItems = people.map(person => <Person key={person.id} personName={person.name} />);
          return (
            <div>{listItems}</div>
          )
        }
        export default NameList

        ```

> NOTE: you will get error in console, that *key* is keywork in ReactJS. 

1. A "key" is a special string attribute you need to include when creating lists of elements.
1. Keys give the elements a stable identity
1. Keys help React identify which items have changed, are added, or are removed.


## Index as Key Anti-pattern

When to use Index key in `Array.map`:
1. The items in your list do not have a unique id.
1. The list is a static list and will not change.
1. The list will never be reordered or filtered.

```jsx
// NOT recommended
const listItems = people.map((person, index) => <Person key={index} personName={person.name} />);
```


##  Styling and CSS Basics

1. CSS stylesheets
2. Inline styling
3. CSS Modules
4. CSS in IS Libaries (Styled Components)
5. Ways to style components

### CSS stylesheets

<table>
  <tr>
    <th>StyleComponent.jsx</th>
    <th>myStyles.css</th>
  </tr>
  <tr>
    <td>

      ```jsx
      import React from 'react'
      import './myStyles.css'

      function Stylesheet() {
        return(
          <h1 className='primary'>Hello World!</h1>
        );
      }
      export default Stylesheet
      ```

  </td>
  <td>

    ```css
    .primary{
      color: orange;
    }
    .font-xl{
      font-size: 28px;
    }
    ```
  </td>
  </tr>
   <tr>
    <th>Multiple classes</th>
  </tr>
  <tr>
    <th>App.jsx</th>
    <th>Stylesheet.jsx</th>
  </tr>
  <tr>
  <td>
      
```jsx
import React, {Component} from 'react'
class App extend Component() {
  render(){
    return(
      // ...

      <Stylesheet className={true}/> // try to do with false also

      // ...
    )
  }
}
export default Stylesheet
```
  
  </td>
  <td>

```jsx
import React from 'react';
import './myStyles.css'

function Stylesheet(props) {
  let className = props.primary ? 'primary' : ''
  return(
    <h1 className={`${className} font-xl`}>Hello World!</h1>
  );
}
export default Stylesheet
```
  
  </td>
  </tr>
</table>

### Inline styling

```jsx
import React from 'react'

const heading = {
  fontSize: '72px',
  color: 'blue'
}

function Inline() {
  return (
    <h1 style={heading}>Inline</h1>
  )
}
export default Inline
```

### CSS Modules

> To use CSS modules, `react-script` version should be *greater* than `2.0.0`

*Use* **module.css** for Best Practices.

<table>
<tr>
  <th>.css</th>
  <th>.module.css</th>
</tr>
<tr>
  <td>Global scope</td>
  <td>Local Scope</td>
</tr>
<tr>
  <td>No need write Module Name</td>
  <td>Should write Module Name</td>
</tr>
<tr>
  <td>Classes affect to children components</td>
  <td>Modules does NOT effect to children components</td>
</tr>
<tr>
<td>

```jsx
import './myStyles.css'
```

</td>
<td>

```jsx
import styles './myStyles.module.css'
```

  </td>
</tr>
<tr>
  <td>

```jsx
import React from 'react'
import './myStyles.css'

function Person() {
  return (
    <h1 className={color}>Name</h1>
  )
}
export default Person
```

  </td>
  <td>
  
```jsx
import React from 'react'
import styles from './myStyles.module.css'

function Person() {
  return (
    <h1 className={styles.color}>Name</h1>
  )
}
export default Person
```

  </td>
  </tr>
</table>

### Ways to Style Components

1. [Using Regular CSS](#using-regular-css)
1. [Importing CSS File](#importing-css-file)
1. [Using SCSS](#using-scss)
1. [Using CSS Modules]()
1. [Using Template Literals (Backticks) for Inline Styles](#using-template-literals-backticks-for-inline-styles)

#### Using Regular CSS

**Approach 1:** Inline styles

```jsx
import React from 'react';

const RegularCSSInline = () => {
  const divStyle = {
    color: 'blue',
    backgroundColor: 'lightgray',
    padding: '10px',
  };

  return <div style={divStyle}>Component with inline regular CSS</div>;
};

export default RegularCSSInline;
```

#### Importing CSS File:

**Approach 2:** External CSS file

```jsx
import React from 'react';
import './ExternalCSSFile.css'; // Import the external CSS file

const ExternalCSSFile = () => {
  return <div className="external-css-component">Component with external CSS</div>;
};

export default ExternalCSSFile;
```
```css
/* ExternalCSSFile.css */
.external-css-component {
  color: blue;
  background-color: lightgray;
  padding: 10px;
}
```

#### Using SCSS:

**Approach 3:** External SCSS file

```jsx
import React from 'react';
import './ExternalSCSSFile.scss'; // Import the external SCSS file

const ExternalSCSSFile = () => {
  return <div className="external-scss-component">Component with external SCSS</div>;
};

export default ExternalSCSSFile;
```
```scss
// ExternalSCSSFile.scss
.external-scss-component {
  color: blue;
  background-color: lightgray;
  padding: 10px;
}
```

#### Using CSS Modules:

**Approach 4:** CSS Modules in React

- CSS Modules allow scoped styling by generating [unique class names](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet).

```jsx
import React from 'react';
import styles from './Component.module.css'; // Import CSS Module

const CSSModulesComponent = () => {
  return <div className={styles.component}>Component with CSS Modules</div>;
};

export default CSSModulesComponent;
```
```css
/* Component.module.css */
.component {
  color: blue;
  background-color: lightgray;
  padding: 10px;
}

```

#### Using Template Literals (Backticks) for Inline Styles:

**Approach 5:** styled-components in React
- Styled-components allow writing CSS directly within your JavaScript files.

```jsx
import React from 'react';
import styled from 'styled-components';

// Create a styled component for the Card
const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

// Create another styled component for the heading inside the Card
const Heading = styled.h2`
  color: #333;
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const Content = styled.p`
  color: #555;
  font-size: 1.1em;
`;

const StyledCard = () => {
  return (
    <Card>
      <Heading>Styled Card</Heading>
      <Content>
        This is a custom-styled card component using styled-components in React.
      </Content>
    </Card>
  );
};

export default StyledCard;
```

#### Best Practices for Styling components

1. **Inline Styles:**
   - *Pros:* Simple and straightforward. Dynamic and easily adaptable based on props or state.
   - *Cons:* Clutters component, limited reusability.

2. **External CSS File:**
   - *Pros:* Separates concerns, clear structure, global scope.
   - *Cons:* Naming conflicts, lacks scoping.

3. **SCSS:**
   - *Pros:* Advanced features (nesting, variables), improved organization.
   - *Cons:* Requires compilation, additional setup.

4. **CSS Modules:**
   - *Pros:* Local scoping, modularity, avoids naming conflicts.
   - *Cons:* Setup required, learning curve.

5. **Styled-Components:**
   - *Pros:* Component-level styling, reusability, dynamic styles.
   - *Cons:* CSS-in-JS learning curve, potential bundle size increase.

### Standard Practices:
- **Project Size:** Inline styles or external CSS are suitable for small projects.
- **Large Projects:** CSS Modules or styled-components provide encapsulation and modularity.
- **SCSS:** Suited for larger applications, needs additional setup.

**Recommendation:** Combine methods based on the project's needs. For instance, use styled-components for reusable components and CSS Modules for smaller ones to balance modularity and ease of use.

Remember to consider project specifics, team skills, and preferences while selecting a styling approach. The choice might vary depending on the project's scale and requirements.


## Basic of Form Handling

![Alt text](./assets/form-handling.png)

```jsx
import React, { Component } from 'react';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      textAreaValue: '',
      selectValue: 'Option 1',
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  handleTextAreaChange = (event) => {
    this.setState({ textAreaValue: event.target.value });
  }

  handleSelectChange = (event) => {
    this.setState({ selectValue: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can use this.state to access the form data
    console.log('Input Value:', this.state.inputValue);
    console.log('Text Area Value:', this.state.textAreaValue);
    console.log('Select Value:', this.state.selectValue);
    // You can perform other actions like API calls or further processing here
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Input:</label>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>Text Area:</label>
          <textarea
            value={this.state.textAreaValue}
            onChange={this.handleTextAreaChange}
          />
        </div>
        <div>
          <label>Select Option:</label>
          <select value={this.state.selectValue} onChange={this.handleSelectChange}>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default MyForm;
```

## Life cycle Methods

 <table>
  <tr>
    <td>

![Alt text](./assets/Life-cycle-methods.png)

  </td>
  <td>

![Alt text](./assets/Life-cycle-methods-with-methods.png)

  </td>
  </tr>
 </table>


### 1 Component Mounting Lifecycle Methods

 <table>
  <tr>
    <td>

![Alt text](./assets/image-mount-1.png)

  </td>
  <td>

![Alt text](./assets/image-mount-2.png)

  </td>
  </tr>
  <tr>
    <td>

![Alt text](./assets/image-mount-3.png)

  </td>
  <td>
    
![Alt text](./assets/image-mount-4.png)

  </td>
  </tr>
 </table>


```jsx
import React, { Component } from 'react'

export class LifeCycleA extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Salman'
    }

    console.log('LifecycleA constructor');
  }

  static getDerivedStateFromProps(props, state){
    // it has to return new state or null
    console.log('LifecycleA getDerivedStateFromProps');
    return null
  }

  componentDidMount(){
    console.log('LifecycleA componentDidMount')
  }

  render() {
    console.log('LifecycleA render');
    return (
      <div>LifeCycleA render</div>
    )
  }
}

export default LifeCycleA
```
```console
console

LifecycleA constructor
LifecycleA getDerivedStateFromProps
LifecycleA render
LifecycleA componentDidMount
```

---

##### If you create same component with changing name from A to B and add LifecycleB component in A component, it will show below output

```jsx
// ...  code

  render() {
    console.log('LifecycleA render');
    return (
      <>
      <div>LifeCycleA render</div>
      <LifecycleB />
      </>
    )
  }

// ... 
```

```console
console

LifecycleA constructor
LifecycleA getDerivedStateFromProps
LifecycleA render
LifecycleB constructor
LifecycleB getDerivedStateFromProps
LifecycleB render
LifecycleB componentDidMount
LifecycleA componentDidMount
```

### 2 Component Updating Lifecycle Methods

 <table>
  <tr>
    <td>

  ![Alt text](./assets/image-update-1.png)

  </td>
  <td>

  ![Alt text](./assets/image-update-2.png)

  </td>
  </tr>
  <tr>
    <td>

  ![Alt text](./assets/image-update-3.png)

  </td>
  <td>

  ![Alt text](./assets/image-update-4.png)

  </td>
  </tr>
  <tr>
  <td col-span=2>
  
  ![Alt text](./assets/image-update-5.png)

  </td>
  </tr>
 </table>

 <table>
  <tr>
    <td>

```jsx
// LifeCycleA.jsx

import React, { Component } from 'react'
import LifecycleB from './LifeCycleB';

export class LifeCycleA extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Salman'
    }

    console.log('LifecycleA constructor');
  }

  static getDerivedStateFromProps(props, state){
    // it has to return new state or null
    console.log('LifecycleA getDerivedStateFromProps');
    return null
  }

  componentDidMount(){
    console.log('LifecycleA componentDidMount');
  }

  componentDidUpdate(){
    console.log('LifecycleA componentDidUpdate')
  }

  shouldComponentUpdate(){
    console.log('LifecycleA shouldComponentUpdate')

    // it returns only TRUE or FALSE

    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('LifecycleA getSnapshotBeforeUpdate');
    return null
  }

  changeState(){
    this.setState({
      name: 'react'
    })
  }

  render() {
    console.log('LifecycleA render');
    return (
      <>
      <div>LifeCycleA render</div>
      <button onClick={this.changeState}>Click</button>
      <LifecycleB />
      </>
    )
  }
}

export default LifeCycleA
```

  </td>
  <td>

```jsx
// LifeCycleB.jsx

import React, { Component } from 'react'

export class LifecycleB extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Salman'
    }

    console.log('LifecycleB constructor');
  }

  static getDerivedStateFromProps(props, state){
    // it has to return new state or null
    console.log('LifecycleB getDerivedStateFromProps');
    return null
  }

  componentDidMount(){
    console.log('LifecycleB componentDidMount')
  }

  componentDidUpdate(){
    console.log('LifecycleB componentDidUpdate')
  }

  shouldComponentUpdate(){
    console.log('LifecycleB shouldComponentUpdate')

    // it returns only TRUE or FALSE

    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('LifecycleB getSnapshotBeforeUpdate');

    return null
  }

  render() {
    console.log('LifecycleB render');
    return (
      <div>LifecycleB render</div>
    )
  }
}

export default LifecycleB
```

  </td>
 </tr>
 </table>

```console
console

LifecycleA constructor
LifecycleA getDerivedStateFromProps
LifecycleA render
LifecycleB constructor
LifecycleB getDerivedStateFromProps
LifecycleB render
LifecycleB componentDidMount
LifecycleA componentDidMount
```

**After clicking on the BUTTON the output will be below like this**

```console
LifecycleA getDerivedStateFromProps
LifecycleA shouldComponentUpdate
LifecycleA render
LifecycleB getDerivedStateFromProps
LifecycleB shouldComponentUpdate
LifecycleB render
LifecycleB getSnapshotBeforeUpdate
LifecycleA getSnapshotBeforeUpdate
LifecycleB componentDidUpdate
LifecycleA componentDidUpdate
```

### 3 Unmount Methods

![Alt text](./assets/image-unmount-1.png)


### 4 Error Handling Phase Methods

![Alt text](./assets/Error-Handling-Phase.png)