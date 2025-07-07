// Counter component : use to learn the concept of useEffect 
/* 
- useeffect : is a hook function in react, to perform actions during the life cycle methods.
- stages of components 
1. Mounting : when a component is created.
2. Unmounting : when a component is removed.
3. Updating : when the value of the state in component is edited.
- useeffect takes 2 paramters,
1. callback function: activtes when it is mounting.(react18^ mount twice in restriced wrapping) ie. mounting-unmounting-mouting, 
return of the call back function : activates when the component is removed(once)
2. List : to pass of the states where the mounting-unmounting has to be work

*/

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