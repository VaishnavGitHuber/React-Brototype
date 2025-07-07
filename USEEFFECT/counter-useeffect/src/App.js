
import './App.css';
import Counter from "./components/Counter"
import {useState} from 'react'

function App() {
  let [isVisible, updateState] = useState(false);

  return (
    <div className="App">
      <h3 onClick={() => {updateState(!isVisible)}}>Show / Hide Component</h3>
      {isVisible ? <Counter/>: null}
    </div>
  );
}

export default App;
