
import {useState} from 'react';
function App() {
  let [count, funCount] = useState(0)

  const addCount = () => {
    funCount(count+1)
    console.log(count)
  }

  const subCount = () => {
    funCount(count-1)
    console.log(count)
  }

  return (
    <div>
      <button onClick={addCount}>Add Count</button>
      <button onClick={subCount}>Sub Count</button>
      <h1>Count: {count}</h1>
    </div>
  );
}

export default App;
