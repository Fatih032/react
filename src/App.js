import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Counter from './components/Counter';
import MyGallery from './components/MyGallery';
import Navigation from './components/Navigation';
import SearchFilter from './components/SearchFilter';
import Login from './components/Login';
import Buttons from './components/Buttons';

function App() {
  return (
    <div id='app' className="App">
      <Navigation />
      <br />
      <Router>
        <Routes>
          <Route path="react/counter" element={<Counter />} />
          <Route path="react/photogallery" element={<MyGallery />} />
          <Route path="react/searchfilter" element={<SearchFilter />} />
          <Route path='react/login' element={<Login />} />
          <Route path='react/button' element={<Buttons />} />

        </Routes>
          <Link to='/react/counter'>Counter</Link>
          <Link to='/react/photogallery'>Photo Gallery</Link>
          <Link to='/react/searchfilter'>Search Filter</Link>
          <Link to='/react/login'>Login</Link>
          <Link to='/react/button'>Buttons</Link>
      </Router>

    </div>
  );
}

export default App;


 
