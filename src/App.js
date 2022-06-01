import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
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
          <Route path="/counter" element={<Counter />} />
          <Route path="/photogallery" element={<MyGallery />} />
          <Route path="/searchfilter" element={<SearchFilter />} />
          <Route path='/login' element={<Login />} />
          <Route path='/button' element={<Buttons />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


 
