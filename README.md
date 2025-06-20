##### React-Brototype

### First week consist of 5 Lecture 15 June 2025 to 22 June 2025 
- L1 : Introduction to React ✅ 15 June 2025
- L2 : DOM, Virtual DOM, Function and class component ✅ 16 June 2025
- L3 : Hooks, use state, spread operator ✅ 18 June 2025
- L4 : use effect ✅ 19 June 2025
- L5 : Todo project

### L1 Introduction to React
- React is a Javascript frontend framework devoloped by facebook in 2013.
- React uses JSX(Javascript XML) which is similar to HTML.
- React is used to devolop SPA(Single page application)
- Installation of react includes
  1. download and install node(npm comes along with the node installation)
     ```
     node -v
     npm -v
     ```
     to verify the installation.
  2. Creating a react project
     ```
     npx create-react-app <app_name>
     ```
- Once the project is created with the specified app_name, ready for the use.

### L2 DOM, Virtual DOM, Function and class component
---- 
- Components(one of many pieces) are used to break the complex UI structures into managable pieces.
- Components can be achived in 2 ways,
  1. Function component
  2. Class Component
- Function Component => (**stateless component**) Function components are basic Javascript function that **acceps props arguments** and **return react elements(JSX)**
```
fucntion Welcome(props) {
     return (<h1>Welcome, {props.name}</h1>);
}
export default Welcome;
```
- Class component => (**stateful component**) Class component extends Component class from react library, **render function returns react elements(JSX
```
import React from 'react'

class Welcome extends React.Component {
     render(){
          return (<h1>welcome, {this.props.name}</h1>);
     }
}
export default Welcome;
```
---- 
### L3 Hooks, use state, spread operator
- **React Hooks**: React Hooks are special methods, that let you use state, life cycle methods, other features of react.
- Syntax for defining a state using react hooks(useState)
  ```
  import {useState} from 'react'

  def Counter(){
    // defining a state using React Hooks(useState)
    // count -> current value of state, setCount -> function to update state, useState -> hooks to define state
  
    let [count, setCount] = useState(0);
    const addCount = () => {
      setCount(count + 1);
    }
  
    return (
      <button onClick = {addCount}>Add</button>
      <h2>Counter : {count}</h2>
    )
  }
  ```
  - **Spread operator** used to pass multiple parameters in a single object
    ```
    const obj ={
    title:'Counter 1',
    count,
    }
    <Counter  {...obj}/> // ... -> spread operator
    ```
