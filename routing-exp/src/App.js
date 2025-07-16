import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Profile from './components/Profile';
import About from './components/About';
import Layout from './components/Layout';
import NoPage from './components/NoPage';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Layout />} />
          <Route path="profile" element={<Profile />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
