import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import Joheesu from './components/Projects/Joheesu';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/Photographer-Portfolio" element={<Joheesu />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
