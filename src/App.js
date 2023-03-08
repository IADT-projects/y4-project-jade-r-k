import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//pages
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <Routes>
        {/* Routes to pages */}
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
