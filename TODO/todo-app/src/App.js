import React,{useState} from 'react';
import './App.css';

function App() {
  // Create states to store the todo's
  let [todo, setTodo] = useState('')
  let [todos, setTodos] = useState([])

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Monday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(e) => {
          setTodo(e.target.value)
        }} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>{
          setTodos([...todos, todo]) // list
        }} className="fas fa-plus"></i>
      </div>
      {
        todos.map((val) => {
          return (
           <>
            <div className="todos">
              <div className="todo">
                <div className="left">
                  <input type="checkbox" name="" id="" />
                  <p>{val}</p>
                </div>
                <div className="right">
                  <i className="fas fa-times"></i>
                </div>
              </div>
            </div>
          </>
          )
        })
      }
      
    </div>
  );
}

export default App;