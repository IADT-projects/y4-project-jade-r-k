import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//pages
import Home from './pages/Home';
//static pages
import StaticHome from './pages/static/Home';
import StaticForm from './pages/static/Form';
import StaticGallery from './pages/static/Gallery';
//interactive pages
import InteractiveHome from './pages/interactive/Home'
import InteractiveForm from './pages/interactive/Form'
import InteractiveGallery from './pages/interactive/Gallery'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/static/' element={<StaticHome />} />
        <Route path='/static/form' element={<StaticForm />} />
        <Route path='/static/gallery' element={<StaticGallery />} />

        <Route path='/interactive/' element={<InteractiveHome />} />
        <Route path='/interactive/form' element={<InteractiveForm />} />
        <Route path='/interactive/gallery' element={<InteractiveGallery />} />
      </Routes>
    </Router>
  );
}

export default App;
