import axios from 'axios';
import './App.css';
import {useState} from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <div>
    <button onClick={()=>{
      axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
        setPosts(response.data);
      })
    }}>Load the Posts</button>
    <div className='post-list'>
      <h1>Post List</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td> 
              <td>{post.body}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}
export default App;
