import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//pages
import Home from './pages/Home';
import Static from './pages/Static';
import Interactive from './pages/Interactive';


import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        {/* Routes to pages */}
        <Route path='/' element={<Home />} />
        <Route path='/static/' element={<Static/>} />
        <Route path='/interactive/' element={<Interactive/>} />
      </Routes>
    </Router>
  );
}

export default App;
