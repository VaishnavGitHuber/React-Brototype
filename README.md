##### React-Brototype


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
---
### L4 : USEEFFECT
  - **useeffect:** Use effect is used to perform some action during the life cycle of the components
  - stages of the components,
    1. Mounting - loading a new component
    2. Updating - updating the value of the state 
    3. UnMounting - removing the component
  - useeffect takes 2 paramters,
    1. callback function: activtes when it is mounting.(react18^ mount twice in restriced wrapping) ie. mounting-unmounting-mouting, 
return of the call back function : activates when the component is removed(once)
    2. List : to pass of the states where the mounting-unmounting has to be work.
    ```
    import {useEffect, useState} from 'react'

    function Counter(){
        let [count, updateCount] = useState(0);
    
        useEffect(()=>{
            console.log("Mounting "+count);
    
            return () => {
                console.log("Un Mounting "+ count);
            }
        }, [count])
    
        const AddCount = () => {
            updateCount(count+1);
        }
        return (
            <>
            <button onClick={AddCount}>Increment value</button>
            <h2>Counter: {count}</h2>
            </>
        )
    }
    export default Counter;
    ```
---
### L5 TODO APP 
![](TODO/todo-app/output.png)
---
### L6 Amazon clone 
- using HTML + CSS
![](AMAZON-CLONE/output.png)
---

